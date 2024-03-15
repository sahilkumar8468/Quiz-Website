const quizData=[{
    question:"What does HTML stands for?",
    options: [
        "Hypertext Markup Language",
        "Hyper Transfer Markup Language",
        "Hypertext Machine Language",
        "Hyperlink and Text Markup Language",
    ],
    correct: 0,
},

{
    question:"Which CSS property is used to control the spacing between elements?",
    options:["margin","padding","spacing","border-spacing"],
    correct:1,
},

{
    question:"What is the JavaScript function used to select an HTML element by its id?",
    options:[
        "document.query",
        "getElementByid",
        "selectElement",
        "findElementByid",
    ],
    correct:1
},

{
    question:"In React.js,which hook is used to perform side effect in a function component?",
    options:["useEffect","useState","useContext","useReducer"],
    correct:0,
},

{
    question:"Which HTML tag is used to create an ordered list?",
    options:["<ul>","<li>","<ol>","<dl>"],
    correct:2,
},
];


// first step

const quiz=document.querySelector('#quiz');
const scores=document.querySelector('.score');

const answerElm=document.querySelectorAll(".answer");
const [questionElm,option_1,option_2,option_3,option_4]=document.querySelectorAll("#question,.option_1,.option_2,.option_3,.option_4");


const submitbtn=document.querySelector("#submit");
let currentQuiz=0;
let score=0;

// step 3: load Quiz Function

const loadQuiz=()=>{
    const {question,options}=quizData[currentQuiz]
    console.log(question)

    scores.innerText=`Score:${score}/${quizData.length}`;


    questionElm.innerText=`${currentQuiz+1}:${question} `;

    options.forEach((curOption,index)=>(
        window[`option_${index+1}`].innerText=curOption)
        )

}
loadQuiz();

// step4  Get Selected Anawer Function on Button click


const getSelectedOption=()=>{
    // let ans_index;
    // answerElm.forEach((curOption,index)=>{
    //     if(curOption.checked){
    //         ans_index=index
    //     }
        
    // })
    // return ans_index;
    // second and easy method to do this same function

    let answerElement=Array.from(answerElm);
    return answerElement.findIndex((curOption)=> curOption.checked)
}

// deselected Answer

let deselectedAnswer=()=>{
    return answerElm.forEach((curElem)=>(curElem.checked=false));
}

submitbtn.addEventListener('click',()=>{
    const selectedOptionIndex=getSelectedOption();
    console.log(selectedOptionIndex);

    if (currentQuiz < quizData.length && selectedOptionIndex === quizData[currentQuiz].correct) {
        score += 1;
        // score=score+1;
    }
    

    currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();
        deselectedAnswer();
    }
    else{
        quiz.innerHTML=`  
        <div class="result">
        <h2>🏆 Your Score: ${score}/${quizData.length}correct Answer</h2>
        <p>Congratulation on completing the quiz</p>
        <button class="reload-button" onclick="location.reload()">Play Again 🎲</button>
        </div>`;
    }
})
