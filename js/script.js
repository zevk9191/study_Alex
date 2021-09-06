const MILE = 'MILE';
const KILOMETER = 'KILOMETER';
const CENTIMETER = 'CENTIMETER';
const MILIMETER = 'MILIMETER';
const METER = 'METER';
let result = 0;
let numIn = 0;
let nameOf = 0;

function toMeter(numberIn, nameOfSize) {
  numIn = numberIn;
  nameOf = nameOfSize;
  switch (nameOfSize) {
    case MILE:
      return (result = numberIn * 1609.34);
    case KILOMETER:
      return (result = numberIn * 1000);
    case CENTIMETER:
      return (result = numberIn * 0.01);
    case MILIMETER:
      return (result = numberIn * 0.001);
    case METER:
      return (result = numberIn);
  }
}

function fromMeter(nameOfSizeOut) {
  switch (nameOfSizeOut) {
    case MILE:
      if (nameOf == 'MILE') {
        alert(`'В милях': ${numIn}`);
      } else {
        result *= 0.000621371;
        alert(`'В милях' ${result.toFixed(2)}`);
      }
      break;
    case KILOMETER:
      result *= 0.001;
      alert(`'В кілометрах': ${result.toFixed(2)}`);
      break;
    case CENTIMETER:
      result *= 100;
      alert(`'В сантиметрах': ${result.toFixed(2)}`);
      break;
    case MILIMETER:
      result *= 1000;
      alert(`'В міліметрах': ${result.toFixed(2)}`);
      break;
    case METER:
      alert(`'Метри в метри': ${result.toFixed(2)}`);
      return result;
  }
}
toMeter(2000, 'MILE');
fromMeter('KILOMETER');
