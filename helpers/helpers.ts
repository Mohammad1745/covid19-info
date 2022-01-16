import multiplier from "./core-constants"

function numbersMultipliers(input:number|null=null) : string|{symbol:string, value:number}[]
{
  let output:{symbol:string, value:number}[] = [
    {symbol: 'K', value: multiplier.THOUSAND},
    {symbol: 'M', value: multiplier.MILLION},
    {symbol: 'B', value: multiplier.BILLION},
    {symbol: 'T', value: multiplier.TRILLION},
    {symbol: 'Q', value: multiplier.QUADRILLION},
  ]

  if (input===null) {
    return output
  } else {
    return output.filter(element => element.value===input)[0].symbol
  }
}
function convertToMultiplier(input:number=0, precision:number=2) : string
{
  let output:string = input.toString()
  if(input>0){
    output = input>=multiplier.QUADRILLION ? (input/multiplier.QUADRILLION).toFixed(precision)+''+numbersMultipliers(multiplier.QUADRILLION) :
      (input>=multiplier.TRILLION ? (input/multiplier.TRILLION).toFixed(precision)+''+numbersMultipliers(multiplier.TRILLION) :
        (input>=multiplier.BILLION ? (input/multiplier.BILLION).toFixed(precision)+''+numbersMultipliers(multiplier.BILLION) :
          (input>=multiplier.MILLION ? (input/multiplier.MILLION).toFixed(precision)+''+numbersMultipliers(multiplier.MILLION) :
            (input>=multiplier.THOUSAND ? (input/multiplier.THOUSAND).toFixed(precision)+''+numbersMultipliers(multiplier.THOUSAND) : input.toFixed(precision)))));
  }
  return output;
}
// function convertToAccountingFormat(input:number=0) : string
// {
//   let output:string = input.toString()
//   if(input>0){
//     let array:string[] = []
//     while(input>0){
//       array.push((input%1000).toString())
//       console.log(input)
//       input /= 1000
//       console.log(input)
//       input = parseInt(input.toFixed(0))
//       console.log(input)
//       // input = parseInt((input/1000).toFixed(0))
//     }
//     console.log(array)
//     output = array.join(",")
//   }
//   return output;
// }

export default {convertToMultiplier}
