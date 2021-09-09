function toMeter(numberIn, nameOfSize) {
  switch (nameOfSize) {
    case 'MILE':
      return (numberIn *= 1609.34);
    case 'KILOMETER':
      return (numberIn *= 1000);
    case 'CENTIMETER':
      return (numberIn *= 0.01);
    case 'MILIMETER':
      return (numberIn *= 0.001);
    case 'METER':
      return numberIn;
    default:
      break;
  }
}

function fromMeter(result, nameOfSizeOut) {
  switch (nameOfSizeOut) {
    case 'MILE':
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
