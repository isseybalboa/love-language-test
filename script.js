diff --git a/script.js b/script.js
index 2ca0401d643566f44fd5c49eaa4daf8f7b9c17e0..b44caf69db7eeb0fc13bf90944d76f739b32c682 100644
--- a/script.js
+++ b/script.js
@@ -12,51 +12,68 @@ E:0
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
 
-showQuestion();
+showIntro();
+
+}
+
+function showIntro(){
+
+document.getElementById("app").innerHTML=`
+
+<h2>診断の進め方</h2>
+
+<p>
+各組の設問を読んで、あなたの希望・要望をよりよく表現していると思うほうの文章を選んでください。
+なるべくリラックスした環境でテストし、あわてて終わらせることは避けてください。
+</p>
+
+<button onclick="showQuestion()">次へ</button>
+
+`;
 
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
