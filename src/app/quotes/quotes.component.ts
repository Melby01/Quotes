import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes: Quotes[] = [
    {id:1,name:'Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma – which is living with the results of other peoples thinking'},
    {id:2,name:'If life were predictable it would cease to be life, and be without flavor'},
    {id:3,name:'Life is what happens when you are busy making other plans'},
    {id:4,name:'The way to get started is to quit talking and begin doing'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
