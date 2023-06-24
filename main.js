// Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28
function newSum() {
    let count = 0;
    return function(value) {
        return count += value;
    }
}
let sum = newSum();
console.log(sum(3));
console.log(sum(8));
console.log(sum(20));



// Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.
function average(arr) {
    let newArr = [];
    let sum = 0;
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
        counter++;
    }
    
    let result = sum / counter;
    console.log('Cереднє арифметичне лише числових елементів даного масиву:', result);
}

let array = [1025, 5, 525, 5, 25, 125, true, 'Hello World!', [1, 2]];
average(array);



// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.
function doMath(x, znak, y){
    switch (znak) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
        case '%':
            return x % y;
            break;
        case '^':
            return x ** y;
            break;
        default:
            return console.log('Unknown znak: ' + znak);
            break;
    }
}
console.log(doMath(1, '+', 2));



// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву та внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач. Наприклад: [[1, 2, 3], [4, 5, 6]]
function createArray () {
    let mainArrayLength = Number(prompt('Введіть довжину основного масиву: '));
    let array = [];

    for (let i = 0; i < mainArrayLength; i++) {
        let subArrayLength = Number(prompt(`Введіть довжину масиву ${i + 1}`));
        let subArray = [];

        for (let j = 0; j < subArrayLength; j++) {
            let value = prompt(`Введіть ${j + 1} значеня для масиву ${i + 1}`);
            subArray.push(value);
        }

        array.push(subArray);
    }
    console.log(array);
}
createArray();



// Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function deleteSymbol(string, ...args) {
    args = args.join('');
    for (let i = 0; i < string.length; i++) {
        if (args.includes(string[i])) { 
            string = string.slice(0, i) + string.slice(i + 1);
            i--;
        }
    }
    return string;
}
console.log(deleteSymbol("hello world", ['l', 'd']));