const CD = window.CODING_DATA;
let cs = { paper: CD.papers[0].id, index: 0, selected: null, marked: false, answers: {} };
function cPaper(){ return CD.papers.find(p => p.id === cs.paper); }
function cQuestions(){ return cPaper().questions; }
function cCurrent(){ return cQuestions()[cs.index]; }
function cKey(q){ return cs.paper + '|' + q.id; }
function cShuffle(arr, seed){
  let a=[...arr]; let x=seed.split('').reduce((s,c)=>s+c.charCodeAt(0),0)||1;
  for(let i=a.length-1;i>0;i--){ x=(x*9301+49297)%233280; let j=Math.floor((x/233280)*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function renderCodingTabs(){
  const el=document.getElementById('codingTabs'); el.innerHTML='';
  CD.papers.forEach(p=>{ const b=document.createElement('button'); b.textContent=p.title; b.className=p.id===cs.paper?'active':''; b.onclick=()=>{cs.paper=p.id;cs.index=0;cs.selected=null;cs.marked=false;renderCodingAll();}; el.appendChild(b); });
}
function renderCodingList(){
  document.getElementById('codingPaperTitle').textContent=cPaper().title;
  const pdf=document.getElementById('codingPdfLink'); pdf.href=cPaper().pdf;
  const list=document.getElementById('codingList'); list.innerHTML='';
  cQuestions().forEach((q,i)=>{ const b=document.createElement('button'); b.className='coding-nav-btn '+(i===cs.index?'active':''); b.innerHTML=`<strong>${i+1}. ${q.skill}</strong><span>${q.topic}</span>`; b.onclick=()=>{cs.index=i; cs.selected=null; cs.marked=false; renderCodingQuestion(); renderCodingList();}; list.appendChild(b); });
}
function renderCodingQuestion(){
  const q=cCurrent(); const k=cKey(q); let saved=cs.answers[k];
  if(!saved){ saved={shuffled:cShuffle(q.options.map((o,i)=>({o,i})), q.id), selected:null, marked:false}; cs.answers[k]=saved; }
  cs.selected=saved.selected; cs.marked=saved.marked;
  const area=document.getElementById('codingQuestionArea');
  let html=`<div class="progress">${cPaper().title} / Coding question ${cs.index+1} of ${cQuestions().length}</div>
  <div class="q-meta"><span class="badge">${q.topic}</span><span class="badge">${q.skill}</span>${q.page?`<span class="badge">PDF page ${q.page}</span>`:''}</div>
  <pre class="code-box"><code>${escapeHtml(q.code)}</code></pre>
  <div class="coding-question"><strong>Question:</strong> ${q.question}</div>
  <div class="options">`;
  saved.shuffled.forEach((opt,di)=>{ let cls='option'; if(cs.selected===di) cls+=' selected'; if(cs.marked){ cls+=' locked'; if(opt.i===q.answer) cls+=' correct'; if(cs.selected===di && opt.i!==q.answer) cls+=' wrong'; } html+=`<button class="${cls}" data-idx="${di}"><strong>${String.fromCharCode(65+di)}.</strong> ${escapeHtml(opt.o)}</button>`; });
  html+=`</div><div class="controls"><button class="primary" id="cMark" ${cs.selected===null||cs.marked?'disabled':''}>Mark</button><button class="secondary" id="cNext">${cs.index===cQuestions().length-1?'Finish paper':'Next coding question'}</button><a class="ghost" style="text-decoration:none" target="_blank" href="${cPaper().pdf}${q.page?'#page='+q.page:''}">View source PDF</a></div>`;
  area.innerHTML=html;
  area.querySelectorAll('.option').forEach(btn=>btn.onclick=()=>{ if(cs.marked) return; cs.selected=Number(btn.dataset.idx); cs.answers[k].selected=cs.selected; renderCodingQuestion(); updateCodingScore(); });
  document.getElementById('cMark').onclick=markCoding;
  document.getElementById('cNext').onclick=nextCoding;
  renderAnswerPanel(); updateCodingScore();
}
function renderAnswerPanel(){
  const q=cCurrent(); const k=cKey(q); const a=cs.answers[k]; const panel=document.getElementById('codingAnswerArea');
  if(!a?.marked){ panel.innerHTML=`<h2>Worked answer</h2><div class="answer-placeholder"><p>Choose an answer and press <strong>Mark</strong>.</p><p>The worked explanation will appear here so the student can compare their thinking against the correct approach.</p></div>`; return; }
  const chosen=a.selected===null?'No answer':a.shuffled[a.selected].o; const correct=q.options[q.answer]; const ok=a.shuffled[a.selected]?.i===q.answer;
  panel.innerHTML=`<h2>${ok?'Correct':'Not quite'}</h2><p><strong>Your answer:</strong> ${escapeHtml(chosen)}</p><p><strong>Correct answer:</strong> ${escapeHtml(correct)}</p><h3>Worked steps</h3><ol class="step-list">${q.worked.map(s=>`<li>${escapeHtml(s)}</li>`).join('')}</ol><div class="fact"><strong>OCR fact</strong>${escapeHtml(q.fact)}</div><p class="small-note"><a href="${cPaper().pdf}${q.page?'#page='+q.page:''}" target="_blank">Open the original paper at this question</a></p>`;
}
function markCoding(){ const q=cCurrent(); const k=cKey(q); cs.answers[k].marked=true; cs.marked=true; renderCodingQuestion(); updateCodingScore(); }
function nextCoding(){ if(cs.index<cQuestions().length-1){ cs.index++; cs.selected=null; cs.marked=false; renderCodingList(); renderCodingQuestion(); } else { renderCodingSummary(); } }
function updateCodingScore(){ let total=0, score=0; CD.papers.forEach(p=>p.questions.forEach(q=>{ let a=cs.answers[p.id+'|'+q.id]; if(a?.marked){ total++; if(a.shuffled[a.selected]?.i===q.answer) score++; }})); document.getElementById('codingScore').textContent=`Score: ${score} / ${total}`; }
function renderCodingSummary(){
  let score=0, done=0; cQuestions().forEach(q=>{ let a=cs.answers[cKey(q)]; if(a?.marked){done++; if(a.shuffled[a.selected]?.i===q.answer) score++;} });
  document.getElementById('codingQuestionArea').innerHTML=`<div class="q-meta"><span class="badge">Paper complete</span></div><h2>${cPaper().title}</h2><p>You scored <strong>${score} / ${done}</strong> on this paper's coding practice.</p><div class="controls"><button class="primary" id="restartCodingPaper">Restart this paper</button><button class="secondary" id="reviewCodingPaper">Review mistakes</button></div>`;
  document.getElementById('codingAnswerArea').innerHTML=`<h2>Next step</h2><p>Use Review mistakes to focus on the exact code-reading skills that caused errors.</p>`;
  document.getElementById('restartCodingPaper').onclick=resetCodingPaper;
  document.getElementById('reviewCodingPaper').onclick=renderCodingReview;
}
function renderCodingReview(){
  const left=document.getElementById('codingQuestionArea'); const right=document.getElementById('codingAnswerArea');
  let items=[]; CD.papers.forEach(p=>p.questions.forEach(q=>{ const a=cs.answers[p.id+'|'+q.id]; if(a?.marked && a.shuffled[a.selected]?.i!==q.answer){ items.push({p,q,a}); }}));
  if(!items.length){ left.innerHTML='<div class="empty"><h2>No coding mistakes yet</h2><p>Incorrect coding answers will appear here for targeted practice.</p></div>'; right.innerHTML='<h2>Review</h2><p>Nothing to review yet.</p>'; return; }
  let html='<h2>Coding mistakes</h2><div class="review-list">';
  items.forEach((it,idx)=>{ html+=`<article class="review-item"><h3>${idx+1}. ${it.p.title} – ${it.q.topic}</h3><p><strong>Question:</strong> ${it.q.question}</p><pre class="code-box"><code>${escapeHtml(it.q.code)}</code></pre><p><strong>Your answer:</strong> ${escapeHtml(it.a.shuffled[it.a.selected]?.o||'No answer')}</p><p><strong>Correct answer:</strong> ${escapeHtml(it.q.options[it.q.answer])}</p><p><a href="${it.p.pdf}${it.q.page?'#page='+it.q.page:''}" target="_blank">View source PDF</a></p></article>`; });
  html+='</div>'; left.innerHTML=html;
  right.innerHTML='<h2>OCR facts to remember</h2>'+items.map(it=>`<div class="fact"><strong>${it.q.skill}</strong>${escapeHtml(it.q.fact)}</div>`).join('');
}
function resetCodingPaper(){ cQuestions().forEach(q=>delete cs.answers[cKey(q)]); cs.index=0; cs.selected=null; cs.marked=false; renderCodingAll(); }
function resetAllCoding(){ cs.answers={}; cs.index=0; cs.selected=null; cs.marked=false; renderCodingAll(); }
function escapeHtml(s){ return String(s).replace(/[&<>]/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[ch])); }
function renderCodingAll(){ renderCodingTabs(); renderCodingList(); renderCodingQuestion(); updateCodingScore(); }
document.getElementById('codingReviewBtn').onclick=renderCodingReview;
document.getElementById('codingResetBtn').onclick=resetAllCoding;
renderCodingAll();
