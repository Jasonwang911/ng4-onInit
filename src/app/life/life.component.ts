import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

// log日志
let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  name: string;
  // log方法
  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }

  constructor() { 
    // 1.构造函数调用，构造函数是不能获取输入属性的值的，
    this.logIt('name属性在constructor里的值是：' + this.name);
  }
  
  // 用来初始化组件或指令
  ngOnInit() {
    this.logIt('ngOnInit');
    this.logIt('name属性在constructor里的值是：' + this.name);
  }
  // 父组件修改或初始化一个子组件的输入属性调用。如果没有输入属性，这个钩子不会调用，并且这个属性会被多次调用，每次输入属性的时候都会被调用。并且这个钩子第一次被调用会在OnInit之前调用
  ngOnChanges(changes: SimpleChanges): void {
    // class SimpleChange {
    //   constructor(previousValue: any, currentValue: any, firstChange: boolean)
    //   previousValue: any
    //   currentValue: any
    //   firstChange: boolean
    //   isFirstChange(): boolean
    // }
    let name = changes['name'].currentValue;
  }
  // 在变更检测机制被触发的时候调用
  ngDoCheck(): void {
    this.logIt('ngDoCheck')
  }
  // 组件的内容投影相关
  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }
  // 组件的内容投影相关
  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }
  // 组件模板视图的初始化
  ngAfterViewInit():void {
    this.logIt('ngAfterViewInit');
  }
  // 组件模板视图的变更
  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }
  // 组件的销毁
  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }

}
