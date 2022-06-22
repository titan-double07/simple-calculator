const c = console.log.bind(document)
const firstNo = document.querySelector('.first-no');
const secondNo = document.querySelector('.second-no');
const btn = document.querySelectorAll('.btn');
const output = document.querySelector('output');

const add = () => {
  sum=Number(firstNo.value)+Number(secondNo.value)
return output.innerHTML=sum
}
const subtract = () => {
  sum=Number(firstNo.value)-Number(secondNo.value)
return output.innerHTML=sum
}
const multiply = () => {
  sum=Number(firstNo.value)*Number(secondNo.value)
return output.innerHTML=sum
}
const divide = () => {
  sum=Number(firstNo.value)/Number(secondNo.value)
  sum=sum.toFixed(2)
return output.innerHTML=sum
}






