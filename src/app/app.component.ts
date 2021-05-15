import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
export class AppComponent {
  quotes:string[];

   constructor(){
     this.quotes = ['Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma – which is living with the results of other peoples thinking', 'If life were predictable it would cease to be life, and be without flavor', 'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough', 'Life is what happens when you are busy making other plans', 'The way to get started is to quit talking and begin doing']
   }
  }*/

export class AppComponent {
  quotes: Quotes[] = [
  {id:1,name:'Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma – which is living with the results of other peoples thinking'},
  {id:2,name:'If life were predictable it would cease to be life, and be without flavor'},
  {id:3,name:'Life is what happens when you are busy making other plans'},
  {id:4,name:'The way to get started is to quit talking and begin doing'}
  ];
}
 
