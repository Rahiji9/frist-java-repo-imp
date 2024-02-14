function calculateRectangleArea() {
  // get rectangle width velue
  const rectangleWidthInput = document.getElementById('rectangle-width')
  const rectangleWidthValue = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthValue)
  console.log(width);
  // get rectangle lenght velue
  const rectangleLengthInput = document.getElementById('rectangle-length')
  const rectangleLengthValue = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthValue)
  console.log(length);


  // rectangle area calculate
  const area = length * width
  console.log(area);

  // display rectangle area
const rectangleAreaSpan = document.getElementById('rectangle-area')
rectangleAreaSpan.innerText =area;
}
