let emojis = [
  {
    icon: "😓",
    sign: "):",
  },
  {
    icon: "😄",
    sign: "(:",
  },
  {
    icon: "🧑",
    sign: "(:)",
  },
  {
    icon: "🙂",
    sign: ":)",
  },
  {
    icon: "🤕",
    sign: ":(",
  },
];

/**
 * @param a word
 * @returns the emoi related to the word  (by looking at the emojis array) - or null if not found
 * Example word = "):"  return = "🤕"
 */
function getEmoji(word) {
  // TODO
}

function addMessage(event) {
  // 1- TODO: Get value from input
  // 2- TODO: Use function name: split() to cut each word by space
  //     more detail: https://www.w3schools.com/jsref/jsref_split.asp
  // 3 - For each words, replace by the emoji if can be found  ( use  getEmoji function)
  // 4 - Build a string with all words (put space between each words)
  // And finally :
  // 5 -  Create a <p> on the messageContainer with the built string
}

/**  MAIN  */
const messageContainer = document.querySelector("#messageContainer");
const addButton = document.querySelector("button");
// TODO: Call function addMessage when clicking on ADD button
