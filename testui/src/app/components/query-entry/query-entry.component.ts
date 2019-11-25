import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-entry',
  templateUrl: './query-entry.component.html',
  styleUrls: ['./query-entry.component.scss']
})
export class QueryEntryComponent implements OnInit {

  form: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      paymentReferenceNumber: [null, Validators.required],
    })
  }

  query() {
    this.router.navigateByUrl("query/" + this.form.value.paymentReferenceNumber);
  }

}
