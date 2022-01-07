// Math - специальное слово для работы с математикой
// Math.random() - создает рандомное число от 0 до 1  ( 1 не получиться )
// Math.floor() - делает округление до наименьшего целого
// Math.ceil() - делает округление до наибольшего целого
// Math.round() - делает округление по мат правилам

// function random(min, max) {
//     return Math.floor( Math.random() * (max - min) + min);
// }

// let minNumber = +prompt('Введите минимальный диапазон'); 10
// let maxNumber = +prompt('Введите максимальный диапазон'); 20

// for(let i = 0; i < 10;i++) {
//     let number1 = random(minNumber, maxNumber) 
//     let number2 = random(minNumber, maxNumber) 
//     let primer = +prompt(number1 + ' + ' + number2 + ' =');
//     let answer = (number1 + number2) == primer ? 'Молодец' : 'Ошибка';
//     alert(number1 + ' + ' + number2 + ' = ' + (number1 + number2) + ' Ваш ответ ' + primer + ' ! ' + answer);

// }
 

function random(min, max) {
    return Math.floor( Math.random() * (max - min) + min);
}
function chislo(mi,ma){
 let sunnat =  Math.floor( Math.random() * (ma - mi) + mi);
if (sunnat == 1){sunnat = '+'}
if (sunnat == 2){sunnat = '-'}
if (sunnat == 3){sunnat = '*'}
if (sunnat == 4){sunnat = '/'}
return sunnat
}

let no = +prompt('videte kolichistvo zadach'); 
let minNumber = 1;
let maxNumber = 15;
for(let i = 0; i < no;i++) {
    let number1 = random(minNumber, maxNumber) 
    let number2 = random(minNumber, maxNumber) 
    let primer = +prompt(number1  + chislo(1,5) +   number2 + ' =');

 let answer = (number1 + chislo(1,5)+ number2) == primer ? 'Молодец' : 'nepravilno' ;
    console.log( ' Ваш ответ ' + primer + ' ! ' + answer);

}
