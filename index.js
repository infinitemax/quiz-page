
let questionState = 1;

let numberOfQuestions = document.querySelectorAll(".myQuestion").length;

// update heading to show number of questions
document.getElementById("numOfQuestionsHeading").innerHTML = numberOfQuestions;

console.log(`there are ${numberOfQuestions} questions in this quiz`)


// navigation function - hides current question div, shows next/prev one.
const otherClicked = (direction) => {
    
    document.getElementById("que" + questionState).classList.add("hidden");
    document.getElementById("que" + (questionState + direction)).classList.remove("hidden");
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
}



//KEEPING TRACK OF THE ANSWERS
// initialise result array
const runningResult = [];

for (let i = 0; i < numberOfQuestions; i++){
    runningResult.push(null);
}

const answer = (value) => {
    runningResult[questionState - 1] = value;
    console.log(runningResult)
}


// SUBMITTING THE QUIZ
const submitQuiz = () => {
    document.getElementById("que" + questionState).classList.add("hidden");
    document.getElementById("resultsDiv").classList.remove("hidden");
    
    const result = calculateFinalScore(runningResult);
    console.log(result)

    document.getElementById("totalSpan").innerHTML = result;
}

// CALCULATE SCORE

const calculateFinalScore = (resultArray) => {
    let total = 0;
    resultArray.forEach(item => {
        if (item === "true") {
            total++;
        }
    })
    return total;
}


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