import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, symbol?: string, counter?: number): any {
    for (let i = 0; i < counter; i++) {
      value += symbol;
    }
    return value;
  }


}
