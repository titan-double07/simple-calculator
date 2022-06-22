const c = console.log.bind(document)



const calculate =()=>{
    const operator = prompt('what operation do you want to perform: +, -, *, / ');
const firstNo = Number( prompt('first number'));
const secondNo=Number(prompt('second number'));
let sum=0
operator=== '+'? sum=alert(`your answer is ${firstNo+secondNo}`):
operator=== '-'? sum=alert(`your answer is ${firstNo-secondNo}`):
operator=== '*'? sum=alert(`your answer is ${firstNo*secondNo}`):
operator=== '/'? sum=alert(`your answer is ${firstNo/secondNo}`):
alert('not a specified operator')


}


calculate()


