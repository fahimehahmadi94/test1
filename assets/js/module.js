import { testNumber } from "./module1.js";

export let testString = "I am String";
export const testFun = (x) => {
 // return `I am function x:${x}`;
 return 'I am function x:'+testNumber;
};
export class testClass {
  constructor(x) {
    this.x = x;
  }
  handelLog() {
    console.log(`this is ${this.x} in test class`);
  }
}
export default "this is default";