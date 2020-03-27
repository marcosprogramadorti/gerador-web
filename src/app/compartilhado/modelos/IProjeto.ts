import { IModelo } from './IModelo';
import { IPropriedade } from './IPropriedade';
import { IArquivo } from './IArquivo';

export interface IProjeto {

    idProjeto:number;
    grupoId:string;
    artifactIdartifactId:string;
    versao:string;
    embalagem:string;
    autor:string;
    nome:string;
    descricao:string;
    entidades:IArquivo[];
    propriedades:IPropriedade[];
    modelo: IModelo;

    

}