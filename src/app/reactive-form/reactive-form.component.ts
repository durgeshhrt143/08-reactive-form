import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: ['username', [Validators.required, Validators.minLength(3), Validators.pattern('durgesh')]],
      password: ['password', Validators.required]
    })
  }
  // form = new FormGroup({
  //   username: new FormControl('durgesh', [Validators.required, Validators.minLength(3), Validators.pattern('durgesh'), UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
  //   password: new FormControl('1234', Validators.required)
  // })
  onSubmit() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  form1 = new FormGroup({
    accounts: new FormGroup({
      username1: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('durgesh'), UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
      password1: new FormControl('', Validators.required)
    })

  })
  onSubmit1() {
    this.form1.setErrors({
      invalidLogin: true
    });
  }
  get username1() {
    return this.form1.get('accounts.username1');
  }
  get password1() {
    return this.form1.get('accounts.password1');
  }

  // formArray = new FormGroup({
  //   topics: new FormArray([])
  // });
  // addTopic(topic: HTMLInputElement) {
  //   this.addTopic.push(new FormControl(topic.value));
  //   topic.value = "";
  // }
  // removeTopic(topic: FormControl) {
  //   let index = this.topics.controls.indexof(topic);
  //   this.topics.removeAt(index);
  // }
  // get topics() {
  //   return this.formArray.get('topics');
  // }
}
