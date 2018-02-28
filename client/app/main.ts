import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModulo } from './app.module'
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModulo);
