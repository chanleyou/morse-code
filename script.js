// Write a function that accepts a user input and be able to output the encoded value.
var toMorse = function (input) {

  var splitInput = input.split("");
  var output = [];

  for (i = 0; i < splitInput.length; i++) {

    if (input[i] === " ") {
      output.push(" ");
    } else {
      output.push(alphabet[input[i]]);
    }
  }
  return output.join(" ");
}

// Try encoding the following strings:
var firstWord = "hello world";
var secondWord = "we love javascript";

console.log(toMorse(firstWord));
console.log(toMorse(secondWord));

// Decode the following messages:
var firstMessage = "... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .";
var secondMessage = "-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-";
var thirdMessage = "- .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --. ....";

var morseToString = function (input) {

  var splitInput = input.split(" ");
  var output = [];

  for (i = 0; i < splitInput.length; i++) {

    if (splitInput[i] === "") {
      output.push(" ");
    } else {
      for (j = 0; j < Object.values(alphabet).length; j++) {

        if (splitInput[i] === Object.values(alphabet)[j]) {
          output.push(Object.keys(alphabet)[j]);
        }
      }
    }
  }
  return output.join("");
}

console.log(morseToString(firstMessage));
console.log(morseToString(secondMessage));
console.log(morseToString(thirdMessage));
