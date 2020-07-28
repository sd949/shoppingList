import { Ingredint } from '../shared/ingredint.model';

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredints: Ingredint[];

constructor( name:string,desc:string,imagePath:string, ingredints : Ingredint[]){
this.name=name;
this.description=desc;
this.imagePath=imagePath;
this.ingredints=ingredints;

}
}