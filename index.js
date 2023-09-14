let questionState = 1;

let questions = document.querySelectorAll(".myQuestion");
let numberOfQuestions = questions.length;

// update heading to show number of questions
document.getElementById("numOfQuestionsHeading").innerHTML = numberOfQuestions;

console.log(`there are ${numberOfQuestions} questions in this quiz`);


// adjust margin based on window size - trying but failing so far!

let windowHeight = window.innerHeight;
if (windowHeight > 700) {
    document.querySelector("body").classList.add("pb-28")
}

const resizeFunction = () => {
    console.log(windowHeight);
};

// TAKING NAME INPUT

let playerName = "";

const pressSubmitButton = (playerName) => {
    // grab name
    playerName = document.getElementById("nameInput").value;
    console.log(playerName);

    // hide first screen, reveal second screen
    document.getElementById("detailsDiv").classList.add("hidden");
    document.getElementById("welcomeDiv").classList.remove("hidden");

    // add player's name to all relevant places, leave "human" if nothing is entered.
    if (playerName != "") {
        const nameSpans = document.querySelectorAll(".playerNameSpan");
        nameSpans.forEach((nameSpan) => {
            nameSpan.innerHTML = playerName;
        });
    }
};

// PRESSING THE START BUTTON
const startButtonPress = () => {
    document.getElementById("welcomeDiv").classList.add("hidden");
    document.getElementById("questionSet").classList.remove("hidden");
};

// navigation function - hides current question div, shows next/prev one.
const otherClicked = (direction) => {
    document.getElementById("que" + questionState).classList.add("hidden");
    document
        .getElementById("que" + (questionState + direction))
        .classList.remove("hidden");
    questionState = questionState + direction;
    if (questionState > 1) {
        document.getElementById("prevButton").classList.remove("hidden");
    } else {
        document.getElementById("prevButton").classList.add("hidden");
    }
    if (questionState === numberOfQuestions) {
        document.getElementById("nextButton").classList.add("hidden");
    } else {
        document.getElementById("nextButton").classList.remove("hidden");
    }
    // DISPLAY SUBMIT BUTTON AT THE LAST QUESTION
    if (questionState === numberOfQuestions){
        document.getElementById("submitButton").classList.remove("hidden")
    } else {
        document.getElementById("submitButton").classList.add("hidden")
    }
};

//KEEPING TRACK OF THE ANSWERS
// initialise result array
const runningResult = [];

for (let i = 0; i < numberOfQuestions; i++) {
    runningResult.push(null);
}

const answer = (value, id) => {
    runningResult[questionState - 1] = value;
    console.log("runningResult = " + runningResult);
    console.log(id);
};

const buttons = document.querySelectorAll(".navButton");

// SUBMITTING THE QUIZ

const submitQuiz = () => {
    document.getElementById("que" + questionState).classList.add("hidden");

    document.getElementById("resultsDiv").classList.remove("hidden");
    buttons.forEach((button) => {
        button.classList.add("hidden");
    });

    const result = calculateFinalScore(runningResult);
    console.log("result is " + result);

    document.getElementById("totalSpan").innerHTML = result;
};

// CALCULATE SCORE
const calculateFinalScore = (resultArray) => {
    let total = 0;
    resultArray.forEach((item) => {
        if (item === "true") {
            total++;
        }
    });
    return total;
};

// REVIEW BUTTON

const reviewQuiz = () => {
    // show all questions
    questions.forEach((question) => {
        question.classList.remove("hidden");
    });

    // disable radio buttons
    const options = document.querySelectorAll(".radioOption");
    options.forEach((button) => {
        button.setAttribute("disabled", "");
    });

    // reveal correct answers
    const correctAnswers = document.querySelectorAll(".correct");
    correctAnswers.forEach((answer) => {
        answer.innerHTML += "       <--";
        answer.classList.add("text-green-300");
    });

    // hide review button
    document.getElementById("reviewButton").classList.add("hidden");

    // change styles so review divs aren't so big
    const allContentDivs = document.querySelectorAll(".contentDiv");

    // centre the retry button
    document.getElementById("retryButton").classList.add("col-span-2");

    // change the height of the question divs

    allContentDivs.forEach((question) => {
        question.classList.remove("h-[500px]");
    });

    // add ticks and crosses

    const ticks = document.querySelectorAll(".tickMark");
    const crosses = document.querySelectorAll(".crossMark");

    runningResult.forEach((result, index) => {
        console.log("index = " + index);
        if (result === "true") {
            ticks[index].classList.remove("hidden");
        } else {
            crosses[index].classList.remove("hidden");
        }
    })
};

//#region previous attempts

// let forms = document.querySelectorAll("form");

// console.log(forms)

// forms.forEach(form => {
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//     });
// })

// const giveAnswer = (result) => {

//     runningResult.push(result);
//     console.log(runningResult);
// }

// const clicked = (answer, questionNum) => {
//     questionNum = Number(questionNum);
//     console.log(`the button clicked was ${questionNum}`);
//     document.getElementById("question" + questionNum).classList.add("hidden");
//     console.log(questionNum + 1);
//     document.getElementById("question" + (questionNum + 1)).classList.remove("hidden");
// }

//#endregion
