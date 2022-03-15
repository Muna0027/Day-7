function printFullName(){
let firstName = 'Muna';
let lastName =  'Adan';
let space = ' ';
let fullName = firstName + space + lastName;
console.log(fullName)
}

printFullName()

function printFullName(firstName,lastName){
    let fullName = firstName + lastName
    console.log(fullName)
}
printFullName('Muna', 'Adan')


function sumOfTwoNumbers (numOne, numTwo){
    let sum = numOne + numTwo
    console.log(sum)
}
sumOfTwoNumbers(2, 7)

function areaOfARectangle(length, width){
    let area = length * width 
    console.log(area)
}
areaOfARectangle(7, 5);


function findPerimeter(length, width){
	let perimeter = 2*(length + width)
    console.log(perimeter)
}

findPerimeter(6,12)




function volumeOfRectPrism(length, width, height){
    let volume = length * width * height
    console.log(volume)
}
volumeOfRectPrism(5,6,8)



function areaOfACircle (PI, r, r){
    let area = PI * r * r
    console.log(area)
}

areaOfACircle(3.14, 6, 6)



function circumfreneceOfACircle (PI,r){
let circumference = 2*(PI * r)
console.log(circumference)
}
circumfreneceOfACircle(3.14, 4)

density= mass/volume

function denistyOfASubstance(mass,volume){
    let density = mass/volume
    console.log(density)
}
denistyOfASubstance(49,6)


s = d/t

function timeRunning(distance, time){
    let speed = distance/time
    console.log(speed)
}
timeRunning(20,4)

weight = mass x gravity

function weightOfObject(mass,gravity){
    let weight = mass * gravity
    console.log(weight)
}
weightOfObject(400,9.81)

oF = (oC x 9/5) + 32.

function convertCelsiusToFahrenheit(celsius){
    let fahrenheit = 9/5 * celsius + 32
    console.log(fahrenheit)
}

convertCelsiusToFahrenheit(20)

//bmi = weight in Kg / (height x height) in m2

function bodyMassIndex(kg,height,height) {
    let BMI = kg / height * height
    console.log(BMI)
}
bodyMassIndex(54,1.7,1.7)

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(Autumn,Winter,Spring,Summer){
    let month =
}

ax + by + c = 0

function solveLinEquation(ax,by,c){
    let value = ax * by + c 
console.log(value)
}
solveLinEquation((2*1), (3*3),+ 6)

function displayDateAndTime(){
    let date = new Date();
    let n = date.toDateString();
    let time = date.toLocaleTimeString();
    console.log('date:', n);
    console.log('time:',time)
}
displayDateAndTime()


/*Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.*/

function capitalizeArray(array){
    let array = arrau.toUpperCase();
console.log(array)
}
capitalizeArray();

//bmi = weight in Kg / (height x height) in m2

const bodyMassIndex = (kg, height, height = 5.7) => kg/ height * height **2
console.log(`Body Mass Index in Kg:`, bodyMassIndex(64))



const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 

