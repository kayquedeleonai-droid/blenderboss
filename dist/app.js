const el = id => document.getElementById(id);
const etapas = [...new Set(aulas.map(a => a[0]))];
const storageKey = 'blenderboss:texan:progresso:v1';
let completas = new Set();
try { const saved = JSON.parse(localStorage.getItem(storageKey)); if (Array.isArray(saved)) completas = new Set(saved.filter(i => Number.isInteger(i) && i >= 0 && i < aulas.length)); } catch {}
let filtro = 'Todas', atual = 0;
function renderLista(){
 el('filters').replaceChildren();
 for (const etapa of ['Todas', ...etapas]){
  const b = document.createElement('button'); b.textContent = etapa; b.setAttribute('aria-pressed', String(etapa === filtro));
  b.onclick = () => { filtro = etapa; renderLista(); [...el('filters').children].find(x => x.textContent === etapa).focus(); }; el('filters').append(b);
 }
 el('list').replaceChildren();
 aulas.forEach(([etapa,titulo,resumo], i) => {
  if(filtro !== 'Todas' && filtro !== etapa) return;
  const a = document.createElement('a'); a.className = 'row'; a.href = '#aula-' + (i+1);
  a.innerHTML = '<span class="number">'+String(i+1).padStart(2,'0')+'</span><div><strong>'+titulo+'</strong><small>'+resumo+'</small></div><span class="badge">'+(completas.has(i)?'✓ Concluída':etapa)+'</span>'; el('list').append(a);
 });
 el('status').textContent = completas.size+' de '+aulas.length+' aulas concluídas'; el('progress').max=aulas.length; el('progress').value=completas.size;
 const seguinte=aulas.findIndex((_,i)=>!completas.has(i)); el('start').href='#aula-'+(seguinte<0?1:seguinte+1); el('start').textContent=completas.size===aulas.length?'Revisar curso':completas.size?'Continuar curso':'Começar o curso';
}
function route(){
 const match = location.hash.match(/^#aula-(\d+)$/), n = match?Number(match[1])-1:-1;
 const reader=el('reader'); if(n<0||n>=aulas.length){if(reader.open)reader.close(); return}
 atual=n; const [etapa,titulo,resumo,...passos]=aulas[n]; const check=passos.pop();
 el('meta').textContent=etapa+' / Aula '+(n+1); el('article').innerHTML='<h2 id="lesson-title">'+titulo+'</h2><p>'+resumo+'</p><ol>'+passos.map(s=>'<li>'+s+'</li>').join('')+'</ol><div class="check"><strong>Confira na sua cena</strong>'+check+'</div>';
 el('prev').disabled=n===0;el('next').disabled=n===aulas.length-1; el('done').textContent=completas.has(n)?'✓ Concluída · desfazer':'Marcar como concluída';
 if(!reader.open)reader.showModal(); reader.scrollTop=0;
}
el('done').onclick=()=>{if(completas.has(atual))completas.delete(atual);else completas.add(atual);try{localStorage.setItem(storageKey,JSON.stringify([...completas]))}catch{} renderLista();route()};
el('prev').onclick=()=>location.hash='aula-'+atual;el('next').onclick=()=>location.hash='aula-'+(atual+2);
el('close').onclick=()=>location.hash='programa';el('reader').oncancel=e=>{e.preventDefault();location.hash='programa'};
window.addEventListener('hashchange',route);renderLista();route();
