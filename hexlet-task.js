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


