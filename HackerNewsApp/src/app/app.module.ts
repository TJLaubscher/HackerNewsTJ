import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { StoreModule } from '@ngrx/store';
import { ApiEffects } from './store/Effects/api.effects';
import * as fromApi from './store/reducers/api.reducer';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'item', component: ItemComponent },
      { path: 'user', component: UserComponent },
    ]),
    StoreModule.forRoot([]),
    StoreModule.forFeature(fromApi.apiFeatureKey, fromApi.reducer),
    StoreModule.forFeature(fromApi.apiJobStoriesFeatureKey, fromApi.jobStoriesReducer),
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    EffectsModule.forRoot([ApiEffects])
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

