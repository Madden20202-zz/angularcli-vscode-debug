import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcli-vscode-debug';

  // Basic boolean to be changed
  debuggerValueTripped: boolean = false
  
  constructor() {
    // Value changed on construct
    this.checkDebugValue();
  }

  ngOnInit() {
    // Once widget initialized, default value is changed
    return this.debuggerValueTripped = true 
  }

  // basic method to check if value actually changed
  checkDebugValue() {
    if(this.debuggerValueTripped == true) {
      console.log("The Code was Executed");
    }
  }
}
