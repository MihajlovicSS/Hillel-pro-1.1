let form = document.querySelector('.form');
let inputName = form.querySelector('.form__name');
let inputYear = form.querySelector('.form__year');
let buttonSubmit = form.querySelector('.form__submit');
let formOutput = form.querySelector('.form__output');
let formOutputName = form.querySelector('.form__output-name');
let formOutputYears = form.querySelector('.form__output-years');
let formOutputPostfix = form.querySelector('.form__output-postfix');

let getAge = function(){
    buttonSubmit.addEventListener('click', function(evt){
        evt.preventDefault();
        let userName = inputName.value;
        let userBirthyear = inputYear.value; 
        console.log(userBirthyear);
        if (userBirthyear>1900 && userBirthyear<2022){            
            let age = howOld(2022, userBirthyear);
            formOutput.classList.remove('hidden');
            formOutputName.textContent = userName;
            formOutputYears.textContent = age;
            formOutputPostfix.textContent = correctWordOfAge(age);
        }
        else{
            alert('Неправильный год рождения! Введите данные еще раз');
            formOutput.classList.add('hidden');
        }        
        inputName.value = '';
        inputYear.value = '';
    })
}

let howOld = function(thisYear, yearOfBirthday){
    return thisYear-yearOfBirthday;
}

let correctWordOfAge = function(age){
    let result = '';
    if(age%10 == 1 && age != 11){
        result = 'год!';
    }
    else if((age>1 && age<5) || (age>20 && (age%10==2 || age%10==3 || age%10==4))){
        result = 'года!';
    }
    else{
        result = 'лет!';
    }
    return result;
}

getAge();










/*let getAge = function(){
    let userName = prompt('Введите свое имя');    
    let message = 'Введите свой год рождения';
    let userYear = prompt(message);
    while(1){    
        if(userYear>1900 && userYear < 2022){
            break;
        }
        else{
            alert('Неправильный год рождения!')
            message = 'Введите ВЕРНЫЙ год рождения';
            userYear = prompt(message);
        }
    }
    let userAge = howOld(2022, userYear);
    console.log(userAge);
    confirm(userName + ', вам '+ userAge + ' ' + correctWordOfAge(userAge) + '?');
}

let howOld = function(thisYear, yearOfBirthday){
    return thisYear-yearOfBirthday;
}

let correctWordOfAge = function(age){
    let result = '';
    if(age%10 == 1){
        result = 'год';
    }
    else if((age>1 && age<5) || (age>20 && (age%10==2 || age%10==3 || age%10==4))){
        result = 'года';
    }
    else{
        result = 'лет';
    }
    return result;
}

getAge();*/

/*
1)Запросить у пользователя ввести имя и год рождения (в 2-ух разных окнах)
2)Проверить что год введен корректно
3)Высчитать сколько пользователю лет
4)Сформировать корректную строку для вопроса из высчитанного 
значения сколько пользователю лет (Возможные варианты окончания
 строки: год, года, лет. Пример - "Вадим, вам 24 года?")
5)Вывести эту строку для подтверждения (в confirm)*/