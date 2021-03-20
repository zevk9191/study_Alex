const METER = 1;
const KILOMETER = 0.001;
const MILE = 0.0006;
const INCH = 39;

const number = +prompt('Напишіть число яке хочете перевести', '');

alert(`Метри: ${METER * number}
    Кілометри: ${KILOMETER * number}
    Милі: ${MILE * number}
    Дюйми: ${INCH * number}`
);
