const capturas = [
  [
    [
      1,
      "Vista superior do gabarito. Compare a distância entre as pontas das asas com a envergadura de referência de 12,8 m."
    ],
    [
      2,
      "Vista de perfil. Use o eixo longitudinal para comparar a posição do nariz e a altura da empenagem."
    ]
  ],
  [
    [
      1,
      "Extrusão dos anéis. Observe como a largura e a altura variam entre as seções da fuselagem."
    ],
    [
      2,
      "Após a suavização, confira a transição entre seções e a abertura longitudinal da cabine."
    ]
  ],
  [
    [
      1,
      "Seções extrudadas da raiz até a ponta. A corda e a espessura diminuem ao longo da asa."
    ],
    [
      2,
      "Aileron separado e defletido, em laranja. Inspecione a folga entre o nariz da peça e a asa."
    ]
  ],
  [
    [
      0,
      "Antes dos bancos, confira o piso, as três anteparas e os tubos das laterais."
    ],
    [
      2,
      "Os dois bancos em tandem ocupam os espaços entre as anteparas. Confira a posição dos comandos e dos pedais."
    ]
  ],
  [
    [
      1,
      "Painel isolado. Compare a profundidade dos aros, as marcações e os ponteiros dos dez mostradores."
    ],
    [
      2,
      "Seção móvel recuada no trilho. O vidro em aramado permite conferir a sobreposição dos arcos."
    ]
  ],
  [
    [
      0,
      "Primeiro conjunto radial. Observe a separação entre o cárter, o cilindro e as aletas."
    ],
    [
      2,
      "Os nove conjuntos distribuídos em torno do cárter e as pás torcidas formam o conjunto visto pela câmera."
    ]
  ],
  [
    [
      1,
      "Roda isolada. Compare o perfil de revolução do pneu, o rebaixo do aro e a posição do cubo."
    ],
    [
      2,
      "Poço em corte. Identifique a haste telescópica e os pivôs dos braços antes de ensaiar o recolhimento."
    ]
  ]
];
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
function recurso(caminho) { return caminho; }
function passoIlustrado(texto, indice, aula) {
 const exemplos = capturas[aula] || [];
 const figuras = exemplos.map(([passo, legenda], ordem) => {
  if (indice !== passo) return '';
  const arquivo = recurso('assets/m' + (aula + 1) + (ordem === 0 ? 'a' : 'b') + '.jpg');
  return '<figure class="step-image"><button type="button" class="zoom" aria-label="Ampliar captura do Blender" data-img="' + arquivo + '"><img src="' + arquivo + '" alt="' + legenda + '"><span>Ampliar captura</span></button><figcaption>' + legenda + '</figcaption></figure>';
 }).join('');
 return '<li>' + texto + figuras + '</li>';
}
function route(){
 const match = location.hash.match(/^#aula-(\d+)$/), n = match?Number(match[1])-1:-1;
 const reader=el('reader'); if(n<0||n>=aulas.length){if(reader.open)reader.close(); return}
 atual=n; const [etapa,titulo,resumo,...passos]=aulas[n]; const check=passos.pop();
 el('meta').textContent=etapa+' / Aula '+(n+1); el('article').innerHTML='<h2 id="lesson-title">'+titulo+'</h2><p>'+resumo+'</p><ol>'+passos.map((s,i)=>passoIlustrado(s,i,n)).join('')+'</ol><div class="check"><strong>Confira na sua cena</strong>'+check+'</div>';
 if (n < capturas.length) {
  const link = document.createElement('a');
  link.className = 'scene-download';
  link.href = recurso('cenas/t6-m' + (n + 1) + '.blend');
  link.download = 'T6-Texan-aula-' + (n + 1) + '.blend';
  link.textContent = 'Baixar cena da aula (.blend)';
  el('article').append(link);
 }
 el('prev').disabled=n===0;el('next').disabled=n===aulas.length-1; el('done').textContent=completas.has(n)?'✓ Concluída · desfazer':'Marcar como concluída';
 if(!reader.open)reader.showModal(); reader.scrollTop=0;
}
el('done').onclick=()=>{if(completas.has(atual))completas.delete(atual);else completas.add(atual);try{localStorage.setItem(storageKey,JSON.stringify([...completas]))}catch{} renderLista();route()};
el('prev').onclick=()=>location.hash='aula-'+atual;el('next').onclick=()=>location.hash='aula-'+(atual+2);
el('close').onclick=()=>location.hash='programa';el('reader').oncancel=e=>{e.preventDefault();location.hash='programa'};
window.addEventListener('hashchange',route);renderLista();route();

el('article').addEventListener('click', event => {
 const botao = event.target.closest('button[data-img]');
 if (!botao) return;
 el('zoom-image').src = botao.dataset.img;
 el('zoom-image').alt = botao.querySelector('img').alt;
 el('zoom-view').showModal();
});
el('zoom-close').onclick = () => el('zoom-view').close();
