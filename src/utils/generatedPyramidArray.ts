export default function generatePyramidArray(lenght: number) {
  let pyramidArray = [];

  let crescentArray = [];
  let decrescentArray = [];

  for (let i = 1 ; i <= lenght; i++) {
    crescentArray.push(i)

  }

  for (let j = lenght; j > 0; j--) {
    decrescentArray.push(j)
  }

  for (let k = 0; k < lenght; k++) {
    pyramidArray[k] = Math.min(crescentArray[k], decrescentArray[k])
  }

  return pyramidArray;
}

generatePyramidArray(2)
