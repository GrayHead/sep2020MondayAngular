import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'okten is cool';
  asyncValue = new Promise(resolve => {
    setTimeout(() => {
      resolve('this is async value');
    }, 1000);
  });
  date = new Date();

  price = 100;

  user = {name: 'ahgdfahsgd', age: 123, status: true};
  
  e = 2.718281828459045;

}
