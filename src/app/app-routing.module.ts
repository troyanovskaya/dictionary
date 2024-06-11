import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionPageComponent } from './components/instruction-page/instruction-page.component';
import { IntroductionPageComponent } from './components/introduction-page/introduction-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { WordPageComponent } from './components/word-page/word-page.component';

const routes: Routes = [
  { path: '', component: InstructionPageComponent },
  { path: 'instruction', component: InstructionPageComponent },
  { path: 'intro', component: IntroductionPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'word/:id', component: WordPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
