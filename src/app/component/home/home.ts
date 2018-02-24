export class HomeText {
      constructor(   
        public name:any,  
        public state = 'small',
        public clickState = 'inactive',
        public type:any
    ){}
    
    switchState()  {
        this.state  = this.state === 'small' ? 'large':'small';     
    }

    switchClickState() {
        this.clickState = this.clickState === 'active' ? 'inactive' : 'avtive';
    }
    
}

export var BUTTON_TEXT = [

 new HomeText('Search','inactive','inactive','submit' ),
 new HomeText('About','inactive','inactive','')

]

 