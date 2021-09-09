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
    default:
      break;
  }
}

function fromMeter(result, nameOfSizeOut) {
  switch (nameOfSizeOut) {
    case 'MILE':
      if (sizeName.name == 'MILE') return sizeName.num;
      return (result *= 0.000621371);
    case 'KILOMETER':
      return (result *= 0.001);
    case 'CENTIMETER':
      return (result *= 100);
    case 'MILIMETER':
      return (result *= 1000);
    case 'METER':
      return result;
    default:
      break;
  }
}
toMeter(2000, 'MILE');
fromMeter(result, 'MILE');
