/* ═══════════════════════════════════════
   ALT 60/40 — DICTIONARY DATA
   Multi-generacional: Gen Alpha, Gen Z, Millennials, Gen X, Boomers, Baby Boomers
   Actualizado julio 2026
   ═══════════════════════════════════════ */

const TERMS = [

  /* ─── GEN ALPHA / GEN Z (2024-2026) ─── */
  { id:'aura', word:'Aura', pron:'/áu-ra/', category:'slang', generation:'Gen Alpha / Gen Z', tags:['Gen Alpha','Gen Z','2023','Viral'], date:'~2023', popularity:95, emoji:'🌟',
    definition:'Energía o presencia carismática que proyecta una persona. "Tener aura" es verse increíble sin esfuerzo. "Perder aura" es hacer algo vergonzoso que te resta puntos de carisma. En 2025-2026 se usa "farmar aura" (acumular puntos).',
    example:'"Perdió 1000 puntos de aura cuando se cayó entrando al salón con todos mirando."',
    synonyms:['Presencia','Carisma','Energía'], related:['rizz','sigma'], platforms:['TikTok','Instagram'], formalTranslation:'Presencia carismática que proyecta una persona en su entorno' },

  { id:'rizz', word:'Rizz', pron:'/riz/', category:'slang', generation:'Gen Z', tags:['Gen Z','2022','Viral','Oxford 2023'], date:'~2022', popularity:99, emoji:'✨',
    definition:'Carisma natural para seducir o impresionar a alguien sin aparente esfuerzo. Palabra del Año Oxford 2023. "Unspoken rizz" es el nivel máximo: conquistas sin decir una sola palabra.',
    example:'"No hace nada especial y todos lo adoran — tiene un unspoken rizz impresionante."',
    synonyms:['Carisma','Encanto natural'], related:['aura','sigma','delulu'], platforms:['TikTok','Instagram','X'], formalTranslation:'Carisma natural para generar atracción en otros sin esfuerzo visible' },

  { id:'delulu', word:'Delulu', pron:'/de-lu-lu/', category:'slang', generation:'Gen Z', tags:['Gen Z','TikTok','2023','Popular'], date:'~2023', popularity:88, emoji:'🌙',
    definition:'Diminutivo de "delusional". Se usa con humor para describir a alguien con expectativas poco realistas, especialmente en lo amoroso. "Ser delulu" es casi un estado de vida.',
    example:'"Estoy completamente delulu pensando que me va a escribir después de 3 semanas de silencio."',
    synonyms:['Ilusa/o','Soñadora/or'], related:['main-character','rizz'], platforms:['TikTok','Instagram'], formalTranslation:'Tener expectativas poco realistas sobre una situación romántica' },

  { id:'sigma', word:'Sigma', pron:'/sig-ma/', category:'memes', generation:'Gen Alpha / Gen Z', tags:['Gen Alpha','Gen Z','2021'], date:'~2021', popularity:90, emoji:'🐺',
    definition:'Alguien independiente que no busca aprobación social. El "sigma" trabaja en silencio, obtiene resultados y no sigue jerarquías. Se popularizó con los "sigma male grindset" memes, primero irónicos y luego adoptados en serio.',
    example:'"Ese tipo es muy sigma: nunca sube nada a redes pero siempre está logrando cosas enormes."',
    synonyms:['Independiente','Lobo solitario'], related:['rizz','aura'], platforms:['YouTube','TikTok','Reddit'], formalTranslation:'Persona independiente que opera fuera de las jerarquías sociales convencionales' },

  { id:'skibidi', word:'Skibidi', pron:'/ski-bi-di/', category:'memes', generation:'Gen Alpha', tags:['Gen Alpha','2023','Viral'], date:'~2023', popularity:97, emoji:'🚽',
    definition:'Originado en la serie viral "Skibidi Toilet" de YouTube. Funciona como palabra comodín sin significado fijo — algo absurdo, raro o simplemente random. Es el idioma nativo de Gen Alpha.',
    example:'"Eso fue completamente skibidi, no tiene sentido pero me reí por 10 minutos."',
    synonyms:['Random','Absurdo'], related:['brainrot','gyat'], platforms:['YouTube','TikTok'], formalTranslation:'Algo absurdo o carente de sentido aparente' },

  { id:'brainrot', word:'Brainrot', pron:'/bréin-rot/', category:'memes', generation:'Gen Alpha / Gen Z', tags:['Gen Alpha','Gen Z','2023','Popular'], date:'~2023', popularity:94, emoji:'🧠',
    definition:'Contenido absurdo y repetitivo consumido en exceso que "pudre el cerebro". Se usa con humor para autocriticarse. Si entiendes todos los memes de Skibidi Toilet, probablemente tienes brainrot.',
    example:'"Llevo 4 horas en TikTok a las 3am. Esto es puro brainrot y no me arrepiento."',
    synonyms:['Adicción digital','Contenido basura'], related:['skibidi','npc'], platforms:['YouTube','TikTok'], formalTranslation:'Deterioro cognitivo humorístico por consumo excesivo de contenido banal' },

  { id:'the-ick', word:'The ick', pron:'/de-ik/', category:'slang', generation:'Gen Z', tags:['Gen Z','2022','Popular'], date:'~2022', popularity:89, emoji:'🤢',
    definition:'Ese momento en que algo que hace la persona que te gusta te genera repulsión instantánea e irreversible. Una vez que te da "the ick", la atracción desaparece completamente. No tiene cura.',
    example:'"Me dio el ick cuando lo vi corriendo raro detrás del bus. Ya no puedo verlo igual."',
    synonyms:['Repulsión','Me bajó','Ya no me gusta'], related:['delulu','ghostear'], platforms:['TikTok','Instagram'], formalTranslation:'Repulsión súbita e irreversible hacia alguien que antes te atraía' },

  { id:'era', word:'Era', pron:'/é-ra/', category:'slang', generation:'Gen Z', tags:['Gen Z','2023','Popular'], date:'~2023', popularity:93, emoji:'⭐',
    definition:'Estar en una "era" significa vivir una etapa de vida con identidad propia. Inspirado en las eras de Taylor Swift. Hoy en 2026 se usa para todo: "mi era de gym", "mi era de villana", "mi era de paz mental".',
    example:'"Estoy completamente en mi era de no contestar mensajes y priorizar mi paz interior."',
    synonyms:['Fase','Etapa','Período'], related:['delulu','main-character'], platforms:['TikTok','Instagram','X'], formalTranslation:'Atravesando una etapa de vida con identidad y propósito definidos' },

  { id:'caught-4k', word:'Caught in 4K', pron:'/kot in ful-kei/', category:'slang', generation:'Gen Z', tags:['Gen Z','2020','Viral'], date:'~2020', popularity:85, emoji:'📸',
    definition:'Ser pillado haciendo algo con evidencia irrefutable. "La cámara capturó todo." Se usa para exponer contradicciones, errores y momentos vergonzosos. La cultura del celular hizo que todo quede registrado.',
    example:'"Te vieron comprando McDonald\'s con la dieta activa. Caught in 4K, no hay defensa posible."',
    synonyms:['Pillado','En evidencia','Sin coartada'], related:['ratio','no-cap'], platforms:['TikTok','Instagram','X'], formalTranslation:'Ser descubierto en flagrante con evidencia irrefutable' },

  { id:'understood-assignment', word:'Understood the assignment', pron:'/an-dér-stud de a-sáin-ment/', category:'slang', generation:'Gen Z', tags:['Gen Z','2021','Viral'], date:'~2021', popularity:84, emoji:'📋',
    definition:'Literalmente "entendió el encargo". Elogio máximo: alguien hizo exactamente lo esperado de manera impecable. Si alguien dice esto de ti, lo hiciste perfecto.',
    example:'"Llegó al evento con el look exacto para la ocasión — clearly understood the assignment."',
    synonyms:['Lo entendió','Lo clavó','Llegó como se esperaba'], related:['slay','rizz'], platforms:['TikTok','Instagram','X'], formalTranslation:'Cumplió exactamente con lo esperado, de manera sobresaliente' },

  { id:'rent-free', word:'Rent free', pron:'/rent-frí/', category:'slang', generation:'Gen Z / Millennials', tags:['Gen Z','Millennials','2020'], date:'~2020', popularity:76, emoji:'🏠',
    definition:'Cuando alguien o algo "vive en tu cabeza rent free" significa que no puedes dejar de pensar en ello. Ocupas espacio mental sin pagar alquiler. Puede aplicarse a canciones, personas, momentos.',
    example:'"Esa canción vive en mi cabeza rent free desde hace tres semanas, la escucho sin querer."',
    synonyms:['No puedo dejar de pensar','Me obsesioné'], related:['delulu','main-character'], platforms:['X','TikTok'], formalTranslation:'Algo que ocupa tu mente constantemente de forma involuntaria' },

  { id:'pov', word:'POV', pron:'/pi-ou-vi/', category:'tiktok', generation:'Gen Z', tags:['Gen Z','TikTok','2020'], date:'~2020', popularity:95, emoji:'📹',
    definition:'Point Of View (punto de vista). Formato de contenido donde el espectador es el protagonista de la situación. "POV: tu mamá te llama" te pone a ti en la escena.',
    example:'"POV: llevas 6 horas jugando y tu mamá acaba de cortar el internet."',
    synonyms:['Perspectiva','Punto de vista'], related:['main-character','npc'], platforms:['TikTok','Instagram'], formalTranslation:'Desde la perspectiva del protagonista de la situación' },

  { id:'npc', word:'NPC', pron:'/en-pi-si/', category:'gaming', generation:'Gen Z / Millennials', tags:['Gen Z','Gaming','2022'], date:'~2022', popularity:80, emoji:'🤖',
    definition:'"Non-Playable Character": personaje no jugable de videojuegos. Se usa para alguien que actúa sin pensar, sigue a la masa sin criterio. En 2023 fue viral como formato de livestream donde streamers imitaban a NPCs.',
    example:'"Deja de actuar como NPC y da tu propia opinión por una vez."',
    synonyms:['Robot','Autómata'], related:['brainrot','sigma'], platforms:['X','TikTok','Reddit'], formalTranslation:'Persona que actúa mecánicamente sin criterio ni pensamiento crítico propio' },

  { id:'no-cap', word:'No cap', pron:'/no-kap/', category:'slang', generation:'Gen Z', tags:['Gen Z','2019','Popular'], date:'~2019', popularity:91, emoji:'🧢',
    definition:'"Sin mentira" / "en serio". "Cap" en slang significa mentira, por lo tanto "no cap" = "sin mentira / te lo juro". Una de las expresiones más usadas para dar énfasis a algo verdadero.',
    example:'"Este restaurante es el mejor que fui en mi vida, no cap, nunca volví al otro."',
    synonyms:['En serio','Te lo juro','Facts'], related:['lowkey','on-god'], platforms:['TikTok','Instagram','X'], formalTranslation:'Te lo aseguro, es completamente cierto y sin exageración' },

  { id:'slay', word:'Slay', pron:'/sléi/', category:'slang', generation:'Gen Z', tags:['Gen Z','2019'], date:'~2019 (cultura ballroom)', popularity:86, emoji:'💅',
    definition:'Expresión de aprobación total. Alguien que "slayó" lo hizo de manera excepcional. Viene de la cultura ballroom afroamericana de los 80s y fue masificado por Drag Race y RuPaul.',
    example:'"Ese look es un slay absoluto, deberías ir así siempre — te ves increíble."',
    synonyms:['Lo rompiste','Lo clavaste','Impresionante'], related:['aura','rizz'], platforms:['Instagram','TikTok','X'], formalTranslation:'Hiciste algo de manera excepcional y con gran estilo' },

  { id:'gyat', word:'Gyat', pron:'/yat/', category:'slang', generation:'Gen Alpha', tags:['Gen Alpha','2022'], date:'~2022', popularity:78, emoji:'😱',
    definition:'Interjección de asombro exagerado. Viene de "goddamn" pronunciado rápido en el slang de TikTok. Se usa para reaccionar ante algo impactante o inesperado.',
    example:'"¡Gyat! No puedo creer que sacó 7 sin haber ido a clase en todo el semestre."',
    synonyms:['¡Dios mío!','¡Wow!','¡No puede ser!'], related:['skibidi','brainrot'], platforms:['TikTok'], formalTranslation:'Expresión de asombro o sorpresa intensa ante algo inesperado' },

  { id:'main-character', word:'Main character', pron:'/méin-ká-rak-ter/', category:'tiktok', generation:'Gen Z', tags:['Gen Z','2021','TikTok'], date:'~2021', popularity:87, emoji:'🎬',
    definition:'Sentirte el protagonista de tu propia película. Tendencia donde las personas actúan como si su vida fuera una película épica, con música de fondo imaginaria y todo girando en torno a ellas.',
    example:'"Hoy me levanté con energía de main character: café en mano, look perfecto, todo salió bien."',
    synonyms:['Protagonista','Centro del universo'], related:['pov','delulu'], platforms:['TikTok','Instagram'], formalTranslation:'Sentirse protagonista central de la propia historia de vida' },

  { id:'ghostear', word:'Ghostear', pron:'/gos-te-ar/', category:'slang', generation:'Gen Z / Millennials', tags:['Gen Z','Millennials','2019'], date:'~2019', popularity:85, emoji:'👻',
    definition:'Desaparecer sin dar explicaciones. Dejar de responder mensajes abruptamente como si te convirtieras en un fantasma. Muy común en citas y amistades digitales.',
    example:'"Me ghosteó después de tres semanas hablando todos los días. Sin una sola palabra de despedida."',
    synonyms:['Desaparecer','Dejar en visto'], related:['the-ick','lowkey'], platforms:['WhatsApp','Instagram','Tinder'], formalTranslation:'Cesar toda comunicación con alguien sin dar ninguna explicación' },

  { id:'lowkey', word:'Lowkey', pron:'/lou-ki/', category:'slang', generation:'Gen Z / Millennials', tags:['Gen Z','Millennials','2018'], date:'~2018', popularity:79, emoji:'🤫',
    definition:'Algo que se hace o siente de manera discreta. "Lowkey me gustó" = aunque no lo admitiría públicamente. Su opuesto es "highkey" (de forma abierta y sin vergüenza).',
    example:'"Lowkey me gustó la película de terror aunque dije públicamente que era malísima."',
    synonyms:['En secreto','Discretamente','Un poco'], related:['no-cap','delulu'], platforms:['Instagram','X'], formalTranslation:'De manera discreta o sin querer reconocerlo públicamente' },

  { id:'cringe', word:'Cringe', pron:'/krinch/', category:'slang', generation:'Millennials / Gen Z', tags:['Gen Z','Millennials','2015'], date:'~2015', popularity:88, emoji:'😬',
    definition:'Algo que produce vergüenza ajena intensa. El equivalente moderno de "qué pena ajena". Puede aplicarse a personas, situaciones, contenido o comportamientos. Muy usado también por Millennials.',
    example:'"Vi el video donde intentó bailar en la reunión de trabajo. Fue tan cringe que tuve que cerrar la app."',
    synonyms:['Vergüenza ajena','Incómodo','Bochornoso'], related:['mid','ratio'], platforms:['YouTube','X','Reddit'], formalTranslation:'Algo que provoca vergüenza ajena o incomodidad intensa al observarlo' },

  { id:'mid', word:'Mid', pron:'/mid/', category:'slang', generation:'Gen Z', tags:['Gen Z','2021'], date:'~2021', popularity:75, emoji:'😐',
    definition:'Mediocre. Del montón. Ni bueno ni malo — justo en el medio sin nada especial. Un insulto suave pero definitivo.',
    example:'"La película nueva estuvo mid, no la recomendaría pero tampoco diría que es mala."',
    synonyms:['Mediocre','Normalito','Del montón'], related:['cringe','ratio'], platforms:['X','TikTok'], formalTranslation:'De calidad mediocre, sin aspectos positivos ni negativos destacables' },

  { id:'ratio', word:'Ratio', pron:'/réi-shio/', category:'twitter', generation:'Millennials / Gen Z', tags:['Millennials','Gen Z','2017'], date:'~2017', popularity:73, emoji:'📊',
    definition:'En X/Twitter, cuando una respuesta tiene más likes que el tweet original. Si te "ratean" tu opinión fue rechazada masivamente. Es la forma más clara de medir desacuerdo público online.',
    example:'"Lo ratearon con 80K likes en la respuesta versus 300 en su tweet. Definitivo."',
    synonyms:['Vapuleado','Aplastado'], related:['cringe','mid'], platforms:['X/Twitter'], formalTranslation:'Recibir más respuestas críticas que apoyo en una publicación digital' },

  /* ─── MILLENNIALS (1981-1996) ─── */
  { id:'yolo', word:'YOLO', pron:'/yó-lo/', category:'slang', generation:'Millennials', tags:['Millennials','2011','Viral'], date:'~2011', popularity:60, emoji:'🎉',
    definition:'"You Only Live Once" (Solo se vive una vez). El lema generacional de los Millennials. Se usó para justificar decisiones impulsivas. Popularizado por Drake en 2011. Hoy se usa con ironía.',
    example:'"Gasté todos mis ahorros en el viaje a Europa. YOLO, ya ahorraré después."',
    synonyms:['Solo se vive una vez','Carpe diem'], related:['fomo','throwback'], platforms:['Instagram','Twitter','Vine'], formalTranslation:'Solo se vive una vez, por lo que hay que aprovechar cada oportunidad' },

  { id:'fomo', word:'FOMO', pron:'/fó-mo/', category:'slang', generation:'Millennials / Gen Z', tags:['Millennials','Gen Z','2013'], date:'~2013', popularity:78, emoji:'😰',
    definition:'"Fear Of Missing Out" (miedo a perderse algo). La ansiedad de sentir que todos están en algo divertido menos tú. Las redes sociales lo intensificaron. En 2026 "JOMO" (Joy of Missing Out) es la respuesta Millennial.',
    example:'"Tenía FOMO de no ir a la fiesta pero al final todos dicen que estuvo aburrida."',
    synonyms:['Miedo a perderse algo','Ansiedad social'], related:['yolo','throwback'], platforms:['Instagram','WhatsApp'], formalTranslation:'Ansiedad por la posibilidad de perderse experiencias sociales importantes' },

  { id:'throwback', word:'Throwback Thursday (TBT)', pron:'/zróubak-zérs-dei/', category:'slang', generation:'Millennials', tags:['Millennials','2012','Instagram'], date:'~2012', popularity:55, emoji:'📷',
    definition:'Tradición de publicar fotos antiguas los jueves en Instagram con el hashtag #TBT. Fue el primer formato viral de nostalgia digital. Los Millennials lo inventaron y lo siguen usando.',
    example:'"Subí el TBT de mi graduación de 2010 y me llovieron comentarios de compañeros que no veía."',
    synonyms:['Nostalgia digital','Flashback'], related:['yolo','fomo'], platforms:['Instagram','Facebook'], formalTranslation:'Publicación nostálgica de recuerdos del pasado los días jueves' },

  { id:'adulting', word:'Adulting', pron:'/á-dul-ting/', category:'slang', generation:'Millennials', tags:['Millennials','2015'], date:'~2015', popularity:65, emoji:'🧾',
    definition:'Hacer cosas de adulto: pagar cuentas, cocinar, ir al médico, tener una reunión seria. Los Millennials convirtieron la vida adulta en un verbo con humor y resignación.',
    example:'"Pasé todo el sábado haciendo adulting: banco, supermercado, lavandería. Me siento viejo."',
    synonyms:['Responsabilidades adultas','Ser grande'], related:['fomo','yolo'], platforms:['Twitter','Instagram'], formalTranslation:'Cumplir con responsabilidades propias de la vida adulta' },

  { id:'basic', word:'Basic', pron:'/béi-sik/', category:'slang', generation:'Millennials / Gen Z', tags:['Millennials','Gen Z','2013'], date:'~2013', popularity:62, emoji:'☕',
    definition:'Alguien que sigue tendencias mainstream sin cuestionarlas. La "chica básica" bebe Starbucks, usa UGGs y le gustan las hojas de otoño. Surgió como crítica y hoy se usa con humor propio.',
    example:'"Soy la persona más basic del mundo: Pumpkin Spice Latte, velas, y Taylor Swift en otoño."',
    synonyms:['Convencional','Mainstream','Del montón'], related:['cringe','mid'], platforms:['Twitter','Instagram'], formalTranslation:'Persona que sigue tendencias populares de forma predecible sin originalidad' },

  { id:'stan', word:'Stan', pron:'/stan/', category:'slang', generation:'Millennials / Gen Z', tags:['Millennials','Gen Z','2000','Eminem'], date:'~2000, viral 2016', popularity:80, emoji:'🎤',
    definition:'Fan extremo y devoto de alguien. Viene de la canción "Stan" de Eminem (2000) sobre un fan obsesivo. Hoy se usa tanto como sustantivo ("soy un stan de Taylor") como verbo ("yo stanneo a BTS").',
    example:'"Llevo 10 años siendo stan de Beyoncé. Conozco cada nota de cada álbum."',
    synonyms:['Fan acérrimo','Fanático','Seguidor devoto'], related:['fandom','parasocial'], platforms:['Twitter','Instagram','TikTok'], formalTranslation:'Seguidor extremadamente devoto de un artista o figura pública' },

  { id:'lowkey-anxiety', word:'Burnout', pron:'/bérn-aut/', category:'trabajo', generation:'Millennials / Gen X', tags:['Millennials','Gen X','Trabajo','2019'], date:'OMS lo reconoció 2019', popularity:85, emoji:'🔥',
    definition:'Agotamiento crónico causado por el trabajo excesivo. La OMS lo reconoció como síndrome en 2019. Los Millennials fueron la primera generación en nombrarlo masivamente. En 2026 es tema central en bienestar laboral.',
    example:'"Llegué al burnout total en octubre: no podía ni abrir el computador sin sentir pánico."',
    synonyms:['Agotamiento laboral','Desgaste profesional'], related:['adulting','quiet-quitting'], platforms:['LinkedIn','Twitter','Reddit'], formalTranslation:'Síndrome de agotamiento crónico producido por el estrés laboral sostenido' },

  { id:'quiet-quitting', word:'Quiet quitting', pron:'/kuáiet-kíting/', category:'trabajo', generation:'Millennials / Gen Z', tags:['Millennials','Gen Z','Trabajo','2022'], date:'~2022', popularity:82, emoji:'💼',
    definition:'No renunciar al trabajo, sino hacer exactamente lo que pide el contrato y nada más. Sin horas extra, sin correos después del horario. La respuesta generacional a la cultura del hustle.',
    example:'"Empecé el quiet quitting: a las 6pm apago el computador y ya no reviso correos. Cambió mi vida."',
    synonyms:['Desconexión laboral','Hacer lo mínimo'], related:['burnout','adulting'], platforms:['LinkedIn','TikTok','Reddit'], formalTranslation:'Cumplir estrictamente con las obligaciones laborales sin exceder las expectativas' },

  /* ─── GEN X (1965-1980) ─── */
  { id:'ok-boomer', word:'OK Boomer', pron:'/ok-bú-mer/', category:'slang', generation:'Gen Z / Millennials → hacia Gen X y Boomers', tags:['Gen Z','Millennials','2019','Viral'], date:'~2019', popularity:70, emoji:'🙄',
    definition:'Respuesta sarcástica a opiniones o actitudes que se perciben como anticuadas o desconectadas de la realidad actual. Se dirige principalmente a personas de generaciones mayores. Se viralizó en TikTok.',
    example:'"Me dijo que solo hay que trabajar más duro para comprar una casa. OK Boomer."',
    synonyms:['Lo que digas','Claro que sí (con ironía)'], related:['cringe','adulting'], platforms:['TikTok','Twitter'], formalTranslation:'Respuesta irónica que desestima una opinión percibida como anticuada' },

  { id:'hustle-culture', word:'Hustle culture', pron:'/há-sel-kál-cher/', category:'trabajo', generation:'Gen X / Millennials', tags:['Gen X','Millennials','Trabajo','2015'], date:'~2015', popularity:72, emoji:'💪',
    definition:'Cultura del trabajo extremo como virtud. "Trabaja duro, duerme cuando mueras." Gen X la vivió intensamente en los 90s-2000s. Millennials la adoptaron y hoy la critican. En 2026 está siendo reemplazada por el bienestar.',
    example:'"La hustle culture me quemó por completo: 80 horas semanales durante 5 años y no llegué a nada."',
    synonyms:['Cultura del esfuerzo extremo','Workaholismo'], related:['burnout','quiet-quitting'], platforms:['LinkedIn','Twitter'], formalTranslation:'Cultura que glorifica el trabajo extremo y el sacrificio personal como virtud' },

  /* ─── BOOMERS / BABY BOOMERS (1946-1964) ─── */
  { id:'info-overload', word:'Infoxicación', pron:'/in-fok-si-ka-ción/', category:'ia', generation:'Boomers / Gen X / Millennials', tags:['Boomers','Gen X','IA','2020'], date:'~2020, vigente 2026', popularity:68, emoji:'📰',
    definition:'Saturación de información digital. El exceso de noticias, notificaciones y contenido que lleva a la parálisis o la confusión. Muy relevante para personas que adoptaron la tecnología de adultos. En 2026 la IA lo intensifica.',
    example:'"Mi papá tiene infoxicación: le llegan 200 mensajes de WhatsApp al día y no sabe cuáles son reales."',
    synonyms:['Saturación informativa','Sobrecarga digital'], related:['fake-news','digital-detox'], platforms:['WhatsApp','Facebook','Correo'], formalTranslation:'Saturación cognitiva producida por el exceso de información digital' },

  { id:'fake-news', word:'Fake news', pron:'/féik-niuz/', category:'ia', generation:'Boomers / Gen X', tags:['Boomers','Gen X','2016','Viral'], date:'~2016', popularity:80, emoji:'📰',
    definition:'Noticias falsas o desinformación presentada como noticia real. El término explotó en 2016 con las elecciones de EE.UU. En 2026, con la IA generativa, el problema se multiplicó: hay deepfakes y artículos generados por IA.',
    example:'"Mi abuela me mandó una noticia de WhatsApp totalmente falsa que ya fue desmentida hace 2 años."',
    synonyms:['Desinformación','Noticia falsa','Bulo'], related:['infoxicacion','deepfake'], platforms:['WhatsApp','Facebook','X'], formalTranslation:'Noticias falsas o desinformación presentada con apariencia de noticia verdadera' },

  { id:'deepfake', word:'Deepfake', pron:'/díp-féik/', category:'ia', generation:'Todas las generaciones', tags:['IA','2019','Vigente 2026'], date:'~2019, crítico 2026', popularity:88, emoji:'🎭',
    definition:'Contenido audiovisual falso generado por IA que hace parecer que alguien dijo o hizo algo que nunca ocurrió. En 2026 es uno de los mayores problemas de desinformación. Afecta política, entretenimiento y vida cotidiana.',
    example:'"Circuló un deepfake del presidente diciendo cosas que nunca dijo. Millones lo creyeron."',
    synonyms:['Vídeo falso con IA','Imagen artificial'], related:['fake-news','ia-generativa'], platforms:['TikTok','YouTube','X'], formalTranslation:'Contenido audiovisual manipulado mediante inteligencia artificial para suplantar identidades' },

  { id:'ia-generativa', word:'IA generativa', pron:'/i-a-ge-ne-ra-tí-va/', category:'ia', generation:'Todas las generaciones', tags:['IA','2023','Vigente 2026'], date:'~2023, masivo 2026', popularity:95, emoji:'🤖',
    definition:'Inteligencia Artificial capaz de crear texto, imágenes, audio y video originales. ChatGPT, Claude, Gemini, DALL-E, Midjourney son ejemplos. En 2026 está integrada en casi todas las aplicaciones del día a día.',
    example:'"Usé IA generativa para escribir el correo difícil que no podía redactar. Quedó perfecto."',
    synonyms:['IA creativa','IA productiva','ChatGPT'], related:['deepfake','fake-news'], platforms:['Web','Apps','WhatsApp'], formalTranslation:'Inteligencia artificial capaz de producir contenido original de texto, imagen o audio' },

  /* ─── DIGITAL LITERACY (multi-generacional) ─── */
  { id:'digital-detox', word:'Digital detox', pron:'/dí-ji-tal-dí-toks/', category:'slang', generation:'Gen X / Millennials / Boomers', tags:['Gen X','Millennials','Boomers','2015'], date:'~2015', popularity:70, emoji:'🌿',
    definition:'Período deliberado de desconexión de dispositivos digitales. Puede ser un fin de semana, unas vacaciones o incluso horas al día. Surgió como respuesta a la adicción tecnológica.',
    example:'"Me hice un digital detox de 10 días en el campo. Volví siendo otra persona, sin ansiedad."',
    synonyms:['Desconexión digital','Pausa tecnológica'], related:['burnout','quiet-quitting'], platforms:['Todas'], formalTranslation:'Período de desconexión voluntaria de los dispositivos y plataformas digitales' },

  { id:'phubbing', word:'Phubbing', pron:'/fá-bing/', category:'slang', generation:'Gen X / Millennials', tags:['Gen X','Millennials','2013'], date:'~2013', popularity:65, emoji:'📱',
    definition:'Ignorar a alguien que está físicamente presente para mirar el celular. "Phone" + "snubbing". Lo sufren especialmente personas mayores que comparten mesa con jóvenes. Genera conflictos intergeneracionales reales.',
    example:'"Mi hijo me hace phubbing en cada cena. Le hablo y sigue mirando el teléfono."',
    synonyms:['Ignorar por el celular','Adicción al teléfono'], related:['digital-detox','brainrot'], platforms:['Vida real'], formalTranslation:'Ignorar a una persona presente para prestar atención al teléfono móvil' },

  { id:'doom-scrolling', word:'Doomscrolling', pron:'/dum-skró-ling/', category:'slang', generation:'Millennials / Gen X / Boomers', tags:['Millennials','Gen X','2020'], date:'~2020', popularity:76, emoji:'😰',
    definition:'Seguir consumiendo noticias negativas o perturbadoras online aunque generen ansiedad. Durante la pandemia se masificó. En 2026 es un hábito documentado que afecta la salud mental de todas las generaciones.',
    example:'"Me quedé haciendo doomscrolling hasta las 2am leyendo noticias malas. Amanecí con ansiedad."',
    synonyms:['Consumo compulsivo de noticias negativas'], related:['fake-news','brainrot','digital-detox'], platforms:['Twitter/X','Instagram','News apps'], formalTranslation:'Consumo compulsivo de contenido digital negativo a pesar del malestar que genera' },

  { id:'parasocial', word:'Parasocial', pron:'/pa-ra-só-cial/', category:'slang', generation:'Gen Z / Millennials', tags:['Gen Z','Millennials','2021'], date:'~2021', popularity:72, emoji:'💭',
    definition:'Relación unidireccional de apego emocional con una figura pública (streamer, influencer, actor) que no sabe que existes. Sentir que "conoces" a alguien famoso como si fueran amigos reales.',
    example:'"Tengo una relación parasocial con ese streamer. Llevo 3 años viéndolo y siento que es mi amigo."',
    synonyms:['Apego unilateral','Falsa amistad con famosos'], related:['stan','rent-free'], platforms:['Twitch','YouTube','TikTok'], formalTranslation:'Vínculo emocional unilateral con una figura pública que no tiene conciencia de esa relación' },

];

