import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AdditionPipe } from '../../addition.pipe';

@Component({
  selector: 'app-pipecomponent',
  standalone: true,
  imports: [CommonModule,AdditionPipe],
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

  num1: number = 30;
  num2: number = 40;
  name:String="Radhika";
  isPresent:boolean=false;
  a:number[]= [1,2,3,4,5];

}
