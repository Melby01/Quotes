import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Melby','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2021,4,15),0,0),
    new Quote (2,'Cate','Get busy living or get busy dying.','Chris Harvey', new Date(2021,4,28),0,0),
    new Quote (3,'Audrey','You only live once, but if you do it right, once is enough.','Labrinth James', new Date(2021,3,10),0,0),
    new Quote (4,'Sabby','The purpose of our lives is to be happy.','Marie Lorey', new Date(2019,4,23),0,0),
    new Quote (5,'Alice','Never let the fear of striking out keep you from playing the game.','Jordan Smith', new Date(2021,4,19),0,0),
    
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }

  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}