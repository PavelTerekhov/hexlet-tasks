https://github.com/Hexlet/ru-local-communities - Список русскоязычных локальных it-сообществ



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


// Task 5

// Обычно вам нужно избегать ошибок, но в этом упражнении вы будете порождать ошибки. Это поможет вам понять, какие типы ошибок возникают в разных ситуациях, и привыкнуть распознавать их в будущем.

// Вы будете работать в двух файлах — reference.js и type.js. Ваша задача — породить две ошибки внутри специально созданных функций.

// reference.js
// Сделайте так, чтобы код внутри функции reference() порождал ошибку типа ReferenceError.

// Вспомните, что ReferenceError возникает, когда используется несуществующий идентификатор (имя). Например, если ваша функция возвращает значение константы, но такой константы не существует. Или в каком-нибудь выражении (фрагмент кода, который вычисляется в значение, как формула) используется неизвестный идентификатор.

// type.js
// Сделайте так, чтобы код внутри функции type() порождал ошибку типа TypeError.

// Вспомните, что TypeError возникает, когда вы используете неправильный тип. Например, если вы пытаетесь вызвать численную константу как функцию.

// ВАЖНО
// Ошибки должны генерироваться внутри функций reference() и type().



// Syntax error. Неверное использование языка. Часто лишние или недостающие скобки или кавычки. Что делать? Заменить, удалить или добавить символы. Часто проблема в скобках или кавычках: открытые скобки должны быть закрыты, открытые кавычки должны быть закрыты.
// Reference error. Использование несуществующего названия. Что делать? Проверить, существует ли то, на что вы ссылаетесь. Возможно вы использовали ошибочное название или забыли его создать.
// Type error. Использование неверного типа, например попытка вызвать константу числа, как функцию. Что делать? Убедиться, что всё используется верно. Часто проблема в простой путанице: вы создали численную константу и функциональную константу, а потом пытаетесь вызвать число. Вероятно вы собирались вызвать функцию.
// Logic error. (Логическая ошибка) Ваш код выполняет не то, что требуется, но программа запускается и не выдаёт ошибок трёх перечисленных выше типов. Сломана логика. Что делать? Проверить свой код, убедиться, что он выполняет то, что должен.



// Task 6 

// sequenceSum.js
// Допишите (с использованием рекурсивного процесса) функцию sequenceSum(), которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

// import sequenceSum from './sequenceSum';
 
// sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
// sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
// sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
// Подсказки
// Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN
// Сумма чисел последовательности, в которой begin === end, равна begin (или end)
// // NaN (т.к. это "пустая" последовательность)
// sequenceSum(7, 2);
 
// // 0 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(0, 0);
// // 6 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(6, 6);
// В файле sequenceSum.test.js можно посмотреть все варианты параметров, с которыми будет вызвана ваша функция.

// @ts-check

const sequenceSum = (begin, end) => {
    // BEGIN (write your solution here)
    if (begin == 0 && end == 0) {
      return 0;
    } else if (begin == end) {
      return begin;
    } else if (begin > end) {
      return NaN;
    }
    return begin + sequenceSum(begin + 1, end);
    // END
  };
  
  export default sequenceSum;


// Task 7 

// smallestDivisor.js
// Реализуйте тело функции smallestDivisor(), используя итеративный процесс. Функция должна находить наименьший делитель заданного числа. Число, передаваемое в функцию, больше нуля.

// Доп. условие: делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

// Например, наименьший делитель числа 15 это 3.

// smallestDivisor(15); // 3
// smallestDivisor(17); // 17
// Идея алгоритма:

// Попробуйте разделить число на 2.
// Если число делится без остатка, то это наименьший делитель.
// Если нет, то попробуйте следующий делитель.
// Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
// Подсказки
// Вспомните про оператор % (modulus or остаток от деления) из урока 5. Он вычисляет остаток от деления одного операнда на другой. Например, 11 % 5 это 1, а 10 % 2 это 0.

// Так что если x % y это 0, то y делит x без остатка.


// @ts-check

const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    const iter = (accum) => {
      if (accum > num / 2) {
        return num;
      }
      if (num % accum === 0) {
        return accum;
      }
      return iter(accum + 1);
    }
    return iter(2);
    }
    
    // END
  
  export default smallestDivisor;



// Task 8

// smallestDivisor.js
// Реализуйте тело функции smallestDivisor(), используя итеративный процесс. Функция должна находить наименьший делитель заданного числа. Число, передаваемое в функцию, больше нуля.

// Доп. условие: делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

// Например, наименьший делитель числа 15 это 3.

// smallestDivisor(15); // 3
// smallestDivisor(17); // 17
// Идея алгоритма:

// Попробуйте разделить число на 2.
// Если число делится без остатка, то это наименьший делитель.
// Если нет, то попробуйте следующий делитель.
// Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
// Подсказки
// Вспомните про оператор % (modulus or остаток от деления) из урока 5. Он вычисляет остаток от деления одного операнда на другой. Например, 11 % 5 это 1, а 10 % 2 это 0.

