/* ЗАДАНИЕ 1 */

alert('ЗАДАНИЕ 1');

let input = +prompt('Введите целое число циклов для бананов');

if(isNaN(input) || input < 1) {
    console.log('Нет бананов');
} else
    console.log(1 + ' banana'); 
    for(let i = 2; i <= input; i++) {   
        console.log(i + ' bananas');    
        }
alert('Проверьте в консоли');


/* ЗАДАНИЕ 2 */

alert('ЗАДАНИЕ 2');

let input2 = +prompt('Сообщите циклу, сколько раз ему сработать: введите количество последовательных чисел, начиная с единицы, среди которых нужно посчитать сумму четных чисел)');

let sum = 0;

for(let i = 0; i < input2; i++) {
    if(i % 2 == 0) {
        sum = sum + i
    }
}
console.log('Сумма четных чисел в Вашей последовательности ' + sum)

alert('Проверьте в консоли');


/* ЗАДАНИЕ 3 */

alert('ЗАДАНИЕ 3');

let number = +prompt('Считаем степень. Введите целое число');

let degree = +prompt('Введите степень для возведения числа');

let multi = 1

if( isNaN(number) || number <= 0 || isNaN(degree) || degree < 1) {
    console.log('Такое не считаем, введите натуральные числа')
}

for(let i = 1; i <= degree; i++) {
    multi = multi * number    
}
if( !isNaN(number) && number > 0 && !isNaN(degree) && degree > 1) {
    console.log('Ваше число ' + number + ' в степени ' + degree + ' равно ' + multi)
}

alert('Проверьте в консоли');