import { IArquivo } from './IArquivo';

export interface IModelo{
    idModelo:number;
    nome:string;
    arquivos:IArquivo[];
    


}