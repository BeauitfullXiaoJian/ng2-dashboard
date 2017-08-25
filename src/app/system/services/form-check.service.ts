import { Injectable } from '@angular/core';

@Injectable()
export class FormCheckService {

  constructor() { }

  getPrice(number: string) {
    let price: any = parseFloat(number).toFixed(2);
    return price == 'NaN' ? '0.00' : price;
  }

  getNumber(number: string) {
    let count: any = parseInt(number);
    return isNaN(count) ? '0' : count;
  }

  //排序时获取排序后的元素的id串.形式如："1,2,3,4,5"
  getIds(array: Array<any>): string {
    let ids: Array<number> = new Array<number>();
    array.forEach(e => ids.push(e.id));
    return ids.join();
  }

  //ids串转数组.形式如："1,2,3,4,5" 转 [1,2,3,4]
  idsToArray(ids: string): Array<number> {
    let array = new Array<number>()
    if (ids) {
      ids.split(',').forEach(e => {
        array.push(parseInt(e))
      })
    }
    return array;
  }

  //ids串中添加子项（不重复添加）.形式如："1,2,3,4,5" 添加6 => "1,2,3,4,5,6"
  idsPush(ids: string, id): string {
    let array = this.idsToArray(ids)
    if (array.indexOf(id) < 0) {
      array.push(id)
    }
    return array.join()
  }

  //ids串中移除子项（会移除重复项）.形式如："1,2,3,4,5" 移除5 => "1,2,3,4"
  idsRemove(ids: string, id): string {
    let array = this.idsToArray(ids)
    let result = new Array<number>()
    array.forEach(e => {
      if (e != id) result.push(e)
    })
    return result.join()
  }
}
