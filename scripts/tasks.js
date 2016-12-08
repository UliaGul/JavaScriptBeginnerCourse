// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):

var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob'] 

var scope = "global"; 
function scopeTest() { 
console.log(scope); // "undefined" 
var scope = "local"; 
console.log(scope); // "local" 
} 
console.log(getFieldValues(usersData, 'user')); // —> ['Alex', 'Bob'] 
function getFieldValues(usersData, value){ 
var output = []; 
for(let i = 0; i < usersData.length; i++){ 
output[i] = usersData[i][value]; 
} 
for (let i = 0; i < (output.length - 1); i++){ 
for (let j = 0; j < (output.length - 1 ); j++){ 
if(output[j] > output[j + 1]){ 
let c = output[j]; 
output[j] = output[j + 1]; 
output[j + 1] = c; 
} 
} 
} 
return output; 
} 



// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
/* function isEven(x) {/* Проверка на чётность */}
console.log(filter(numbers, isEven)); // --> [2, 8, 34] */

console.log(isEven(numbers)); 
function isEven(x) { 
var a = [], k = 0; 

for(let i = 0; i < x.length; i++){ 
if (x[i]%2 == 0){ 
a[k] = x[i]; 
k++; 
} 
} 
return a; 
}

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];

// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

var IpAddress = '10.223.98.2';
var subnetMask = 28;
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];

console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];