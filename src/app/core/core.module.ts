import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [],
  providers: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: CoreModule,
          providers: []
      };
  }

  // Avoid instantiation of multiple core module
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      if (parentModule) {
          throw new Error(
              'CoreModule is already loaded. Import it in the AppModule only');
      }
  }
}
