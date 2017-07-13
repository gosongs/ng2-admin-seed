import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html'
})
export class DemoComponent {
  public welcome: string = 'Hello World!';

  alert(){
    alert(this.welcome)
  }
}