const CATEGORIES = [
  { id:'all',      label:'Todos',           emoji:'🌐' },
  { id:'tiktok',   label:'TikTok',          emoji:'🎵' },
  { id:'gaming',   label:'Gaming',          emoji:'🎮' },
  { id:'memes',    label:'Memes',           emoji:'😂' },
  { id:'slang',    label:'Slang',           emoji:'💬' },
  { id:'twitter',  label:'X / Twitter',     emoji:'🐦' },
  { id:'ia',       label:'IA y tecnología', emoji:'🤖' },
  { id:'trabajo',  label:'Trabajo',         emoji:'💼' },
  { id:'emojis',   label:'Emojis',          emoji:'😎' },
];

/* ─── TRENDING julio 2026 (multi-generacional) ─── */
const TRENDING_TODAY = [
  { word:'Aura farming',  searches:7820, trend:'+52%', gen:'Gen Alpha/Z' },
  { word:'The ick',       searches:6540, trend:'+61%', gen:'Gen Z' },
  { word:'IA generativa', searches:6210, trend:'+88%', gen:'Todas' },
  { word:'Deepfake',      searches:5890, trend:'+73%', gen:'Todas' },
  { word:'Quiet quitting',searches:4970, trend:'+29%', gen:'Millennials/GenZ' },
  { word:'Doomscrolling', searches:4320, trend:'+44%', gen:'Todas' },
  { word:'Burnout',       searches:3980, trend:'+33%', gen:'Millennials/GenX' },
  { word:'Parasocial',    searches:3540, trend:'+37%', gen:'Gen Z/Millennials' },
];

