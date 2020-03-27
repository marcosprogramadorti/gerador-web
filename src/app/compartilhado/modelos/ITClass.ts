import { IAtributo } from './IAtributo';
import { IMetodo } from './IMetodo';
import { ITImport } from './ITImport';

export interface ITClass{
    idTClass:number;
    modificadorAcesso:string;
    nome:string;
    tExtends:string;
    tImplements:string;
    inicioCorpo:string;
    atributos:IAtributo[];
    metodos:IMetodo[];
    fimCorpo:string;
    tPackage:string;
    tImports:ITImport[];
    

}