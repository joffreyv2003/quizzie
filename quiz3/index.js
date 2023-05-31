const questions = [
    {
        question: "Wat is je naam?",
        optionA: "&",
        correctOption: " "
    },

    {
        question: "Hoe heet het apparaat waarmee je de temperatuur in een kamer meet?",
        optionA: "Thermometer",
        optionB: "Infrarood Thermo",
        optionC: "Spirit Meter",
        optionD: "Ghost Finder",
        correctOption: "optionB"
    },

    {
        question: "Hoeveel evidence kan je maximaal krijgen op Nightmare niveau?",
        optionA: "2",
        optionB: "4",
        optionC: "3",
        optionD: "6",
        correctOption: "optionA"
    },

    {
        question: "Hoe heet de geest die enorm snel kan rennen?",
        optionA: "Oryo",
        optionB: "Wraith",
        optionC: "Goryo",
        optionD: "Revenant",
        correctOption: "optionD"
    },

    {
        question: " Hoe heet het apparaat waarmee je met de geest kan praten?",
        optionA: "UV",
        optionB: "EMF Reader",
        optionC: "Spirit Box",
        optionD: "Foto Camera",
        correctOption: "optionC"
    },

    {
        question: "Hoeveel verschillende mappen heeft Phasmopobia?",
        optionA: "5",
        optionB: "10",
        optionC: "8",
        optionD: "2",
        correctOption: "optionB"
    },

    {
        question: "Welke geest is het meest gevaarlijk?",
        optionA: " ",
        correctOption: "Wraith"
    },

    {
        question: "Wat is de beste manier om een geest boos te maken?",
        optionA: " ",
        correctOption: "Zijn naam zeggen"
    },

    {
        question: "Hoe heet de grootste map van Phasmopobia?",
        optionA: " ",
        correctOption: "High School"
    },

    {
        question: "Wat is de special ability van de Wraith?",
        optionA: " ",
        correctOption: "Geen footsteps"
    },

    {
        question: `Welke geest wordt boos als je zijn naam zegt?`,
        optionA: " ",
        correctOption: "Oni"
    }
]


let shuffledQuestions = [] 

function handleQuestions() { 
    let count = 0;
    while (shuffledQuestions.length <= 10) {
        const random = questions[count]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
        count++;
    }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 
let naam = "";

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;

    document.getElementById("option-one-label").parentElement.remove();
    document.getElementById("option-two-label").parentElement.remove();
    document.getElementById("option-three-label").parentElement.remove();
    document.getElementById("option-four-label").parentElement.remove();

    if(currentQuestion.optionA == " " || currentQuestion.optionA == "&"){
        console.log("input");
        document.getElementById("holder").innerHTML += '<input type="text" id="input" name="option" class="radio" value="" />';
    }else{
        document.getElementById("holder").innerHTML += '<span><input type="radio" id="option-one" name="option" class="radio" value="optionA" /><label for="option-one" class="option" id="option-one-label"></label></span><span><input type="radio" id="option-two" name="option" class="radio" value="optionB" /><label for="option-two" class="option" id="option-two-label"></label></span><span><input type="radio" id="option-three" name="option" class="radio" value="optionC" /><label for="option-three" class="option" id="option-three-label"></label></span><span><input type="radio" id="option-four" name="option" class="radio" value="optionD" /><label for="option-four" class="option" id="option-four-label"></label></span>';
        document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
        document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
        document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
        document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    }

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null
    try{
        if(document.getElementById("input").value== "admin"){handleEndGame(); return;}
    }catch{

    }
    if(currentQuestion.optionA == " "){
        if(document.getElementById("input").value.toUpperCase() == currentQuestionAnswer.toUpperCase()){
            document.getElementById("input").style.backgroundColor = "#30fc5b"
            document.getElementById("input").style.boxShadow = "0px 4px #1db43d"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
                document.getElementById("holder").innerHTML += '<span><input type="radio" id="option-one" name="option" class="radio" value="optionA" /><label for="option-one" class="option" id="option-one-label"></label></span><span><input type="radio" id="option-two" name="option" class="radio" value="optionB" /><label for="option-two" class="option" id="option-two-label"></label></span><span><input type="radio" id="option-three" name="option" class="radio" value="optionC" /><label for="option-three" class="option" id="option-three-label"></label></span><span><input type="radio" id="option-four" name="option" class="radio" value="optionD" /><label for="option-four" class="option" id="option-four-label"></label></span>';
                document.getElementById("input").remove();
            }, 1000)
            return;
        }else{
            document.getElementById("input").style.backgroundColor = "#ff3222"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
                document.getElementById("holder").innerHTML += '<span><input type="radio" id="option-one" name="option" class="radio" value="optionA" /><label for="option-one" class="option" id="option-one-label"></label></span><span><input type="radio" id="option-two" name="option" class="radio" value="optionB" /><label for="option-two" class="option" id="option-two-label"></label></span><span><input type="radio" id="option-three" name="option" class="radio" value="optionC" /><label for="option-three" class="option" id="option-three-label"></label></span><span><input type="radio" id="option-four" name="option" class="radio" value="optionD" /><label for="option-four" class="option" id="option-four-label"></label></span>';
                document.getElementById("input").remove();
            }, 1000)
            return;
        }
    }else if(currentQuestion.optionA == "&"){
        naam = document.getElementById("input").value;
        setTimeout(() => {
            indexNumber++
            document.getElementById("holder").innerHTML += '<span><input type="radio" id="option-one" name="option" class="radio" value="optionA" /><label for="option-one" class="option" id="option-one-label"></label></span><span><input type="radio" id="option-two" name="option" class="radio" value="optionB" /><label for="option-two" class="option" id="option-two-label"></label></span><span><input type="radio" id="option-three" name="option" class="radio" value="optionC" /><label for="option-three" class="option" id="option-three-label"></label></span><span><input type="radio" id="option-four" name="option" class="radio" value="optionD" /><label for="option-four" class="option" id="option-four-label"></label></span>';
            document.getElementById("input").remove();
        }, 1000)
        return;
    }

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })


    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#30fc5b"
            document.getElementById(correctOption).style.boxShadow = "0px 4px #1db43d"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#ff3222"
            document.getElementById(correctOption).style.backgroundColor = "#30fc5b"
            document.getElementById(correctOption).style.boxShadow = "0px 4px #1db43d"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 10) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Jammer "+naam+", volgende keer beter!"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Meh... kan beter "+naam+"!"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Goed gedaan "+naam+"! Nu krijg je officeel een sticker!!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100
    document.getElementById("imageHolder").innerHTML = '';
    for(let i = 0; i < playerScore; i++){
        document.getElementById("imageHolder").innerHTML += '<img src="images/cookie.png" alt="">';
    }
    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}