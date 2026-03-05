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

