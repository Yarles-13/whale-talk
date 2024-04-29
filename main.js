console.clear();
// take a phrase like 'turpenes and turtles' and translate -> whale talk equivalent
// 1 ) There are no consonants. Only vowels excluding 'y';
// 2) the u's and e's are extra long. so we must double them in our program

const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  const inputElements = input[i].toUpperCase();

  if (inputElements === "E") {
    resultArray.push(inputElements);
  }
  if (inputElements === "U") {
    resultArray.push(inputElements);
  }

  for (let j = 0; j < vowels.length; j++) {
    const vowelElements = vowels[j].toUpperCase();
    if (inputElements === vowelElements) {
      resultArray.push(inputElements);
    }
  }
}

const resultString = resultArray.join("");
console.log(resultString);
