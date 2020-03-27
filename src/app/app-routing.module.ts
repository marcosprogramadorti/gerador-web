import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProjetoComponent } from './projeto/lista-projeto/lista-projeto.component';
import { FormArquivoComponent } from './compartilhado/forms/form-arquivo/form-arquivo.component';


const routes: Routes = [{
  path: '', component: ListaProjetoComponent,
},
{
  path: 'formArquivo', component: FormArquivoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
