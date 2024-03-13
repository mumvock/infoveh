import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { IvModule } from './app/iv.module';

platformBrowserDynamic()
  .bootstrapModule(IvModule)
  .catch((error) => console.error(error));