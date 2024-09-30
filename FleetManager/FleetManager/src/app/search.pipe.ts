import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(adatok: any[], keresendo:string): any {
    if (!adatok) return null;
    if (keresendo=="" || !keresendo) return adatok;
    return adatok.filter((elem)=>elem.name.toLowerCase().includes(keresendo.toLowerCase()))
  }

}