// Так что если x % y это 0, то y делит x без остатка.

// @ts-check

const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    const iter = (accum) => {
      if (accum > num / 2) {
        return num;
      }
      if (num % accum === 0) {
        return accum;
      }
      return iter(accum + 1);
    }
    return iter(2);
    }
    
    // END
  
  
  export default smallestDivisor;


// Task 9 

// solution.js
// Напишите функцию smallestDivisor(). Она должна находить наименьший целый делитель числа. Поведение у функции такое же, как в предыдущем уроке, но реализация (код функции) должна быть другой. На этот раз реализуйте императивный итеративный процесс, что означает:

// не используйте рекурсию
// используйте переменные
// используйте цикл while
// Например, наименьший делитель числа 15 это 3.

// smallestDivisor(15); // 3
// smallestDivisor(17); // 17
 
// smallestDivisor(0); // NaN
// smallestDivisor(-3); // NaN
// Примечания
// Если переданное в smallestDivisor() число меньше единицы, возвращайте NaN._
// Алгоритм
// Идея алгоритма:

// Попробуйте разделить число на 2.
// Если число делится без остатка, то это наименьший делитель.
// Если нет, то попробуйте следующий делитель.
// Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
// Подсказки
// Вспомните про оператор % (modulus or остаток от деления) из урока 5. Он вычисляет остаток от деления одного операнда на другой. Например, 11 % 5 это 1, а 10 % 2 это 0. Так что если x % y это 0, то y делит x без остатка.
  
const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
      let counter = 2;
      if (num === 1) {
        return num;
      } else if (num < 1) {
        return NaN;
      }
      while (num % counter != 0) {
        counter++;
      }
      return counter;
  
  // END
  }
  
  export default smallestDivisor;

// Task 10

// reverse.js
// Реализуйте функцию reverse(), которая переворачивает строку. Например:

// reverse('hello, world!'); // !dlrow ,olleh
// Подсказки
// Для решения этой задачи можно двигаться с конца строки к её началу
// Длина строки str находится так: str.length
// Не забудьте, что индексы в строке начинаются с 0, но длина — это реальная длина. Так что индекс последнего символа на единицу меньше длинны строки

// @ts-check
/* eslint operator-assignment: off */

// BEGIN (write your solution here)
function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      
      result += str[i];
    }
    return result;
  }
  // END
  
  export default reverse;



// Task 11

// isPrime.js
// Напишите функцию isPrime(). Она принимает число и возвращает true, если число является простым, и false в ином случае.

// Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.

// Используйте цикл for и арифметические шорткаты.

// isPrime(1);     // false
// isPrime(7);     // true
// isPrime(10);    // false
// (Число 1 не считаем простым).

// Подсказки
// Для проверки числа на простоту вам может пригодиться Метод перебора делителей

// @ts-check

// BEGIN (write your solution here)
function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  // END
  
  export default isPrime;


// Task 12

// test.js
// Проверьте с помощью утверждений (asserts) правильность работы функции factorial(), которая вычисляет факториал переданного числа. Факториал числа x — это произведение всех чисел от 1 до x. Например, факториал числа 4 это 1 * 2 * 3 * 4 = 24.

// Подробнее о факториале можно почитать в википедии.

// Саму функцию в этой практике реализовывать не надо, она уже готова. Вам же сейчас надо дописать тесты для проверки её работы.

// Несколько примеров:

// factorial(0); // 1
// factorial(1); // 1
// factorial(5); // 120
// Вам необходимо добавить минимум три дополнительные проверки (помимо уже существующих в модуле), а именно: протестировать пограничные случаи (вызов с параметрами 0 и 1) и сделать проверку на работу с другими неотрицательными целыми числами. Общепринятого факториала от целых отрицательных чисел не существует.

// Подсказки
// assert(<expression>) проверяет, что результат <expression> является истиной.
// assert.equal(<actual>, <expected>) проверяет, что <actual> и <expected> равны (проверка на нестрогое равенство ==).

// function.js
const functions = {
    right1: function factorial(num) {
      if (num === 0) {
        return 1;
      }
      return num * factorial(num - 1);
    },
  
    wrong1: function factorial(num) {
      if (num === 1) {
        return 1;
      }
      return num * factorial(num - 1);
    },
  
    wrong2: function factorial3(num) {
      if (num === 0) {
        return 1;
      } if (num < 4) {
        return num * factorial3(num - 1);
      }
  
      return num;
    },
  
    wrong3: function factorial4(num) {
      if (num === 0) {
        return 1;
      } if (num === 2) {
        return 2;
      } if (num > 1) {
        return num * factorial4(num - 1);
      }
      return 0;
    },
  };
  
  export default functions[process.env.FUNCTION_VERSION];

  
// test.js
import assert from 'assert';
import factorial from './functions.js';

// Example
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(5), 120);


// BEGIN (write your solution here)

// END



// Task 13

// myMathModule.js
// В файле myMathModule.js:

