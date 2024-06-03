// Your code here
export const isPalindrome = (word) => {
  if (word.length === 0) {
    throw new Error("Input cannot be an empty string");
  }

  if (!/^[a-zA-Z]*$/.test(word)) {
    throw new Error("Input must only contain alphabetic characters");
  }

  return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
};
