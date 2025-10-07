import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

console.log('Bootstrapping Angular app...');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: unknown) => console.error(err));
