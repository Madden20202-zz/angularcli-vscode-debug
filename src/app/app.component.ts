import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcli-vscode-debug';

  debuggerValueTripped: boolean = false
  
  constructor() {
    this.checkDebugValue();
  }

  ngOnInit() {
    return this.debuggerValueTripped = true 
  }

  checkDebugValue() {
    if(this.debuggerValueTripped == true) {
      console.log("The Code was Executed");
    }
  }
}
