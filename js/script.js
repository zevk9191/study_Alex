function toMeter(numberIn, nameOfSize) {
  sizeName = {
    name: nameOfSize,
    num: numberIn,
  };
  switch (sizeName.name) {
    case 'MILE':
      return (result = numberIn * 1609.34);
    case 'KILOMETER':
      return (result = numberIn * 1000);
    case 'CENTIMETER':
      return (result = numberIn * 0.01);
    case 'MILIMETER':
      return (result = numberIn * 0.001);
    case 'METER':
      return (result = numberIn);
  }
}

function fromMeter(result, nameOfSizeOut) {
  switch (nameOfSizeOut) {
    case 'MILE':
      sizeName.name == 'MILE'
        ? alert(`'В милях' ${sizeName.num}`)
        : alert(`'В милях': ${(result *= 0.000621371)} `);
      break;
    case 'KILOMETER':
      result = result * 0.001;
      alert(`'В кілометрах': ${result.toFixed(5)}`);
      break;
    case 'CENTIMETER':
      result *= 100;
      alert(`'В сантиметрах': ${result}`);
      break;
    case 'MILIMETER':
      result *= 1000;
      alert(`'В міліметрах': ${result}`);
      break;
    case 'METER':
      alert(`'Метри в метри': ${result}`);
      return result;
  }
}
toMeter(2000, 'MILE');
fromMeter(result, 'MILE');