// Создайте функцию getTriangleArea(), которая принимает два аргумента h и b и вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.

// Вычисление площади треугольника

// getTriangleArea(5, 10) === 25;
// getTriangleArea(15, 12) === 90;
// Экспортируйте функцию.

// solution.js
// В файле solution.js:

// Импортируйте функцию getTriangleArea() из модуля myMathModule.
// Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. Используйте функцию square() (принимает число и возвращает его квадрат).
// Экспортируйте созданную функцию по умолчанию.


// myMathModule.js
// @ts-check

export const getTrianglePerimeter = (a, b, c) => a + b + c;
export const getTriangleArea = (h, b) => { return 1 / 2 * h * b; }


// BEGIN (write your solution here)

export default getTriangleArea;
// END

// solution.js
// @ts-check

import square from './square.js';
import { getTriangleArea } from './myMathModule.js'; export default (n) => getTriangleArea(n, square(n) / 2);



// BEGIN (write your solution here)


// END


// square.js
// @ts-check

export default (num) => num * num;

// Посмотрите, как здесь работает экспорт по умолчанию: мы не создаем константу для функции,
// но вместо этого экспортируем безымянную (анонимную) функцию.
// Это проще и требует меньше кода, но вы не можете использовать эту функцию в этом файле,
// потому что у функции нет имени, по которому её можно вызвать.
// Думайте об этом как о товарах "только для экспорта" ;-)


// Task 14 

// squares.js
// Реализуйте функцию square(), которая возвращает квадрат числа.
// Реализуйте функцию sumOfSquares(), которая возвращает сумму квадратов двух чисел.
// Реализуйте функцию squareSumOfSquares(), которая возвращает квадрат суммы квадратов двух чисел.
// Примеры работы функций:

// square(5); // 25
// square(10); // 100
// sumOfSquares(5, 10); // 125
// sumOfSquares(10, -9); // 181
// squareSumOfSquares(1, 1); // 4
// squareSumOfSquares(2, 3); // 169
// Обратите внимание на то, что самостоятельно вызывать их не надо. Это делает проверяющая система в файле __tests__/squares.tests.js

// Подсказки
// Функция square() может быть использована внутри sumOfSquares()
// Функция sumOfSquares() может быть использована внутри squareSumOfSquares()

// @ts-check

// BEGIN (write your solution here)
function square(numOne) {
    return numOne**2;
  }
  
  function sumOfSquares(numOne, numTwo) {
    return numOne**2 + numTwo**2
  }
  
  const squareSumOfSquares = (numOne, numTwo) => {
    return (numOne ** 2 + numTwo ** 2)**2
  }
  // END
  
  export {
    square,
    sumOfSquares,
    squareSumOfSquares,
  };



// Task 15

// Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false.

// Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).

// Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.

// Примеры:

// greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
// greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
// lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
// isEqual('liSp', 'lisP'); // true
// comparers.js
// Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.

// Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

// Если в первой строке больше заглавных символов, то возвращается 1.
// Если во второй строке больше заглавных символов, то возвращается -1.
// Иначе возвращается 0.
// Подсказки
// Функция bigLettersCount должна принимать на вход строку str и высчитывать количество заглавных символов в ней.
// Вычисление длины строки: length(str).
// Перевод строки в верхний регистр: toUpperCase(str).
// Проверка на то, что символ в верхнем регистре: toUpperCase(char) === char;


// @ts-check

import { length, toUpperCase } from './strings.js';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let finalCounter = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (toUpperCase(str[i]) === str[i]) {
      finalCounter++;
    }
  }
  return finalCounter;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (secondCount > firstCount) {
    return -1;
  } else {
    return 0;
  }  
  // END
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);


// Task 16

// addDigits.js
// Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:

// Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

// Для числа 38 процесс будет выглядеть так:

// 3 + 8 = 11
// 1 + 1 = 2
// Результат: 2

// Примеры
// addDigits(10); // 1
// addDigits(19); // 1
// addDigits(38); // 2
// addDigits(1259); // 8
// Подсказки
// Выделите процесс суммирования цифр в числе в отдельную функцию
// Для преобразования типов используйте функции из урока

// addDigits.js
import { length } from './strings.js';

// BEGIN (write your solution here)
function numberSumm(num) {

  num = String(num);

  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += +num[i];
  }
  if (sum >= 10) {
    return numberSumm(sum);
  } else {
    return sum;
  }
}

export default numberSumm;

// END


//strings.js
/* eslint-disable import/prefer-default-export */
export const length = (str) => str.length;



// Task 17 

// solution.js
// Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

// Пример
// solution('hello, world!'); // Hello, World!
// Подсказки
// Вычисление длины строки: length(str).
// Перевод строки/буквы в верхний регистр: toUpperCase(str).

// @ts-check

import { length, toUpperCase } from './strings.js';

// BEGIN (write your solution here)
export default (str) => {
  let result = "";
  for (let i = 0; i < length(str); i++) {
    const shouldBeBig = str[i] !== " " && (i === 0 || str[i - 1] === " ");
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
}
// END




