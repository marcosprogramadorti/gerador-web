import { IFonteDados } from './IFonteDados';
export interface IApagavel<T> {
    excluir( f: IFonteDados<T>, i:number):void;
}