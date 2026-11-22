const aulas = [
  [
    "Modelagem",
    "Referências e escala",
    "Comece com um gabarito que continue útil até o rig.",
    "Em Scene Properties → Units, escolha Metric e Unit Scale 1. Oriente o nariz para +Y, a asa direita para +X e o topo para +Z. Crie coleções REF, EXTERIOR, INTERIOR, RIG e SET.",
    "Em vista superior ortográfica, use Shift+A → Image → Reference para uma planta da variante escolhida. Ajuste a envergadura para cerca de 12,8 m usando a ferramenta Measure entre as pontas. Trate a fotografia do curso como referência de volume e pintura.",
    "Importe perfil e frente em suas vistas ortográficas. Alinhe primeiro eixo da hélice, raiz da asa e centro da fuselagem. Em Object Data Properties das referências, reduza Opacity para 0,35. Bloqueie a seleção de REF no Outliner.",
    "Faça capturas em vista superior, lateral e frontal. Se a planta coincide nas pontas mas erra na raiz, confira perspectiva e variante antes de escalar partes isoladas."
  ],
  [
    "Modelagem",
    "Fuselagem por seções",
    "Construa a pele externa com controle de silhueta.",
    "Adicione um círculo de 16 vértices, gire 90° em X e aplique a rotação. Em Edit Mode, apague a metade de X negativo preservando os vértices centrais. Adicione Mirror em X com Clipping e Merge, seguido de Subdivision Surface no nível 2.",
    "No perfil, posicione o primeiro arco atrás da carenagem. Extrude com E, Y em direção à cauda, criando anéis nas mudanças de volume. Ajuste S, X na planta e S, Z no perfil. Mova o topo e a barriga separadamente para evitar seções perfeitamente elípticas.",
    "Marque a abertura da cabine seguindo arestas longitudinais. Apague apenas as faces internas com X → Faces. Acrescente um loop de suporte ao redor da borda e um Solidify depois do Subdivision, com espessura inicial de 0,003 m.",
    "Gire uma Area Light larga sobre a pele. O reflexo deve atravessar as seções sem ondulações. Se houver um vinco no centro, alinhe os vértices da emenda em X = 0."
  ],
  [
    "Modelagem",
    "Asas, empenagem e superfícies móveis",
    "Deixe as dobradiças prontas para receber os pivôs.",
    "Desenhe o contorno fechado de uma seção da asa com oito a doze vértices no plano YZ. Concentre pontos no bordo de ataque e mantenha duas arestas próximas no bordo de fuga.",
    "Extrude a seção ao longo de X e adapte corda, altura e posição às vistas. Modele a transição da raiz com seções adicionais. Use Mirror para a asa oposta e um Subdivision de nível 2.",
    "Corte os limites dos ailerons e flapes com Knife. Separe as faces com P → Selection, feche as laterais e forme um nariz arredondado em cada peça. Modele o estabilizador, o profundor, a deriva e o leme com o mesmo método.",
    "Gire temporariamente cada superfície pela linha das dobradiças. Observe a fenda de perto e de longe. Remova a rotação de teste antes de continuar."
  ],
  [
    "Modelagem",
    "Interior das duas cabines",
    "Construa profundidade real sob o canopy.",
    "Duplique um trecho interno da fuselagem e separe-o. Em Edit Mode, reduza as seções para dentro e recorte-as sob o peitoril. Crie piso e anteparas dianteira, central e traseira, conferindo o espaço com a cabine aberta.",
    "Modele um banco a partir de um plano. Extrude a base para formar o encosto e modele as laterais elevadas. Use Solidify de 0,003 m e Bevel de 0,004 m com três segmentos. Duplique para a cabine traseira e ajuste pela referência.",
    "Para a estrutura tubular, crie curvas Bézier 3D. Em Geometry → Bevel, use Depth inicial 0,012 m e Resolution 3. Modele manches, pedais e alavancas em objetos separados. Posicione os pivôs nas articulações visíveis.",
    "Coloque uma câmera provisória à altura dos olhos em cada banco. As laterais, a antepara e o fundo devem fechar o enquadramento mesmo com o canopy aberto."
  ],
  [
    "Modelagem",
    "Painel e canopy deslizante",
    "Crie instrumentos com profundidade e vidro separado da armação.",
    "Modele a silhueta do painel a partir de um plano e dê espessura com Solidify. Para um mostrador, crie um cilindro de 48 lados com o eixo normal ao painel. Faça Inset e extrude a face para dentro para formar o aro.",
    "Adicione um disco escuro no fundo, marcas claras e um ponteiro com origem no centro. Use Alt+D nos aros e mantenha os ponteiros independentes. Ajuste a disposição pela foto frontal do cockpit.",
    "Trace as seções do canopy sobre a abertura, conecte os arcos com Bridge Edge Loops e suavize. Separe painéis fixos e móveis. Duplique as arestas da armação, converta-as em curvas com bevel e dê ao vidro espessura inicial de 0,004 m.",
    "Desloque o conjunto móvel ao longo do trilho. Em vista lateral, confira a sobreposição das seções e a folga dos bancos durante todo o trajeto."
  ],
  [
    "Modelagem",
    "Motor radial e hélice",
    "Dê profundidade à abertura frontal da carenagem.",
    "Modele o cárter em torno do eixo Y. Faça um cilindro apontando para +Z e empilhe aletas com Array ao longo de Z. Use peças simples para a tampa superior e tubos em curva para os detalhes visíveis.",
    "No centro do cárter, crie um Empty. Numere o primeiro cilindro e seus detalhes como um conjunto. Com o cursor no centro e Pivot em 3D Cursor, duplique o conjunto e gire 40° em Y. Repita até formar nove cilindros.",
    "Modele uma pá com seções transversais. Alargue o perfil no meio e reduza a espessura na ponta. Gire cada seção gradualmente no Edit Mode para criar a torção visual. Duplique a pá ao redor do cubo acompanhando a hélice da referência.",
    "Em vista frontal de três quartos, a luz deve separar carenagem, aletas, cubo e pás. Reduza segmentos das aletas se elas ficarem menores que um pixel no plano final."
  ],
  [
    "Modelagem",
    "Trem de pouso e poços",
    "Modele as peças que aparecem durante o recolhimento.",
    "Desenhe o contorno do poço na face inferior da asa. Recorte a abertura e extrude a borda para dentro, formando as paredes. Feche o fundo e acrescente nervuras visíveis com tiras de malha.",
    "Modele o pneu por revolução de um perfil com Spin de 360° sobre o eixo da roda. Una a emenda por distância e modele aro e cubo separadamente. Para a perna, use cilindros concêntricos para camisa e haste cromada.",
    "Separe garfo, roda, braços articulados e carenagens conforme a foto da sua variante. Coloque um Empty em cada pino visível. Faça também a bequilha e separe a rotação da roda do giro do garfo.",
    "Teste as poses estendida, intermediária e recolhida em Wireframe. O pneu precisa caber no poço inclusive no meio do movimento."
  ],
  [
    "Textura",
    "UV e densidade de detalhe",
    "Distribua a resolução conforme a distância da câmera.",
    "Aplique escala nos objetos rígidos antes de abrir UV. Na fuselagem, faça uma costura longitudinal na barriga e anéis nas transições escondidas. Nas asas, marque a abertura pelo bordo de fuga.",
    "Use U → Unwrap. Selecione as ilhas de peças que compartilham material e rode UV → Average Islands Scale e Pack Islands. Faça um conjunto para o exterior e outro para as cabines.",
    "Crie uma imagem UV Grid e ligue Image Texture → Color ao Base Color. Inspecione com uma câmera próxima ao painel. Aumente a área UV dos instrumentos se as marcações ficarem ilegíveis no enquadramento.",
    "Os quadrados devem manter proporção na raiz da asa e ao redor da cabine. Evite sobrepor UV de números ou inscrições que precisam ser lidos dos dois lados."
  ],
  [
    "Textura",
    "Alumínio, tinta e desgaste local",
    "Monte um shader em camadas controlado por uma máscara pintada.",
    "Em Shader Editor, ligue dois Principled BSDF a um Mix Shader e a saída ao Material Output → Surface. No primeiro Principled, use tinta, Metallic 0 e Roughness 0,38. No segundo, alumínio, Metallic 1 e Roughness 0,27.",
    "Crie a imagem Desgaste em preto, Color Space Non-Color. Ligue Image Texture → Color ao Fac do Mix Shader. Em Texture Paint, pinte branco nas áreas de metal exposto, sobretudo degraus, bordas da abertura e fixadores. Salve a imagem em Image → Save As.",
    "Para microvariação, conecte Texture Coordinate → Object a Noise Texture (Scale 160, Detail 2), Fac a Bump → Height e Normal aos dois shaders. Comece com Strength 0,08 e Distance 0,00015 m. Use uma ColorRamp adicional para restringir a variação de roughness.",
    "Faça um render próximo e outro de corpo inteiro. O alumínio deve aparecer em regiões de contato. Se a superfície parecer pedra, diminua primeiro a distância do Bump."
  ],
  [
    "Textura",
    "Rebites, inscrições e vidro",
    "Reserve geometria para o detalhe que afeta a silhueta.",
    "Crie um rebite baixo com um pequeno domo. Para uma fileira reta, use Array com Constant Offset na direção da chapa. Para uma faixa curva, aplique Curve após o Array, com as origens alinhadas e o mesmo Deform Axis.",
    "Projete inscrições com uma segunda UV. Ligue o Alpha do PNG ao Factor de um Mix Color, a tinta de base em A e a cor da inscrição em B. Ligue Result ao Base Color do Principled da tinta.",
    "No vidro fechado, use Principled com Transmission Weight 1, IOR 1,45 e Roughness 0,04. Para borracha do pneu, Metallic 0 e Roughness inicial 0,65. Varie a rugosidade no piso de contato.",
    "Confira inscrições dos dois lados, legibilidade dos ponteiros e reflexos do canopy contra um fundo escuro. Corrija normais invertidas com Shift+N no Edit Mode."
  ],
  [
    "Rigging",
    "Hierarquia e controles de voo",
    "Anime cada superfície a partir de um painel de controles.",
    "Crie um Empty chamado CTRL_AVIAO. Parenteie fuselagem e controles a ele com Object (Keep Transform). Para cada peça móvel, selecione dois pontos da dobradiça, coloque o cursor no centro e use Object → Set Origin → Origin to 3D Cursor.",
    "Crie um Empty orientado a cada dobradiça com seu eixo X local ao longo da linha dos pinos. Parenteie a peça ao Empty mantendo a transformação. Adicione no CTRL_AVIAO propriedades roll, pitch e yaw com intervalo −1 a 1, e flap com intervalo 0 a 1.",
    "No canal local de rotação X do Empty do aileron, use Add Driver. Crie uma variável v do tipo Single Property apontando para CTRL_AVIAO com caminho [\"roll\"]. Use expressão v*0.30 e sinal oposto do outro lado quando os eixos locais tiverem o mesmo sentido. Repita para profundor, leme e flapes com suas propriedades.",
    "Teste −1, 0 e 1 para cada canal. Os ailerons devem girar em sentidos opostos e os flapes no mesmo sentido. As amplitudes aqui são poses artísticas em radianos."
  ],
  [
    "Rigging",
    "Trem, rodas e amortecedores",
    "Construa um rig de recolhimento que aceite correções de trajetória.",
    "Crie os controles PIVO_PERNA, HASTE e EIXO_RODA sobre as articulações. Monte a hierarquia CTRL_AVIAO → PIVO_PERNA → HASTE → EIXO_RODA. A malha do pneu acompanha EIXO_RODA. A haste desliza no próprio eixo.",
    "Adicione a propriedade trem entre 0 e 1. Use um driver no pivô com expressão v*a, substituindo a pelo ângulo em radianos medido entre as duas poses na sua malha. Para o outro lado, confira o sinal em vista frontal.",
    "Modele a articulação telescópica com duas partes sobrepostas. Na camisa, adicione Damped Track apontando o eixo longitudinal para um Empty no ponto móvel. Faça a haste mirar um alvo no ponto fixo. Parenteie os alvos aos pivôs, fora das peças que recebem as constraints.",
    "No Graph Editor, confira a abertura das peças nos valores 0, 0,25, 0,5, 0,75 e 1. Para rolar sem escorregar em linha reta, use no eixo da roda a rotação em radianos igual à distância percorrida dividida pelo raio visual do pneu."
  ],
  [
    "Rigging",
    "Cabine, comandos e hélice",
    "Sincronize os mecanismos vistos no close.",
    "Parenteie vidro e armação móveis a CTRL_CANOPY. Crie a propriedade canopy entre 0 e 1 e um driver na translação local no eixo do trilho. Use v*d, substituindo d pela distância de abertura medida no seu modelo.",
    "Ligue o manche aos controles pitch e roll em dois eixos locais. Crie dois pivôs para os pedais e use a mesma variável yaw com sinais opostos. Nos instrumentos, use um driver na rotação do ponteiro e calibre por duas marcas visíveis no mostrador.",
    "Parenteie cubo e pás a CTRL_HELICE com origem no eixo do motor. Escolha Euler XYZ e insira chaves no canal Y local. Use o Graph Editor para controlar a aceleração e depois um segmento linear para o giro constante.",
    "Anime apenas o controle central de cada sistema e percorra a cena pela câmera da cabine. Se uma peça girar duas vezes, confira se ela recebe a mesma transformação por um driver e por um pai."
  ],
  [
    "Simulação",
    "Cintos de tecido sobre os bancos",
    "Faça os cintos assentarem sobre o assento e reagirem ao movimento.",
    "Crie cada cinta como uma tira de quads de aproximadamente 0,05 m de largura. Use três a cinco vértices na largura e cortes regulares no comprimento. Aplique escala e crie o Vertex Group FIXO nas extremidades presas, com peso 1.",
    "Adicione Cloth e em Shape → Pin Group selecione FIXO. Comece com Quality Steps 8. Atribua Collision a uma cópia simples do assento. Posicione a cinta acima dele no primeiro frame, sem interseção.",
    "Parenteie cinta e proxy ao conjunto da cabine. Coloque Solidify de 0,002 m depois de Cloth. Desative a visibilidade do proxy no render e preserve sua avaliação para colisão. Simule a partir do primeiro frame e dê alguns quadros de repouso antes da tomada.",
    "Se o cinto atravessar o banco, confira escala, distância de colisão e pose inicial. Salve a cena, ajuste o intervalo em Cloth → Cache e faça Bake depois de aprovar a animação do avião."
  ],
  [
    "Simulação",
    "Poeira na pista com Geometry Nodes",
    "Crie uma simulação secundária localizada junto às rodas.",
    "Num objeto separado e com transformação identidade, crie um modificador Geometry Nodes. Adicione uma Simulation Zone. Antes dela, use Mesh Line com Count 1 e Mesh to Points para criar uma partícula por avaliação. Posicione a linha com Object Info de um Empty junto ao pneu, em espaço Relative.",
    "Dentro da zona, conecte a geometria anterior a Set Position. Para o Offset, use Combine XYZ (0, −0,45, 0,32) e Vector Math → Scale, usando Delta Time no fator. Junte os pontos deslocados e o novo ponto com Join Geometry e envie ao Simulation Output.",
    "Controle o nascimento com um Switch do tipo Geometry antes do Join. Use Scene Time → Frame e duas comparações para permitir emissão só no intervalo do táxi. Depois da zona use Points to Volume, Radius 0,12 m e Voxel Amount 96 como ponto de partida.",
    "Atribua material com Principled Volume ligado a Material Output → Volume. Use o atributo de densidade do volume e um tom de terra claro. Teste 24 quadros. A trilha deve ficar no espaço da pista depois que a roda passa. Limite a tomada para evitar acúmulo infinito de pontos."
  ],
  [
    "Animação",
    "Blocking de três tomadas",
    "Organize uma sequência de oito segundos a 24 fps.",
    "Em Output Properties, defina 24 fps e frames 1–192. Nos frames 1, 49 e 121, crie marcadores. Posicione três câmeras e vincule cada uma ao marcador com Ctrl+B na Timeline, selecionando antes a câmera correspondente.",
    "Frames 1–48: close da cabine. Anime a abertura do canopy pelo controle e uma pequena resposta do cinto. Frames 49–120: plano lateral de táxi, avião percorrendo uma distância conhecida e rotação das rodas derivada desse deslocamento.",
    "Frames 121–192: crie um plano separado em voo de apresentação, com uma leve inclinação do conjunto e recolhimento do trem. Use poses-chave para começo, meio e fim. Mantenha os deslocamentos entre os planos fora dos intervalos de simulação ou simule cada plano em uma cena própria.",
    "Use Viewport Render Animation em baixa resolução. Confira se os cortes deixam visíveis a cabine, o contato pneu–pista e o arco de recolhimento. Aprove o ritmo antes de refazer os caches finais."
  ],
  [
    "Animação",
    "Curvas, câmera e leitura do movimento",
    "Refine a mecânica e prepare os planos para motion blur.",
    "No Graph Editor, use Bezier com Auto Clamped no canopy e no trem. Para a hélice a velocidade constante, selecione as chaves do trecho e escolha T → Linear. Alongue a rotação acumulando voltas no canal Euler.",
    "Comece com 65 mm para o close da cabine, 45 mm no táxi e 85 mm no voo. Posicione um Empty como alvo de foco no aro do painel para o primeiro plano. Em Camera → Depth of Field, escolha o Empty e comece em f/5,6.",
    "Ative Motion Blur nas configurações de render e comece com Shutter 0,35. Renderize um quadro com a hélice girando e outro parado. Ajuste o shutter pela extensão do rastro e preserve o contorno da fuselagem.",
    "Compare quatro quadros em sequência. Se a roda parecer deslizar, revise distância e raio antes de mexer na câmera. Se a hélice parecer parada, confira se a rotação realmente varia dentro do intervalo do shutter."
  ],
  [
    "Render",
    "Luz, passes e entrega final",
    "Exporte uma sequência recuperável e finalize o filme.",
    "Em Cycles, escolha AgX no Color Management. Monte uma Area Light grande lateral para desenhar a fuselagem e um preenchimento mais fraco do lado da cabine. Ajuste a rotação da luz observando o reflexo na chapa e a leitura dos bancos.",
    "Faça testes a 50% de 1920 × 1080 com 32 samples. Na RTX com 8 GB, habilite OptiX em Preferences → System se disponível e GPU Compute na cena. Se faltar memória, reduza texturas fora de quadro e instancie rebites repetidos.",
    "Para o final, comece em 128 samples, Noise Threshold 0,02 e Denoise. Ative Cryptomatte Object e Mist no View Layer se quiser máscaras e profundidade. Exporte OpenEXR Multilayer, Float Half, para uma pasta exclusiva da sequência.",
    "Renderize primeiro os frames 1, 49, 121 e 192. Confira vidro, grão, interseções, textura perdida e cache. Depois use Render Animation. No Video Sequencer de uma cena de edição, importe a sequência com o tratamento de cor adequado e exporte FFmpeg Video → MPEG-4 → H.264 a 24 fps. Confira os oito segundos completos."
  ]
];
