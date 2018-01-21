import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  homeForm:FormGroup;
    searchForm: FormGroup;
    
  constructor(private fb: FormBuilder) {
    this.createForm();
   }
  
  createForm() {
    this.homeForm = this.fb.group ({
      searchForm: ''
    })
  } 
  
  toggleResults() { //toggles result page after a search is executed

}

  ngOnInit() {
  }

}
