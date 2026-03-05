let scores={
word:0,
time:0,
gift:0,
service:0,
touch:0
};

let current=0;

function answer(type){
scores[type]++;
current++;

if(current>=questions.length){
showResult();
}else{
showQuestion();
}
}

function showQuestion(){
const q=questions[current];

document.getElementById("app").innerHTML=`
<h2>${q.q}</h2>
<button onclick="answer('${q.a.type}')">${q.a.text}</button>
<button onclick="answer('${q.b.type}')">${q.b.text}</button>
`;
}

function showResult(){
document.getElementById("app").innerHTML=`
<h2>結果</h2>
<p>言葉: ${scores.word}</p>
<p>時間: ${scores.time}</p>
<p>贈り物: ${scores.gift}</p>
<p>奉仕: ${scores.service}</p>
<p>スキンシップ: ${scores.touch}</p>
`;
}

showQuestion();
