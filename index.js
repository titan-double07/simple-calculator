const calculate =()=>{
    const operator = prompt('what operation do you want to perform: +, -, *, / ');
const firstNo = Number( prompt('first number'));
const secondNo=Number(prompt('second number'));
let calculation=0
operator=== '+'?calculation=alert(`your answer is ${firstNo+secondNo}`):
operator=== '-'? calculation=alert(`your answer is ${firstNo-secondNo}`):
operator=== '*'? calculation=alert(`your answer is ${firstNo*secondNo}`):
operator=== '/'? calculation=alert(`your answer is ${firstNo/secondNo}`):
alert('not a specified operator')


}


calculate()