/* ─── TRANSLATOR EXAMPLES ─── */
const TRANSLATOR_EXAMPLES = [
  { input:'Qué cringe ese POV, no cap',            output:'Qué vergonzosa resulta esa situación desde esa perspectiva. Te lo aseguro.' },
  { input:'Tengo un rizz impresionante hoy',        output:'Hoy tengo un carisma natural especialmente notable.' },
  { input:'Estoy en mi era delulu ngl',             output:'Estoy pasando por una etapa de expectativas poco realistas, para ser honesta.' },
  { input:'Me dio el ick cuando lo vi correr raro', output:'Sentí una repulsión instantánea cuando lo vi correr de forma extraña.' },
  { input:'Caught in 4K comprando McDonalds',       output:'Me descubrieron claramente comprando comida rápida.' },
  { input:'Understood the assignment con ese look', output:'Llegó con el atuendo exactamente apropiado para la ocasión, de manera impecable.' },
  { input:'Lives rent free in my head',             output:'No puedo dejar de pensar en eso sin quererlo.' },
  { input:'Voy a hacer quiet quitting',             output:'Voy a cumplir estrictamente con mis obligaciones laborales sin exceder el horario.' },
  { input:'Tengo FOMO de no ir a esa fiesta',       output:'Tengo ansiedad de perderse experiencias importantes que otros están viviendo.' },
  { input:'Me hice un digital detox',               output:'Me desconecté voluntariamente de todos los dispositivos digitales por un tiempo.' },
  { input:'Mi papá tiene infoxicación severa',      output:'Mi padre sufre de saturación cognitiva por el exceso de información digital.' },
  { input:'Eso fue un deepfake obvio',              output:'Ese contenido audiovisual fue claramente generado por IA para suplantar una identidad real.' },
];

window.DICT = { TERMS, CATEGORIES, TRENDING_TODAY, TRANSLATOR_EXAMPLES };
