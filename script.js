
//---------------FUNCTIONS--FOR--HELP---------------------//
const getValueOfForms = (event, howMany, type) => {
    const parent = event.target.closest('.the_form')
    const result = event.target.previousElementSibling
    const form = parent.getElementsByClassName('form-control')
    const num = [result]
    for (let i = 0; i !== howMany; i++) {
        type === 'number' ? num.push(+form[i].value) : num.push(form[i].value)
    }
    return num
}

const isValidForm = (nums, type) => {
    for (let i = nums.length - 1; i !== 0; i--) {
        if (!nums[i]) {
            nums[0].innerText = `Введите коректные значения в форму!`;
            return true
        }
    }
    return false
}

const reseter = (event) => {
    const parent = event.target.closest('.the_form')
    const result = parent.querySelector("h4")
    result.innerText = "Результат :"
}

const timerForResult = (resultFunc, result, boolean) => {
    result.innerText = 'Результат :'
    boolean ? setTimeout(() => {result.innerText = resultFunc ? `Результат : ДА!` : `Результат : НЕТ!`}, 500) : setTimeout(() => {result.innerText = `Результат : ${resultFunc}`;}, 500);
}
//-------LISTENER--FOR--SHOW--CARD---------------//
const card_header_btn = document.getElementsByClassName('header_btn')
let index;

for (let i = 0; i <= card_header_btn.length-1; i++) {

    card_header_btn[i].addEventListener('click', function(event) {
        const parent = card_header_btn[i].closest('.the_card')
        const card_body = parent.getElementsByClassName('card_body')
        parent.firstElementChild.classList.toggle('bg-danger')
        if(index !== card_body[0].id && index) {
            const close = document.getElementById(index)
            const closeParent = close.closest('.the_card')
            closeParent.firstElementChild.classList.remove('bg-danger')
            close.style.maxHeight = null
        }
        index = card_body[0].id
        if (card_body[0].style.maxHeight) {
            card_body[0].style.maxHeight = null
        } else {
            card_body[0].style.maxHeight = card_body[0].scrollHeight + 'px'
        }

    })
}

//---------------CARD-1---------------------//

const isPrime = (event) => {
    const nums = getValueOfForms(event, 1, 'number')
    const [result, num] = nums
    if(isValidForm(nums)) {
        return
    }
    if (num.length === 0) {
        return result.innerText = `Введите число!`;
    }
    if (num <= 1) {
        return result.innerText = `Результат : НЕТ!`;
    }
    const checknum = (num, acc) => {
        if (acc >= num) {
            return true;
        }
        if (num % acc === 0) {
            return false;
        }
        return checknum(num, acc + 1);
    }
    const res = checknum(num, 2)
    timerForResult(res, result, true)
}

//---------------CARD-2---------------------//

const smallestDivisor = (event) => {
    const nums = getValueOfForms(event, 2, 'number')
    const [result, num1 , num2] = nums
    if(isValidForm(nums)) {
        return
    }
    const iter = (counter1, counter2, acc) => {
        if (counter1 % acc === 0 && counter2 % acc === 0 ) {
            return acc;
        }
        if ((num1 && num2) === 1) {
            return 1;
        }
        if (acc > counter1 && acc > counter2) {
            return 1;
        }
        counter1 / acc;
        counter2 / acc;
        return iter(counter1, counter2, acc - 1);
    }
    let i = num2;
    if (num1 > num2) {
        i = num1;
   }
    const res = iter(num1, num2, i)
    timerForResult(res, result)
};

//---------------CARD-3---------------------//

const sequenceSum = (event) => {
    const nums = getValueOfForms(event, 2, 'number')
    const [result, begin, end] = nums
    if(isValidForm(nums)) {
        return
    }
    const sequenceSum2 = (begin) => begin === 0 ? 1 : begin + sequenceSum2(begin - 1);
    const sequenceSum3 = (end) => end === 0 ? 1 : end + sequenceSum3(end - 1);

    if (begin > end || begin === end) {
        return result.innerText = `Задайте коректную последовательность!`;;
    } else if (begin === end) {
        return begin;
    } else if (begin < 0) {
        return begin;
    }
    const res = sequenceSum3(end) - (sequenceSum2(begin) - begin);
    timerForResult(res, result)
};

//---------------CARD-4---------------------//

const factorial = (event) => {
    const nums = getValueOfForms(event, 3, 'number')
    const [result, num1, num2, num3] = nums
    if(isValidForm(nums)) {
        return
    }
    const factorialInner = (num1, num2, num3, acc, sum) => {
        console.log(num1, num2, num3, acc, sum)
        if (acc === num1 || num2 > num1 || num3 > num1) {
            return sum;
        }
        if (acc % num2 === 0 || acc % num3 === 0) {
            return factorialInner(num1, num2, num3, acc + 1, sum + acc);
        }
        return factorialInner(num1, num2, num3, acc + 1, sum);
    }
    const res = factorialInner(num1, num2, num3, 1, 0)
    timerForResult(res, result)
}

//---------------CARD-5---------------------//
const reverse = (event) => {
    const values = getValueOfForms(event, 1, 'string')
    const [result, value] = values
    console.log(value)
    if(isValidForm(values)) {
        return
    }
    let res = ``;
    let i = value.length;
    while (i > 0) {
        i--;
        res +=value[i];
    }
    timerForResult(res, result)
}

//---------------CARD-6---------------------//

const solution = (event) => {
    const values = getValueOfForms(event, 1, 'string')
    const [result, value] = values
    if(isValidForm(values)) {
        return
    }
    let i;
    const f1 = (n) => {
        return i = n;
    }
    let res = ``;
    if (value[0] !== ` `) {
        f1(1);
        res += value[0].toUpperCase();
    } else {
        f1(0);
    }
    console.log(i);
    while (i < value.length) {
        if (value[i - 1] === ` `) {
            res += value[i].toUpperCase();
        }
        if (value[i - 1] !== ` `) {
            res += value[i];
        }
        i++;
    }
    timerForResult(res, result)
}
