// Zad 1
const sayHello = (hello = 'Hello', name = 'World') => console.log(`${hello} ${name}!`);
sayHello();
// zad 2
const multiply = (a,b=1) => a * b;
multiply(5);

let array = [1,2,3];

const multiply = array.reduce(function(a,b){
	return a * b;
});
multiply(array);

// Zad 3.
const average = (...items) => {
	return items.reduce((a, b) => a + b) / items.length
}
const result = (4, 4, 5, 6, 6);
console.log(average(result));

// Zad 4 

const averageA = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const result = averageA(grades);
console.log(result);

//Zad 5
const items = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstname, ,lastname] = items;
console.log(firstname, lastname);