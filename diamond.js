// repeat method in js takes O(n) where n is repeat parameter
// each for loop goes n times (n parameter)
// so, O(n power 2) first loop + O(n power 2) second loop= O(n power 2)
// O(n power2)n n being parameter enterd by user
function generateDiamondsInConsole(n) {
  for (var i = 0; i < n; i++)
    console.log(" ".repeat(n - i) + "*".repeat(2 * i + 1));
  for (var i = n - 1; i > 0; i--)
    console.log(" ".repeat(n - i + 1) + "*".repeat(2 * i - 1));
}

//same time complexity analysis here as above
//&nbsp to enable html multiple spaces, takes half the space of a char
function generateDiamondsInBrowser(n) {
  n = parseInt(n);
  if (n && n > 0) {
    var string = "";
    for (var i = 0; i < n; i++) {
      string += "&nbsp".repeat(2 * (n - i - 1)) + "*".repeat(2 * i + 1);
      string += "<br>";
    }
    for (var i = n - 1; i > 0; i--) {
      string += "&nbsp".repeat(2 * (n - i)) + "*".repeat(2 * i - 1);
      string += "<br>";
    }
    return string;
  }
  return "Enter a valid natural number";
}

var userInput = prompt("Please enter number of rows in diamond:");
var diamond = generateDiamondsInBrowser(userInput);
document.getElementById("body").innerHTML = diamond;
