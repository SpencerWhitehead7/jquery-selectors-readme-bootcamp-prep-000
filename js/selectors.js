// declare your functions here...
function paragraphSelector(){
  let paragraphs = $('p')
  return paragraphs
}

function lastImageSelector(){
  let images = $('img')
  result = images.pop
  return images.pop
}