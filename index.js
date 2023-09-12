const runningResult = [];

let forms = document.querySelectorAll("form");

console.log(forms)

forms.forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });
})



const giveAnswer = (result) => {
    
    runningResult.push(result);
    console.log(runningResult);
}

const clicked = (answer, questionNum) => {
    questionNum = Number(questionNum);
    console.log(`the button clicked was ${questionNum}`);
    document.getElementById("question" + questionNum).classList.add("hidden");
    console.log(questionNum + 1);
    document.getElementById("question" + (questionNum + 1)).classList.remove("hidden");
}

let questionState = 1;
let numberOfQuestions = document.querySelectorAll(".myQuestion").length;
console.log(`there are ${numberOfQuestions} questions in this quiz`)

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


