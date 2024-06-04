import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionPageComponent } from './components/instruction-page/instruction-page.component';
import { IntroductionPageComponent } from './components/introduction-page/introduction-page.component';

const routes: Routes = [
  { path: '', component: InstructionPageComponent },
  { path: 'instruction', component: InstructionPageComponent },
  { path: 'intro', component: IntroductionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
