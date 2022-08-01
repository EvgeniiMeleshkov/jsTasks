
function sum(a) {
    return function sumInner(b) {
        return a + b
    }
}


console.log(sum(3)(6))
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// Task 02
function makeCounter() {
    let count = 1
    return function () {
        console.log(count++)
    }
}

// Реализовать функцию makeCounter которая работает следующим образом:
const counter = makeCounter();
counter(); // 1
counter(); // 2
const counter2 = makeCounter();
counter2(); // 1
counter(); // 3

// Task 03
function makeCounter2(value) {
    let count = value
    return {
        increase() {
            return ++count
        },
        decrease() {
            return --count
        },
        reset() {
            return count = 0
        },
        set() {
            return count = value
        }
    }
}

const l = makeCounter2(1)
console.log(l.increase())
console.log(l.decrease())
console.log(l.reset())
console.log(l.set())
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
function superSum(n) {
    if (n === 0) return 0;
    if (n === 1) return (num) => num;
    let _arguments = [];
    function helper(...args) {
        _arguments = [..._arguments, ...args];
        if (_arguments.length >= n) {
            _arguments.length = n;
            return _arguments.reduce((acc, number) => acc + number)
        } else {
            return helper;
        }
    }

    return helper;
}

// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
console.log(superSum(0)) //0
console.log(superSum(3)(2)(5)(3)) //10
console.log(superSum(3)(2)(5, 3)) //10
console.log(superSum(3)(2, 5, 3)) //10
console.log(superSum(3)(2, 5)(3)) //10
console.log(superSum(3)(2, 5)(3, 9)) //10

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//1-st
function cycleSumTo(n) {
    let res = 0
    for (let i = n; i > 0; i--) {
        res += i
    }
    return res
}

function recSumTo(n) {
    if (n === 0) return 0
    else {
        return n += recSumTo(n - 1)
    }
}

function arithmSumTo(n) {
    if (n === 0) return 0
    else {
        return ((1 + n) / 2) * n
    }
}

console.log(arithmSumTo(100)); // 5050

//2-nd
function factorial(n) {
    if (n === 1) return 1
    else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5)) // 120

//3-rd
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

function fibCycle(n) {
    let a = 1
    let b = 1
    for (let i = 3; i <= n; i++) {
            let c = a + b
        a = b
        b = c
    }
    return b
}

console.log(fibCycle(3)); // 2
console.log(fib(7)); // 13
console.log(fibCycle(77)); // 5527939700884757
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
function flatt(arr) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]) === false) {
            a.push(arr[i])
        } else if(Array.isArray(arr[i]) === true) {
            a = [...a, ...flatt(arr[i])]
        }
    }
    console.log(a)
    return a
}
console.log(flatt([7,2,3,[4,5]]))

