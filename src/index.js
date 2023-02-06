const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arrOfDec = getArrOfDecades();

  let arrOfCodedLetters = getArrOfCodedLetters(arrOfDec);

  let resStr = turnMorseCodeToWords(arrOfCodedLetters);

  return resStr;

  function getArrOfDecades() {
    let arr = [];
    for (i = 0; i < expr.length; i += 10) {
      arr.push(expr.slice(i, i + 10));
    }
    return arr;
  }

  function getArrOfCodedLetters(arr) {
    let arrMorseCoded = [];
    for (let el of arr) {
      let currStr = "";
      for (i = 0; i < el.length; i += 2) {
        el[i] === "1" && el[i + 1] === "0"
          ? (currStr += ".")
          : el[i] === "1" && el[i + 1] === "1"
          ? (currStr += "-")
          : el[i] === "*"
          ? (currStr += " ")
          : (currStr += "");
      }

      arrMorseCoded.push(currStr);
    }
    return arrMorseCoded;
  }

  function turnMorseCodeToWords(arr) {
    return arr
      .map((l) => (MORSE_TABLE[l] ? (l = MORSE_TABLE[l]) : (l = " ")))
      .join("");
  }
}

module.exports = {
    decode
}
