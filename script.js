/* FLOATING HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 5) + "s";
  const scale = 0.5 + Math.random() * 1.5;
  heart.style.transform = `scale(${scale}) rotate(-45deg)`;
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 8000);
}
setInterval(createHeart, 50);

/* SHINING STARS */
const starsContainer = document.querySelector(".stars");
for (let i = 0; i < 120; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDuration = (1 + Math.random() * 3) + "s";
  starsContainer.appendChild(star);
}

/* ELEMENTS */
const text = document.getElementById("text");
const bigHeart = document.querySelector(".big-heart");
const video = document.getElementById("love-video");
const audio = document.getElementById("love-song");
const finalSentence = document.getElementById("final-sentence");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const timer = document.getElementById("timer");
const overlay = document.getElementById("start-overlay");
const startQuizBtn = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextQuestionBtn = document.getElementById("next-question");
const quizWarning = document.getElementById("quiz-warning");
const words = ["Eid", "Mubarak", "To My Lovely Family", "I Love You all 💗"];
const scoreDisplay = document.getElementById("score-display");

let i = 0;
let textInterval;

/* MOBILE AUTOPLAY OVERLAY */
overlay.addEventListener("click", () => {
  audio.play().catch(()=>console.log("Audio blocked"));
  overlay.style.display = "none";
});

/* START THE SEQUENCE */
function startSequence() {
  text.style.display = "block";
  text.innerHTML = words[0];
  text.style.opacity = "1";
  bigHeart.style.display = "none";
  video.style.display = "none";
  timer.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  finalSentence.style.display = "none";

  i = 0;
  if(textInterval) clearInterval(textInterval);

  function showNextWord(){
  if(i < words.length){
    typeWriter(words[i], () => {
      i++;
      showNextWord();
    });
  } else {
    text.style.display = "none";
    bigHeart.style.display = "block";

    setTimeout(() => {
      bigHeart.style.display = "none";
      video.style.display = "block";
      audio.pause();
      video.play();
    }, 2000);
  }
}

showNextWord();
}

/* VIDEO ENDED */
video.onended = () => {
  video.style.display = "none";
  audio.play();
  btn1.style.display = "inline-block";
};

/* BUTTON 1 */
btn1.onclick = () => {
  btn1.style.display = "none";
  timer.style.display = "block";
  startTimer();
};

function typeWriterFinal(sentence){
  finalSentence.innerHTML = "";
  let i = 0;

  function typing(){
    if(i < sentence.length){
      finalSentence.innerHTML += sentence.charAt(i);
      i++;
      // مدة أسرع على الموبايل لو طويل
      setTimeout(typing, 40);
      // Scroll تلقائي للنص إذا طويل
      finalSentence.parentElement.scrollTop = finalSentence.parentElement.scrollHeight;
    }
  }

  typing();
}
/* BUTTON 2 */
btn2.onclick = () => {
  timer.style.display = "none";
  btn2.style.display = "none";
  typeWriterFinal(`كل عام وانتم بخير و دائما في صحة وسلامة وعافية و دايما مبسوطين وفرحانين ومتجمعين سوا ♥️🥰
جعلكم الله دائما وابدا خير الاهل والعائلة لي و لكل فرد فيها🫂♥️
حبيت اعمل حاجة بسيطة كدا افرحكم بيها 
ف حابب اشكر بابا حبيبي انه دايما معيشنا احلى عيشة واجمل مستوى ومش حارمنا من اي حاجة و بيجبلنا اللي نفسنا فيه و دايما داعمنا في اي مجال و اي اختيار و احيانا بيبقى طيب و بتصعب عليا 😂♥️♥️♥️

و امي روح قلبي دي حتة القشطاية بتاع العيلة ♥️
اجمل و الذ واطعم ام اللي عارفة كل حاجة عني و معاها كل اسراري و دايما بتدعمني ومبسوطة وفرحانة لمجرد فرحتنا بس
ربنا يخليكم لينا دايما ♥️
وطبعا بلقي تحيتي للاخرة الكرام احمد و محمد و رؤية 

هنلعب لعبة خفيفة كدا 
هنسأل كام سؤال عشوائي وهنشوف مين اللي هيجيب اعلى سكور او يقفل  هياخد 100ج

دوس على الزرار اللي تحت دا 👇🏽`);
  finalSentence.style.display = "block";
    finalSentence.parentElement.scrollTop = finalSentence.parentElement.scrollHeight;
    finalSentence.style.fontSize = "25px";
  startQuizBtn.style.display = "inline-block";
};

/* BUTTON 3 → RESTART SEQUENCE */
btn3.onclick = () => {
  //startSequence();
  finalSentence.innerHTML = "";
  finalSentence.style.display = "block";
  finalSentence.style.fontSize = "40px";
  finalSentence.style.textShadow = "0px 0px 10px white";
  finalSentence.innerHTML = "I hope you enjoyed the game!❤️";
  
  scoreDisplay.style.display = "none";
};

