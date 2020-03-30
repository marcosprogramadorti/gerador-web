import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProjetoComponent } from './projeto/lista-projeto/lista-projeto.component';
import { FormArquivoComponent } from './compartilhado/forms/form-arquivo/form-arquivo.component';
import { FormCodeDataComponent } from './compartilhado/forms/form-code-data/form-code-data.component';


const routes: Routes = [{
  path: '', component: ListaProjetoComponent,
},
{
  path: 'formArquivo', component: FormArquivoComponent,
},
{
  path: 'form', component: FormCodeDataComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
