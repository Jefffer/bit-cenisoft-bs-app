import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],

})
export class BookComponent implements OnInit {
  bookForm: FormGroup;
  amount = 1;
  unitValue = 60000;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.amount);
    this.bookForm = this.formBuilder.group({
      amount: ['', ]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.amount);
    // console.log(changes['amount'].currentValue);
  }

  alertContinue(total: Number){
    console.log(total);
    Swal.fire({  
      icon: 'info',  
      title: 'Continuar compra...',  
      text: 'Agregaste $' + total + ' al carrito de compras.'
    })  
  }
}
