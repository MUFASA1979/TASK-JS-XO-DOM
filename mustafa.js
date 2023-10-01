// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let arr = [];
let counter = 0;
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.

  if (counter % 2 == 0) {
    fillButton(index, "X");
    document.getElementById(index).disabled = true;
    arr[index - 1] = "X";
    counter++;
  } else {
    fillButton(index, "O");
    document.getElementById(index).disabled = true;
    arr[index - 1] = "O";
    counter++;
  }
  const row1 =
    (document.getElementById("1").innerText == "X" &&
      document.getElementById("2").innerText == "X" &&
      document.getElementById("3").innerText == "X") ||
    (document.getElementById("1").innerText == "O" &&
      document.getElementById("2").innerText == "O" &&
      document.getElementById("3").innerText == "O");
  const row2 =
    (document.getElementById("4").innerText == "X" &&
      document.getElementById("5").innerText == "X" &&
      document.getElementById("6").innerText == "X") ||
    (document.getElementById("4").innerText == "O" &&
      document.getElementById("5").innerText == "O" &&
      document.getElementById("6").innerText == "O");
  const row3 =
    (document.getElementById("7").innerText == "X" &&
      document.getElementById("8").innerText == "X" &&
      document.getElementById("9").innerText == "X") ||
    (document.getElementById("7").innerText == "O" &&
      document.getElementById("8").innerText == "O" &&
      document.getElementById("9").innerText == "O");
  const col1 =
    (document.getElementById("1").innerText == "X" &&
      document.getElementById("4").innerText == "X" &&
      document.getElementById("7").innerText == "X") ||
    (document.getElementById("1").innerText == "O" &&
      document.getElementById("4").innerText == "O" &&
      document.getElementById("7").innerText == "O");
  const col2 =
    (document.getElementById("2").innerText == "X" &&
      document.getElementById("5").innerText == "X" &&
      document.getElementById("8").innerText == "X") ||
    (document.getElementById("2").innerText == "O" &&
      document.getElementById("5").innerText == "O" &&
      document.getElementById("8").innerText == "O");
  const col3 =
    (document.getElementById("3").innerText == "X" &&
      document.getElementById("6").innerText == "X" &&
      document.getElementById("9").innerText == "X") ||
    (document.getElementById("3").innerText == "O" &&
      document.getElementById("6").innerText == "O" &&
      document.getElementById("9").innerText == "O");
  const d1 =
    (document.getElementById("1").innerText == "X" &&
      document.getElementById("5").innerText == "X" &&
      document.getElementById("9").innerText == "X") ||
    (document.getElementById("1").innerText == "O" &&
      document.getElementById("5").innerText == "O" &&
      document.getElementById("9").innerText == "O");
  const d2 =
    (document.getElementById("3").innerText == "X" &&
      document.getElementById("5").innerText == "X" &&
      document.getElementById("7").innerText == "X") ||
    (document.getElementById("3").innerText == "O" &&
      document.getElementById("5").innerText == "O" &&
      document.getElementById("7").innerText == "O");
  if (row1 || row2 || row3 || col1 || col2 || col3 || d1 || d2) {
    winningAlert(document.getElementById(index).innerText);
  }
}
console.log(arr);

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
