import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'addmr'
})
export class AddMrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value !== null ? 'Mr ' + value : value
  }

}
