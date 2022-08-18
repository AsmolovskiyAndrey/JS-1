function checkForSpam(message) {
  let result;
  // Change code below this line
    result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")
  return result;
}
console.log(checkForSpam("Latest technology news"));
