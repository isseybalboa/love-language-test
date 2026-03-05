let gender = null;
let current = 0;

let scores = {
A:0,
B:0,
C:0,
D:0,
E:0
};

function start(g){
gender = g;
current = 0;
showQuestion();
}

function showGenderSelect(){

document.getElementById("app").innerHTML = `
<h2>ラブランゲージ診断</h2>

<p>
各組の設問を読んで、あなたの希望・要望をよりよく表現していると思うほうを選んでください。
</p>

<button onclick="start('male')">男性</button>
<button onclick="start('female')">女性</button>
`;
}

function showQuestion(){

const list = gender === "male" ? maleQuestions : femaleQuestions;
const q = list[current];

document.getElementById("app").innerHTML = `

<h3>Q${current+1}</h3>

<button onclick="answer('${q.a.type}')">
${q.a.text}
</button>

<button onclick="answer('${q.b.type}')">
${q.b.text}
</button>

`;
}

function answer(type){

scores[type]++;

current++;

const list = gender === "male" ? maleQuestions : femaleQuestions;

if(current >= list.length){
showResult();
}else{
showQuestion();
}

}

function showResult(){

const desc = {

A:"言葉タイプ：励ましや感謝の言葉で愛情を感じる",
B:"時間タイプ：一緒に過ごす時間で愛情を感じる",
C:"贈り物タイプ：プレゼントで愛情を感じる",
D:"奉仕タイプ：手伝いや行動で愛情を感じる",
E:"スキンシップタイプ：触れ合いで愛情を感じる"

};

let html = "<h2>診断結果</h2>";

for(let key in scores){

html += `
<p>
${key} : ${scores[key]}<br>
${desc[key]}
</p>
`;

}

document.getElementById("app").innerHTML = html;

}

showGenderSelect();
