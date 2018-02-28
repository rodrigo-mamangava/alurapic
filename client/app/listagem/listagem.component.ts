import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {
        //listando fotos
        this.service = service;

        this.service
            .lista()
            .subscribe(fotos => {
                this.fotos = fotos;
            }, error => console.log(error));

    }

    remove(foto) {
        this.service
            .remove(foto)
            .subscribe(
                () => {
                    console.log('Foto removida com sucesso');                    
                    let novasFotos = this.fotos.slice(0);
                    let indice = novasFotos.indexOf(foto);
                    novasFotos.splice(indice, 1);
                    this.fotos = novasFotos;
                    this.mensagem = "Foto Removida com sucesso";
                },
                erro => {
                    console.log(erro);
                    this.mensagem = "Não foi possível remover a foto. Tente mais tarde";
                }
            );
    }

}