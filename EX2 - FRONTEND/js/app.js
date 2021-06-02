/**
 * Given the number (integer), return the emoji (string), following the rules
 * @param  number a number (1, 2, 3 or 4)
 * @return the emoji, as a string
 */
function getEmoji(number) {
  // TODO:
  // value = 1, return  "😊"
  // value = 2, return  "🥰"
  // value = 3, return  "😂"
  // value = 4, return  "🥱"
}

function updateEmoji() {
  // 1- TODO: Get the selected number from the radio (1, 2, 3 or 4)
  // 2- TODO: Get the emoji as a string using getEmoji function
  // 3 - TODO Upate the h1Message
}

/** Main code  */
const inputRadio = document.querySelectorAll("input");
const h1Message = document.querySelector("#message");
document.addEventListener("change", updateEmoji);
