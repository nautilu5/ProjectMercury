export class HomeText {
      constructor(   
        public name:string,  
        public state = 'small',
        public clickState = 'inactive'
    ){}
    
    switchState()  {
        this.state  = this.state === 'small' ? 'large':'small';     
    }

    switchClickState() {
        this.clickState = this.clickState === 'active' ? 'inactive' : 'avtive';
    }
    
}

export var BUTTON_TEXT = [
    'Search',
    'About'
].map(text => new HomeText(text)) 