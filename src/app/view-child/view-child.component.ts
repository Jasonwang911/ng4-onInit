import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit, AfterViewChecked  {

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log(`子组件的方法被调用了===>${name}`);
  }

  ngAfterViewInit(): void{
    console.log(`子组件的视图初始化完毕`);
  }

  ngAfterViewChecked(): void {
    console.log(`子组件的视图变更检测完毕`);
  }

}
