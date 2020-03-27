import { ITipoArquivo } from './ITipoArquivo';
import { ITClass } from './ITClass';

export interface IArquivo{
    idArquivo:number;
	nome:string;
	diretorio:string;
	descricao:string;
	tipoArquivo:ITipoArquivo;
	tClass:ITClass;
    
}