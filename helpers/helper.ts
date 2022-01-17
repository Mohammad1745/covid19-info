import { THOUSAND, MILLION, BILLION, TRILLION, QUADRILLION } from "./core-constants"

function numbersMultipliers(input:number|null=null) : string|{symbol:string, value:number}[]
{
  let output:{symbol:string, value:number}[] = [
    {symbol: 'K', value: THOUSAND},
    {symbol: 'M', value: MILLION},
    {symbol: 'B', value: BILLION},
    {symbol: 'T', value: TRILLION},
    {symbol: 'Q', value: QUADRILLION},
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
    output = input>=QUADRILLION ? (input/QUADRILLION).toFixed(precision)+''+numbersMultipliers(QUADRILLION) :
      (input>=TRILLION ? (input/TRILLION).toFixed(precision)+''+numbersMultipliers(TRILLION) :
        (input>=BILLION ? (input/BILLION).toFixed(precision)+''+numbersMultipliers(BILLION) :
          (input>=MILLION ? (input/MILLION).toFixed(precision)+''+numbersMultipliers(MILLION) :
            (input>=THOUSAND ? (input/THOUSAND).toFixed(precision)+''+numbersMultipliers(THOUSAND) : input.toFixed(precision)))));
  }
  return output;
}
function convertToAccountingFormat(input:number=0) : string
{
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default {convertToMultiplier, convertToAccountingFormat}
