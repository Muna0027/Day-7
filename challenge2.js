//function declaration
function greet(){
    console.log('hello there');
}
greet()
/* function expression
const speak = function(name, time){
    console.log(`good ${time} ${name}`)
};
speak('Muna', 'morning')*/



const calcArea = (radius) => {
    return 3.14 * radius **2;
};

const area = calcArea(5);
console.log(area)

/*
const calcArea = function(radius){
    let area = 3.24 * radius ** 2;
    return area;
} */
const area = calcArea(5);
console.log(area)

const greeting = () => 'hello, world';
const results = greeting();
console.log(results);

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray (arr){
    let array = '';
   return array
};
console.log(capitalizeArray)

function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));