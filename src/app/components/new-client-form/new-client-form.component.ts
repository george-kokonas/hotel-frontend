import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrls: ['./new-client-form.component.css'],
})
export class NewClientFormComponent implements OnInit {
  public form: FormGroup;

  constructor(public dataService: DataService, private router: Router) {
    this.form = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);

  }
}
