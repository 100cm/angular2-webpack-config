/**
 * Created by atyun on 9/18/16.
 */
// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './module/app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);