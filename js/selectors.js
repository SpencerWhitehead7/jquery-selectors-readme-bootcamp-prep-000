// declare your functions here...
function paragraphSelector(){
  let paragraphs = $('p')
  return paragraphs
}

function lastImageSelector(){
  let images = $('img')
  console.log(images.pop())
}