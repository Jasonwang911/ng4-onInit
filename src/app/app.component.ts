import { ViewChildComponent } from './view-child/view-child.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('viewChild1')
  viewChild1: ViewChildComponent;

  title = 'app';

  greeting: string = '你好';

  user: {name: string} = {name: 'Jason'};

  ngOnInit(): void {
    this.viewChild1 .greeting('子组件1ViewChild1')
  }

  ngAfterViewInit(): void {
    console.log(`父组件的视图初始化完毕`);
  }

  ngAfterViewChecked(): void {
    console.log(`父组件的视图变更检测完毕`);
  }
}
