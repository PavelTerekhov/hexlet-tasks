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



// Task 3 

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



// Task 4

// finalGrade.js
// Реализуйте функцию finalGrade(), которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.

// Функция принимает два аргумента:

// exam — оценка за экзамен, число от 0 до 100;
// projects — количество проектов, число от 0 и выше.
// Функция возвращает: число (итоговую оценку).

// Есть четыре возможных итоговых оценки:

// 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// 0 в любом другом случае
// Вот как должна работать ваша функция:

// пример вызова         // что должна вернуть функция при таком вызове
// finalGrade(100, 12);  // 100
// finalGrade(99, 0);    // 100
// finalGrade(10, 15);   // 100
 
// finalGrade(85, 5);    // 90
 
// finalGrade(55, 3);    // 75
 
// finalGrade(55, 0);    // 0
// finalGrade(20, 2);    // 0


// @ts-check

// BEGIN (write your solution here)
function finalGrade(exam, projects) {
    let result = 0;
    if (exam > 90 && exam <= 100 || projects > 10) {
      result = 100;
    } else if (exam > 75 && projects >= 5) {
      result = 90;
    } else if (exam > 50 && projects >= 2) {
      result = 75;
    } else {
      result = 0;
    }
    return result;
  }
  // END
  
  export default finalGrade;


  