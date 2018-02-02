//  const Addition = require('./Operators/Addition');
//  const Subtraction = require('./Operators/Subtraction');
//  const Multiplication = require('./Operators/Multiplication');
//  const Division = require('./Operators/Division');
//  console.log(new Division().run(3,0));
//
// const operator = require('./Operators/Index');
// function Calculator() {
//     this.operators = {
//         '+': new operator.Addition(),
//         '-': new operator.Subtraction(),
//         '*': new operator.Multiplication(),
//         '/': new operator.Division()
//     };
//     this.calculate = (operator, number1, number2) => {
//         if (!this.operators[operator])
//             throw new Error('Operator' + operator + 'is not support');
//         return this.operators[operator].run(number1, number2);
//     }
// }
// module.exports= Calculator;
// const  operator = require('./Operators/Index');
// function Calculator() {
//     this.operators = {
//          '+' : new operator.Addition(),
//          '-' : new operator.Subtraction(),
//          '/' : new operator.Division(),
//          '*' : new  operator.Multiplication()
//     };
//     this.CheckOperator = (operator,number1,number2) =>{
//         if (!this.operators[operator])
//             throw 'Operator ' + operator + ' is not support!';
//         return this.operators[operator].run(number1,number2);
//     }
// }
// module.exports=Calculator;
 const operator = require('./Operators/Index');
 function Calculator() {
     this.operators = {
         '+' : new operator.Addition(),
         '-' : new operator.Subtraction(),
         '/' : new operator.Division(),
         '*' : new operator.Multiplication()
     };
     this.Check = function (operator,number1,number2) {
      if(!this.operators[operator])
       throw 'error';
      this.operators[operator].run(number1,number2);
     }
 }
 module.exports = Calculator;