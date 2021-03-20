const METER = '1';
const KILOMETER = '0.001';
const MILE = '0.0006';
const INCH = '39';

let number = prompt('Напишіть число яке хочете перевести', '');

alert(`Метри: ${+METER * +number}`);
alert(`Кілометри: ${+KILOMETER * +number}`);
alert(`Милі: ${+MILE * +number}`);
alert(`Дюйми: ${+INCH * +number}`);





