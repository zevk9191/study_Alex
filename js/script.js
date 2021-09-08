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
        ? alert(`'В милях': ${sizeName.num}`)
        : alert(`'В милях': ${(result *= 0.000621371)} `);
      break;
    case 'KILOMETER':
      result *= 0.001;
      alert(`'В кілометрах': ${result.toFixed(5)}`);
      break;
    case 'CENTIMETER':
      alert(`'В сантиметрах': ${(result *= 100)}`);
      break;
    case 'MILIMETER':
      alert(`'В міліметрах': ${(result *= 1000)}`);
      break;
    case 'METER':
      alert(`'В метрах': ${result}`);
      break;
  }
  return result;
}
toMeter(2000, 'MILE');
fromMeter(result, 'KILOMETER');
