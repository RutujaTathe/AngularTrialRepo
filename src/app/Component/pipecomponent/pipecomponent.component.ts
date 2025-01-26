import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipecomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipecomponent.component.html',
  styleUrl: './pipecomponent.component.scss',
})
export class PipecomponentComponent {
  date: Date = new Date();
  // school:String="srdhk";
  details: String = 'angular pipe used to transform the data';

  objectdata = {
    name: 'rutuja',
    empId: 'n0574',
    compoany: 'NTS',
    department: 'DNA',
  };

  name:String="Radhika";
  isPresent:boolean=false;
  a:number[]= [1,2,3,4,5];

}
