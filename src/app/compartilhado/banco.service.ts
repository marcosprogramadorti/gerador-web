import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogGenericoComponent } from './dialogos/dialog-generico/dialog-generico.component';
import { IFonteDados } from './modelos/IFonteDados';
import { UtilService } from './util.service';
import { DialogGeraEntidadeComponent } from './dialogos/dialog-gera-entidade/dialog-gera-entidade.component';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(public dialog: MatDialog, public utilService: UtilService) { }

  dialogRef: any;

  abrirDialogo<T>(f: IFonteDados<T>, componentOrTemplateRef: any): void {


    const dialogRef = this.dialog.open(componentOrTemplateRef, {
      width: '650px',
      height: '510px',
      data: f.selecionado
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('reult', result);
      console.log(dialogRef.getState());
      if (result) {
        let clone: T = this.clone<T>(f.selecionado)
        if (f.indice >= 0) {
          f.lista.data[f.indice] = (clone);
        } else {
          f.lista.data.push(clone);
        }
        f.lista._updateChangeSubscription();
        f.selecionado = {} as T;
        f.indice = -1;
      }

    });

  }


  public clone<T>(obj: T): T {
    var cloneObj = {} as T;
    for (var attribut in obj) {
      if (obj[attribut] && typeof obj[attribut] === "object") {
        cloneObj[attribut] = this.clone(obj[attribut]);
      } else {
        cloneObj[attribut] = obj[attribut];
      }
    }
    return cloneObj;
  }

  incioEditar<T>(f: IFonteDados<T>, i: number, linha: T): void {
    f.indice = i;
    f.selecionado = linha;
  }
  excluir<T>(f: IFonteDados<T>, i: number): void {
    let excluirGenerico = function fn() {
      f.lista.data.splice(i, 1);
      f.lista._updateChangeSubscription();
    }

    this.utilService.mensagemConfirma('Você tem certeza?', excluirGenerico);
  }

}
