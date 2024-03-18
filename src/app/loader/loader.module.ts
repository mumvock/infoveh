import { APP_INITIALIZER, NgModule } from '@angular/core';

import { LoaderComponent } from './loader.component';
import { LoaderService } from './services/loader.service';

@NgModule({
    declarations: [LoaderComponent],
    providers: [
        {
            provide: APP_INITIALIZER, 
            multi: true, 
            deps: [LoaderService], 
            useFactory: () => () => null
        }
    ],
})
export class LoaderModule {}

