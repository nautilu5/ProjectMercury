import { Component, OnInit, Injectable } from '@angular/core';
import { SearchComponent } from '../search/search.component'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'
import { HomeText, BUTTON_TEXT } from './home';
import { SearchService } from '../../services/search.service';

@Component({
  
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SearchService],
  animations: [
    
    trigger('hoverAnimation', [
      
      state('small', style({
              backgroundColor: '#3783ec',
              color: '#37ccec',
              transform: 'scale(1)',
      })),

      state('large', style({
              backgroundColor: '#37ccec',
              color: '#3783ec',
              transform: 'scale(1.01)'
      })),
      
      
      transition('small <=> large', animate('100ms ease-in'))
    ]),

    trigger('clickAnimation', [
     
      state('inactive', style({
                 
      })),
      
      state('active', style({
        backgroundColor: '#3760ec',
        transform: "scale(.8)"
      })),

      transition('inactive <=> active', animate('20ms ease-in'))
    ])
]

})


  

@Injectable()
export class HomeComponent implements OnInit {
 
  homeForm:FormGroup;
    searchForm: FormGroup;
    
 
 
  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
  ) {

    this.createForm();

    console.log(this.texts)

   }
  
  createForm() {

    this.homeForm = this.fb.group ({

      searchForm: ''
    })
  }
  
  onSearchSubmit() { //creates an api call for seearch data
    
    const search = {
      search: this.homeForm.get('searchForm').value
    }

    this.searchService.searchRequest(search).subscribe(result => {
      console.log(result)
    })
  }
   


  texts = BUTTON_TEXT




  ngOnInit() {
  }
}

