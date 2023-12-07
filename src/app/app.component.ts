import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import {
  MatAutocomplete,
  // MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  // MatAutocompleteTrigger,
} from '@angular/material/autocomplete';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild(MatAutocomplete) autocomplete: MatAutocomplete | any;
  options: string[] = ['One', 'Two', 'Three'];
  dummy: boolean = false;
  // formControl = new FormControl('');
  metaData: FormGroup = new FormGroup({
    location: new FormControl(''),
  });
  ngOnInit(): void {
    console.log(this.metaData.value);
  }
  ngAfterViewInit(): void {
    this.metaData.controls['location'].valueChanges.subscribe((res) => {
      console.log('Location value:', res);
    });
  }
  onClick() {
  console.log('clicked');
    this.dummy = !this.dummy;
    this.metaData.controls['location'].patchValue(null);
    console.log(this.autocomplete.options);
  }

  formatLabel(value: any) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  check(event: any) {
    console.log(event);
  }
}
