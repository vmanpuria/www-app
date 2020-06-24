import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsComponent } from './terms/terms.component';
import { ReturnsComponent } from './returns/returns.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    BottomBarComponent,
    ContactUsComponent,
    TermsComponent,
    ReturnsComponent,
    PrivacyComponent,
    SuccessComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'success', component: SuccessComponent },
      { path: 'cancel', component: CancelComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'returns', component: ReturnsComponent },
      { path: 'privacy', component: PrivacyComponent }
    ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
