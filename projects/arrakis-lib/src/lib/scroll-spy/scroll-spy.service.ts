import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ARScrollSpyService {

  constructor() { }

  createNavSpy(element: Element, depth: number = 1) {
    const scrollSpy = new Subject<Element>();
    window.addEventListener('scroll', () => {
      let itemList = this.getItem(element, depth);
      if (window.innerHeight + window.pageYOffset >= document.body.clientHeight) {
        scrollSpy.next(itemList[itemList.length - 1]);
      } else {
        let i = 0;
        while (i < itemList.length && window.pageYOffset >= itemList[i].offsetTop) {
          i++;
        }
        if (i === itemList.length && i !== 0 && window.pageYOffset > itemList[i - 1].offsetTop + itemList[i - 1].offsetHeight) {
          scrollSpy.next(undefined)
        } else {
          scrollSpy.next(itemList[i - 1]);
        }
      }
    });
    return scrollSpy.asObservable();
  }

  getItem(element: Element, depth: number) {
    let elements: Array<any> = [];
    for (let i = 0; i < element.children.length; i++) {
      elements.push(element.children[i]);
      if (depth > 1) {
        const children = this.getItem(element.children[i], depth - 1);
        elements = [...elements, ...children];
      }
    }
    return elements
  }

  unsubscribe(observable) {
    observable.unsubscribe();
    window.onscroll = null;
  }

}
