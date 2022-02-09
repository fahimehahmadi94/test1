// class Test {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   render() {
//     console.log(this.width, this.height);
//   }
// }

// var obj = new Test(10, 20);
// console.log(obj);

// class ColorTest extends Test {
//   constructor(width, height, color) {
//     super(width, height);
//     this.color = color;
//   }

// //   show() {
// //     return "<div style='width:"+this.width+"px; height:"+this.height+"px; background:"+this.color+";'></div>";
// //   }
//   show() {
//     return `<div style='width:${this.width}px; height:${this.height}px; background:${this.color};'></div>`;
//   }
// }

// var obj= new ColorTest(80, 50, "red");
// document.getElementById("myDiv").innerHTML =obj.show();

//section 2
import mydefault,{ testString, testClass, testFun } from "./module.js";
console.log(testString);
//string
let obj = new testClass("fahimeh");
obj.handelLog();
// console.log(obj);
//Class

console.log(testFun(5));
//function

console.log(mydefault);
//default