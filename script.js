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
    age%=100;
    if((age>4 && age<=20)){     
        result = 'лет!';      
    }
    else if(age%10 == 1){
        result = 'год!';
    }
    else if(age%10==2 || age%10==3 || age%10==4){
        result = 'года!';
    }
    else {
        result = 'лет!';
    }
    return result;
}

getAge();
