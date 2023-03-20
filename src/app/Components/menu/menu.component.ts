import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
enabled!:true;
@Input() opcion!: string;
textoPadre!: string;
constructor(){
  this.textoPadre = 'Admin';
}
ngOnInit(){
  function forEachAll(data: string | any[], each: { (value: any, allresult: any, next: any): void; (arg0: any, arg1: any[], arg2: { (): void; (): void; }): void; }, finish: { (allresult: any): void; (arg0: any[]): void; }, sync: boolean) {
    var n = -1, result: never[] = [];
    var next = sync ?
        function () {
            if (++n < data.length) { each(data[n], result, next); }
            else if (finish)       { finish(result); }
        } :
        (function () {
            function completed() {
                if (++n <= data.length && finish) { finish(result); }
            }
            for (var i = 0; i < data.length; i++) { each(data[i], result, completed); }
            return completed;
        }());
    next();
}
 
function asyncSqrt(value: number, callback: { (value: any, result: any): void; (arg0: any, arg1: number): void; }) {
    console.log('START execution with value =', value);
    setTimeout(function() {
        callback(value, value * value);
    }, 0 | Math.random() * 100);
}
 
forEachAll([0,1,2,3,4,5,6,7,8,9],
    function(value, allresult, next) {
        asyncSqrt(value, function(value, result) {
            console.log('END execution with value =', value, 'and result =', result);
            allresult.push({value: value, result: result});
            next();
        });
 
    },
    function(allresult) {
        console.log('COMPLETED');
        console.log(allresult);
    },
    true
);
}

}
