import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavPanelComponent } from './components/header/nav-panel/nav-panel.component';
import { OpacityDDirective } from './directives/opacity-d.directive';
import { UnderlineDDirective } from './directives/underline-d.directive';
import { ZoomDDirective } from './directives/zoom-d.directive';
import { PointerDDirective } from './directives/pointer-d.directive';
import { ButtonHoverDDirective } from './directives/button-hover-d.directive';
import { InstructionPageComponent } from './components/instruction-page/instruction-page.component';
import { IntroductionPageComponent } from './components/introduction-page/introduction-page.component';
import { AlphabetComponent } from './components/main-page/alphabet/alphabet.component';
import { LGroupsComponent } from './components/main-page/l-groups/l-groups.component';
import { WordPageComponent } from './components/word-page/word-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    LogoComponent,
    MainPageComponent,
    NavPanelComponent,
    OpacityDDirective,
    UnderlineDDirective,
    ZoomDDirective,
    PointerDDirective,
    ButtonHoverDDirective,
    InstructionPageComponent,
    IntroductionPageComponent,
    AlphabetComponent,
    LGroupsComponent,
    WordPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
