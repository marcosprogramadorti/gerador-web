import { IApagavel } from "./IApagavel";
import { IFonteDados } from './IFonteDados';

export class ApagaPadrao<T> implements IApagavel<T> {
    
    excluir( f: IFonteDados<T>, i:number):void{
        f.lista.data.splice(i,1);
        f.lista._updateChangeSubscription();  
    }
    
}