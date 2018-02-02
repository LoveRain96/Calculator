// class Division {
//     run (number1,number2) {
//         if (number2 === 0)
//         throw new Error ("Division By Zero!");
//
//         return number1 / number2;
//     }
//
// }
// module.exports=Division;
class Division {
    run (number1,number2) {
        if (number2===0)
            throw 'Div By Zero';
        return number1 / number2 ;
    }
}
module.exports = Division;