// Germany Quiz Script by Hans Kerkhoven

// Add button event listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Check Quiz answers
  let question1 = document.getElementById("question1-in").value.toLowerCase();
  let question2 = document.getElementById("question2-in").value.toLowerCase();
  let question3 = document.getElementById("question3-in").value.toLowerCase();
  let question4 = document.getElementById("question4-in").value.toLowerCase();
  // Set quiz answer variables
  let question1answer = 2;
  let question2answer = 2;
  let question3answer = 2;
  let question4answer = 2;
  // Test quiz answers
  if (question1 === "berlin") {
    question1answer = 1;
    document.getElementById("Question1-feedback").innerHTML = ` Correct!`;
  } else {
    question1answer = 0;
    document.getElementById(
      "Question1-feedback"
    ).innerHTML = `Incorrect! The correct answer is Berlin.`;
  }
  if (question2 === "oktoberfest") {
    question2answer = 1;
    document.getElementById("Question2-feedback").innerHTML = ` Correct!`;
  } else {
    question2answer = 0;
    document.getElementById(
      "Question2-feedback"
    ).innerHTML = `Incorrect! The correct Answer is Oktoberfest`;
  }
  if (question3 === "september") {
    document.getElementById("Question3-feedback").innerHTML = ` Correct!`;
    question3answer = 1;
  } else {
    document.getElementById(
      "Question3-feedback"
    ).innerHTML = ` Incorrect! The correct answer is September`;
    question3answer = 0;
  }
  if (question4 === "empire and rich" || question4 === "rich and empire") {
    document.getElementById("Question4-feedback").innerHTML = `Correct! `;
    question4answer = 1;
  } else {
    document.getElementById(
      "Question4-feedback"
    ).innerHTML = `Incorrect! The correct answer is Empire and Rich`;
    question4answer = 0;
  }

  // Get total correct answers
  let sum =
    question1answer + question2answer + question3answer + question4answer;

  let percentage = (sum / 4) * 100;

  document.getElementById("Output").innerHTML =
    `Thanks for taking this quiz! You got: ` +
    sum +
    `/4` +
    ` (` +
    percentage +
    `%)`;
}