/* TIMER */
function startTimer(){
  const startDate = new Date("2002-07-04T00:00:00");
  btn2.style.display = "inline-block"; // show once

const timerInterval = setInterval(() => {

  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += lastMonth;
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  timer.style.color = "white";
  timer.style.textAlign = "center";
  timer.style.fontFamily = "sans-serif";
  timer.style.textShadow = "0px 0px 10px white";

  timer.innerHTML = `
    Together for ❤️ <br>
    ${years} years ,
    ${months} months ,
    ${days} days <br>
    ${hours} hours :
    ${minutes} minutes :
    ${seconds} seconds
  `;

},);
}
function typeWriter(word, callback){
  text.innerHTML = "";
  let j = 0;

  function typing(){
    if(j < word.length){
      text.innerHTML += word.charAt(j);
      j++;
      setTimeout(typing, 80);
    }else{
      setTimeout(callback, 1200);
    }
  }

  typing();
}
/* START INITIALLY */
startSequence();

const questions = [
  {
    question: `من قائل هذه الجملة "ماشاء الله عليك يبني ماشاء الله " ؟`,
    answers: [
      {text:"احمد", correct:false},
      {text:"الابو", correct:true},
      {text:"رؤية", correct:false}
    ]
  },
  {
    question: `عيد ميلاد ماما ؟`,
    answers: [
      {text:"10-10", correct:false},
      {text:"11-10", correct:true},
      {text:"12-10", correct:false}
    ]
  },
  {
    question: `معنى كلمة امتزاززز ؟`,
    answers: [
      {text:"اختزال", correct:true},
      {text:"اكسدة", correct:false},
      {text:"امتصاص", correct:false}
    ]
  }
  ,
  {
    question: `مين الابن المفضل ؟`,
    answers: [
      {text:"بودي", correct:true},
      {text:"بودازا", correct:true},
      {text:"البودزز", correct:true}
    ]
  }
  ,
  {
    question: `مين اجمد حد في الدنيا ؟`,
    answers: [
      {text:"بودي", correct:true},
      {text:"بودازا", correct:true},
      {text:"البودزز", correct:true}
    ]
  }
  
];

let currentQuestion = 0;
let score = 0;
let selected = false;
nextQuestionBtn.style.backgroundColor = "#ff1f4b";
startQuizBtn.style.backgroundColor = "#ff1f4b";
startQuizBtn.onclick = () => {

  startQuizBtn.style.display = "none";
  quizContainer.style.display = "block";
  finalSentence.style.display = "none";

  showQuestion();

};

function showQuestion(){

  selected = false;

  quizWarning.style.display = "none";

  nextQuestionBtn.style.display = "none";

  const q = questions[currentQuestion];

  questionEl.innerText = q.question;

  answersEl.innerHTML = "";

  q.answers.forEach(answer => {

    const btn = document.createElement("button");

    btn.classList.add("btn");

    btn.innerText = answer.text;

    btn.onclick = () => selectAnswer(btn, answer.correct);

    answersEl.appendChild(btn);

  });

}

function selectAnswer(button, correct){

  selected = true;

  const buttons = answersEl.children;
  const question = questions[currentQuestion];

  // كل الإجابات الصحيحة
  const correctAnswers = question.answers
      .filter(a => a.correct)
      .map(a => a.text);

  for(let btn of buttons){

    btn.disabled = true;

    if(correctAnswers.includes(btn.innerText)){
      btn.style.background = "green";
      btn.style.boxShadow = "0px 0px 10px green";
    }else{
      btn.style.background = "red";
      btn.style.boxShadow = "0px 0px 10px red";
    }

    if(btn === button){
      btn.style.transform = "scale(1.2)";
    }
  }

  if(correct){
    score++;
  }

  nextQuestionBtn.style.display = "inline-block";
}
nextQuestionBtn.onclick = () => {

  if(!selected){
    quizWarning.style.display = "block";
    return;
  }

  currentQuestion++;

  if(currentQuestion < questions.length){
    showQuestion();
  } 
  else {

    quizContainer.style.display = "none";
    scoreDisplay.style.display = "block";
    finalSentence.style.display = "none";
    btn3.style.display = "inline-block";

    if(score == questions.length){
      scoreDisplay.innerHTML = `Your score: ${score} / ${questions.length} ❤️ Winner!`;
    } else {
      scoreDisplay.innerHTML = `Your score: ${score} / ${questions.length} ❤️`;
    }

    scoreDisplay.style.color = "white";
    scoreDisplay.style.textAlign = "center";
    scoreDisplay.style.fontFamily = "sans-serif";
    scoreDisplay.style.textShadow = "0px 0px 10px white";
    scoreDisplay.style.fontSize = "30px";
  }

};