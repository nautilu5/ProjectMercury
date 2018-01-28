import { Component, OnInit, Injectable } from '@angular/core';
import { SearchComponent } from '../search/search.component'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    
    trigger('buttonAnimation', [
      
      state('small', style({
              backgroundColor: '#eee',
              transform: 'scale(1)',
      })),

      state('large', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.2)'
      })),
      
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('100ms ease-out'))
    ]
  )
]

})


  

@Injectable()
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

state: string = 'small';
animateMe() {
  this.state = (this.state === 'small' ? 'large' : 'small')
}

  ngOnInit() {
  }

}
