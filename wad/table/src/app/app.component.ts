import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  maketable(formatstring: string) {
    if(this.validate_string(formatstring)) {
      this.tables[0] = parseInt(formatstring[0]);
      this.tables[1] = parseInt(formatstring[2]);
      this.tables[2] = parseInt(formatstring[4]);
      this.input_start = this.tables[2];
      for(let i=0; i<this.tables[0]; i++) {
        let l = [];
        for(let j=0; j<this.tables[1]; j++) {
          l.push(0);
        }
        this.matrix.push(l);
      }
      for(let i=0; i<this.tables[0]; i++) {
        for(let j=0; j<this.tables[1]; j++) {
          this.matrix[i][j] = (this.input_start+j)*(i+1);
        }
      }
      this.input_bool = true;
    }
  }

  validate_string(input: string):boolean {
    if(input.length != 5 || input[1] != 'x' || input[3] != "x" || !Number.isInteger(parseFloat(input[0])) || !Number.isInteger(parseFloat(input[2])) || !Number.isInteger(parseFloat(input[4]))) {
      window.alert("Invalid format");
      return false;
    }
    return true;
  }
  title = 'table';
  tables: any = [0,0,0];
  matrix: any=[];
  input_bool: boolean = false;
  input_start: number = 0;

}
