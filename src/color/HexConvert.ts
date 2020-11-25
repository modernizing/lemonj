export function hexThreeToSix(hexcolor: string) {
  hexcolor = hexcolor.substring(1);
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(function (hex) {
        return hex + hex;
      })
      .join('');
  }

  return '#' + hexcolor;
}
