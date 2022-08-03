// Task 2 
// 1. Создайте константу weight, запишите в неё вашу массу в килограммах.
// 2. Создайте константу с, запишите в неё значение скорости света в вакууме в метрх в секунду: 300000000.
// 3. Вычислите значение энергии вашего тела с помощью знаменитой формулы E = mc2, где m - это ваша масса (weight), а с - это скорость света. Запишите значение в константу CustomElementRegistry.

// @ts-check
/* eslint-disable no-console */

const pi = 3.14; // eslint-disable-line
const weight = 82;
const c = 3 * Math.pow(10, 8);
let energy = 0;
// BEGIN (write your solution here)
  energy = weight * Math.pow(c, 2);
// END

export default energy;
console.info(`Your body energy is ${energy} joules. This is 1 / ${Math.round(576000000000000000000 / energy)} of the yearly world energy consumption. Woah!`);



// Task 2 

// Реализуйте функцию squareOfSum(), которая принимает на вход два числа и возвращает квадрат суммы этих чисел. Для вычисления значения используйте формулу из курса алгебры: a² + 2 * a * b + b².
// Примеры использования:
// squareOfSum(2, 3) // 25
// squareOfSum(1, 10) // 121


// @ts-check

// BEGIN (write your solution here)
function squareOfSum(numberOne, numberTwo) {
    return Math.pow(numberOne, 2) + 2 * numberOne * numberTwo + Math.pow(numberTwo, 2) 
  }
  // END
  squareOfSum(2, 3);
  squareOfSum(1, 10);
  export default squareOfSum;


  
  