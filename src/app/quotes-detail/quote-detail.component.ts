import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() newQuote: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.newQuote.upvote+=1;
  }
  downvote(){
    this.newQuote.downvote+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}