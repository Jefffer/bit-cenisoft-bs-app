import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {    
    console.log('test')
    this.bookForm = this.formBuilder.group({
      amount: ['', ]
    });
  }

  updateTotal() {
  }

  unitValue = 80000;
  total = this.unitValue;

}
