import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-erro',
  templateUrl: './dialog-erro.component.html',
  styleUrls: ['./dialog-erro.component.scss']
})
export class DialogErroComponent  {
  rotulo = 'teste';

  constructor(public dialogRef: MatDialogRef<DialogErroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IErro) { }

    onOk(): void {
      this.dialogRef.close();
    }

}
interface IErro {
  descricao:string
}