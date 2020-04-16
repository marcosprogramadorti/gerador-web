import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IDialogavelDescricao } from '../../modelos/IDialogavelDescricao';

@Component({
  selector: 'app-dialog-gera-entidade',
  templateUrl: './dialog-gera-entidade.component.html',
  styleUrls: ['./dialog-gera-entidade.component.scss']
})
export class DialogGeraEntidadeComponent {

  rotulo: string = 'Descrição:';

  constructor(public dialogRef: MatDialogRef<DialogGeraEntidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogavelDescricao, public dialog: MatDialog) { }


validaCampo():boolean {
    /**
     * //TODO: EXPRESSAO RECULAR PARA VALIDAR O CONTEUDO
     * 
     * * */
    
    if (!this.data.descricao){
      return false;
    }
    if (this.data.descricao.length < 3){
      return false;
    }
    return true;
  }
  fecharDialogo(): void {
    this.dialogRef.close();
  }
  

}
