let gender=null;
let current=0;

let scores={
A:0,
B:0,
C:0,
D:0,
E:0
};

function showGenderSelect(){

document.getElementById("app").innerHTML=`

<h2>ラブランゲージ診断</h2>

<p>
あなたの愛情の感じ方を診断します。  
30問の質問に答えてください。
</p>

<button onclick="start('male')">男性</button>
<button onclick="start('female')">女性</button>

`;

}

function start(g){

gender=g;
current=0;

scores={A:0,B:0,C:0,D:0,E:0};

showQuestion();

}

function showQuestion(){

const list = gender==="male"?maleQuestions:femaleQuestions;

const q=list[current];

const progress=Math.floor((current/list.length)*100);

document.getElementById("app").innerHTML=`

<div class="progress">
<div class="progress-bar" style="width:${progress}%"></div>
</div>

<h3>Q${current+1} / ${list.length}</h3>

<button class="option" onclick="answer('${q.a.type}')">
${q.a.text}
</button>

<button class="option" onclick="answer('${q.b.type}')">
${q.b.text}
</button>

`;

}

function answer(type){

scores[type]++;

current++;

const list = gender==="male"?maleQuestions:femaleQuestions;

if(current>=list.length){

showResult();

}else{

showQuestion();

}

}

function showResult(){

const desc={

A:"言葉タイプ：励まし・感謝・愛情の言葉で愛を感じる",
B:"時間タイプ：一緒に過ごす時間で愛を感じる",
C:"贈り物タイプ：プレゼントで愛を感じる",
D:"奉仕タイプ：手伝いなどの行動で愛を感じる",
E:"スキンシップタイプ：触れ合いで愛を感じる"

};

const labels={
A:"言葉",
B:"時間",
C:"贈り物",
D:"奉仕",
E:"スキンシップ"
};

let ranking=Object.entries(scores)
.sort((a,b)=>b[1]-a[1]);

let html=`

<h2>診断結果</h2>

<canvas id="chart"></canvas>

<h3>ランキング</h3>

`;

ranking.forEach((r,i)=>{

html+=`

<div class="result-card">

<strong>${i+1}位 ${labels[r[0]]}</strong><br>

${desc[r[0]]}<br>

スコア：${r[1]}

</div>

`;

});

document.getElementById("app").innerHTML=html;

drawChart();

}

function drawChart(){

const ctx=document.getElementById("chart");

new Chart(ctx,{
type:"radar",
data:{
labels:["言葉","時間","贈り物","奉仕","スキンシップ"],
datasets:[{
label:"診断結果",
data:[
scores.A,
scores.B,
scores.C,
scores.D,
scores.E
]
}]
},
options:{
scales:{
r:{
beginAtZero:true,
max:12
}
}
}
});

}

showGenderSelect();
