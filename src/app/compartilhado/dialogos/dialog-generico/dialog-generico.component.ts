import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { IDialogavelDescricao } from '../../modelos/IDialogavelDescricao';

@Component({
  selector: 'app-dialog-generico',
  templateUrl: './dialog-generico.component.html',
  styleUrls: ['./dialog-generico.component.scss']
})
export class DialogGenericoComponent {

  rotulo: string = 'Descrição:';



  constructor(public dialogRef: MatDialogRef<DialogGenericoComponent>,
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
  onNoClick(): void {
    this.dialogRef.close();
  }
  salvar(): void {
    this.dialogRef.close();
  }

}

