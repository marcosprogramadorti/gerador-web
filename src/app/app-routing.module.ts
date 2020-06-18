import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProjetoComponent } from './projeto/lista-projeto/lista-projeto.component';
import { FormArquivoComponent } from './compartilhado/forms/form-arquivo/form-arquivo.component';
import { FormCodeDataComponent } from './compartilhado/forms/form-code-data/form-code-data.component';
import { FormGeraEntidadeComponent } from './compartilhado/forms/form-gera-entidade/form-gera-entidade.component';
import { SsoComponent } from './sso/sso.component';


const routes: Routes = [{
  path: '', component: ListaProjetoComponent,
},
{
  path: 'formArquivo', component: FormArquivoComponent,
},
{
  path: 'formGeraEntidade', component: FormGeraEntidadeComponent,
},
{
  path: 'form', component: FormCodeDataComponent,
},
{
  path: 'sso', component: SsoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
