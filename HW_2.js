// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for (let i = 1; i <= 10; i++) {
  let result = 2 ** i;
  console.log(result);
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function incrementDegree(degree) {
  for (let i = 1; i <= degree; i++) {
    let result = 2 ** i;
    console.log(result);
  }
}
incrementDegree(2);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let smile = ":)";
for (i = 1; i <= 5; i++) {
  console.log(smile);
  smile = smile + ":)";
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик),
// а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

function printString(str, numberOfRows) {
  let createStr = str;
  for (let i = 1; i <= numberOfRows; i++) {
    console.log(createStr);
    createStr = createStr + str;
  }
}
printString("hello", 5);
