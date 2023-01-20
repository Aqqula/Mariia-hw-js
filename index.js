//написати фукцію стрілку, яка приймає джерельний масив
//і повертає масив з двох значень,
//які є мінімальним і максимальним значенням джерельного масиву
//якщо джерельний масив порожній, то функція повертає порожній масив

const arr = [1, 2, 3, 4];

const getNewArray = (arr) => {
  const newArray = [];
  newArray.push(Math.min(...arr), Math.max(...arr));
  return newArray;
};

console.log(getNewArray(arr));

//написати функцію стрілку, яка приймає безліч аргументів
//і повертає результат їх множення, якщо аргументів не має - повертає null

const getMultipleArgs = (...args) =>
  args.length === 0 ? null : args.reduce((acc, num) => acc * num);

console.log(getMultipleArgs());

//переписати функцію, що нижче на функцію стрілку
// function askUser(question) {
//   if (userInput === confirm(question)) {
//     return "OK";
//   }
//   return "error";
// }

const askUserArrow = (question) => confirm(question)? console.log('OK'):console.log('error');
askUserArrow('hi');