// Base de datos documental e histórica de Piedecuesta (1776–2026)
// Fuentes: Dr. Luis Rubén Pérez Pinzón (Págs. 91–95), Pierre Raymond (1997), Ordóñez & Rueda (2015),
// Archivo General de la Nación SC.46 y Trabajo de Campo ABP Colegio Municipal Carlos Vicente Rey (2026).

export const historyData = {
  projectMeta: {
    institution: "Colegio Municipal Carlos Vicente Rey",
    course: "Ciencias Sociales 11°",
    period: "Período II",
    teacher: "Docente: Deiby Duvan Galeano Mendoza",
    banner: "Colegio Municipal Carlos Vicente Rey | Ciencias Sociales 11° | Período II | Docente: Deiby Duvan Galeano Mendoza",
    title: "Historias de Piedecuesta (1776–2026): Cañaduzales, Oficios y Memoria Colectiva",
    subtitle: "De la colonización cañamelera de 1635 y los extintos panes de azúcar, al patrimonio exequial de David Gómez Barrera",
    photoCredit: "Liévano O. Fotógrafo",
    historian: "Luis Rubén Pérez Pinzón",
    bookPages: "Páginas 91 a 95",
  },

  images: {
    heroCover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVE3vPc2CvERVImElnphcWHy5yXrS7WTyqMtUtvhBNaDD7y6YpCr2bK_RpqLMFQL933XqgGjfkOqKjm5mpR8R58APsBN3Fh9m520Dm1neFlZQVZLzBZAHNySYY8aA7HLdVZdIGJMeGGJlVSSfiKTJmUxfwQRjZBf6rRKeKAefFftgRNtrL_0X3hj1FVe0TUGkPQXutvjgP8MGeBNFRUQLJpLESEFvWpnEcaedf5QWzNXi5N7db8u8",
    hacienda: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvVxiwDTE2MpodmrWsRiCVsQNy7zwwQvmiXcCN7YaT2nTw8fZSggtB2IlgG-6bkO2P0eYz633SipIT6GnN47MRjUHAF7rMdXa9I5nzOIyastnuluI1HC2BGH3UhthEeJSYzBuIyBp_an7r6ZqlFjGgRUjIAidkcIr_RSt1wPK1qfzeXtQHXotC3TaTQvk4eg6_FZVhmhbEdtI2Ecc4XXp63O78FD933ann-x9ugMRUVJXxRc6LpfY",
    trapicheMolienda: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmmHbxIdhNG8BSpaIAkvKc5Wx8UF4ma4kmA_hODMYAzOCvDsoy9RPQj_t2g1BM03iye_G_48Z27VzwoMgANt0eqexGyM_DpbhuSWmh6LgG0ra3SaAhtXNRX9uKdM9vO1-6J3BBRfEHSfz6KAcp4A5IcUmqTzjoJG0t0lpfLaQLkv4Cfz0WcsUKu4UrgYen41mxDSAWqJiu3F2z_C8VpifRQFb5Oc2suoUh0j3WFM59TOJpAc8HZ0U",
    humaredaBagazo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCngLNp6TMk6z6I9FViB9JiFf3nRQffdNswI2jJTtWAUYEcD7DwNb6ONknmtAXvJeypN1yev-sAcWyWdbdsSPFMqoIhs_VfKCsC__Br1QrzSxKHxzt1ZEWT2Xy_w83Xf-Fb9zst8E4CmeBFECDGqxKMT-AQZ3lN0O-vvHaerhU6V6k2XL57zcQLDHxt7yvkyGH74UZIv69wXmjv4slqNqJvVSbFCA-aL_PGsBcQJPTDmTXwVSHDupY",
    funerariaFachada: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbkhCXshpTgKTInvBvfpThnQN_mmcEGbXcUS6hHkT3F21f9X16v7a1quXWUxGVK2WDNQwg5umEDLGVB31ihMaxoEQ0Dv75S-BV-Obd5IXpD5H3jsGQbvBfXGPjwpfg1wDZ1VARXxBFXU1NMMRCJQOSy7vuFghxG7ipSob5t4X8cVynHFMdrcZFtnlC4q3exH9uWztjsFd0maU24LglXK_5y0_3kO4HRgc7oQdThMTGHz0pyFve6MI",
  },

  navigation: [
    { id: "inicio", label: "Portada & Hero" },
    { id: "origenes-1635", label: "Colonización 1635" },
    { id: "pan-de-azucar", label: "Pan de Azúcar" },
    { id: "proceso-normativa", label: "Proceso & Normativa" },
    { id: "funeraria-memoria", label: "Funeraria David Gómez" },
    { id: "colofon", label: "Colofón & Fuentes" },
  ],

  seccion2: {
    id: "origenes-1635",
    badge: "Sección 2 · Documento Notarial y Poblamiento",
    title: "Orígenes Coloniales y la Colonización Cañamelera",
    subtitle: "El valle del río Lato, los encomenderos de Pamplona y la fundación de las haciendas de molienda",
    intro: "El poblamiento de las vegas bajas de la cordillera oriental respondió a la búsqueda incesante de riqueza aurífera y a la posterior necesidad de consolidar estancias agrícolas autosuficientes capaces de alimentar a las cuadrillas de explotación minera.",
    hitos: [
      {
        num: "1",
        year: "Siglo XVI - XVII",
        title: "Dinastía Velazco y el Río de Oro",
        text: "Los descendientes de Ortún Velazco (cofundador de Pamplona y primer encomendero extractor de oro) iniciaron el poblamiento productivo en el valle del río Lato.",
        detail: "La transición del cateo y lavado de aluviones en las arenas del Río de Oro hacia la ocupación agraria permanente configuró los primeros asentamientos ribereños en el valle de Guatiguará y Lato.",
        tag: "Linaje Encomendero",
      },
      {
        num: "2",
        year: "Hacia 1620",
        title: "Primer Trapiche en Bucarica",
        text: "Juan de Velazco, con apoyo de esclavos africanos, estableció junto al pueblo de indios de Bucarica el primer trapiche para producir miel, conservar alimentos, abastecer a los indios lavadores de oro y comerciar excedentes con Vélez y Pamplona.",
        detail: "La molienda de cañaduzal se articuló tempranamente con la mano de obra esclavizada y el trabajo tributario indígena, abasteciendo de calorías y miel de purga los distritos mineros y rutas comerciales.",
        tag: "Tecnología y Comercio",
      },
      {
        num: "3",
        year: "1638",
        title: "Repartición de Estancias y Familia Mantilla de Los Ríos",
        text: "Expansión desde el Río del Oro hasta la Mesa de Jéridas. División de tierras entre María de Velasco (La Mata Redonda), Magdalena de Velasco (El Hato), Andrés Velasco (Bucarica y Zapamanga) y Pedro de Velasco (Pie de la Cuesta).",
        detail: "El entronque de las familias Velasco y Mantilla de Los Ríos consolidó un latifundio cañamelero continuo que abarcó desde las estribaciones de Bucaramanga hasta los cañones de Jéridas y Manco.",
        tag: "Estructura de la Tierra",
      },
      {
        num: "4",
        year: "31 de Enero de 1635",
        title: "El Título del 31 de Enero de 1635",
        text: "Don Pedro de Velasco demuestra ante el Cabildo de Pamplona (marzo de 1635) la propiedad de 4 estancias tasadas en 500 patacones, ubicadas entre la quebrada Grande (Manco), el río Frío y el río Hato (Lato) hasta formar el río del Oro hacia Malpaso y Palogordo, equipadas con casas, labranzas de maíz y trapiche de moler caña.",
        detail: "Acta notarial que certifica legalmente la vocación agroindustrial cañera en el Pie de la Cuesta: 500 patacones de tasación para cuatro estancias con trapiche en plena producción formal.",
        tag: "Hito Fundacional Notarial",
      },
      {
        num: "5",
        year: "Siglos XVII al XXI",
        title: "Continuidad Secular (Siglo XVII al XXI)",
        text: "Transición de los cateos de oro al cultivo de caña y comercialización en bodegas, cooperativas, tiendas de abastos y el pabellón exclusivo en la Casa de Mercado de Piedecuesta.",
        detail: "A lo largo de más de 300 años, lo que inició como un sistema de moliendas coloniales evolucionó hacia la economía campesina de aparcería, Coopanelas y el comercio mayorista en el mercado de Piedecuesta.",
        tag: "Memoria Productiva Viva",
      },
    ],
  },

  seccion3: {
    id: "pan-de-azucar",
    badge: "Sección 3 · Historiografía Económica UIS (Págs. 92–94)",
    title: "Del \"Pan de Azúcar\" a la Panela",
    subtitle: "Los estudios de Pierre Raymond (1980–1988) sobre aparcería, Coopanelas y la Empresa Licorera de Santander",
    raymondContext: {
      author: "Pierre Raymond (Investigador UIS, 1980–1988 / 1997)",
      thesis: "Hasta 1940 el producto más rentable y prestigioso en las haciendas de Santander fueron los 'panes de azúcar' (azúcar de pan o de horma), elaborados según ancestral técnica de raigambre asiática con un peso promedio de 1 arroba (25 libras). La panela nació originalmente como un subproducto: un 'azúcar defectuoso o de mala calidad'.",
      economicRole: "Las moliendas de Piedecuesta combinaron la aparcería tradicional, el abastecimiento de mieles para la Empresa Licorera de Santander y la organización cooperativa gremial a través de Coopanelas, sosteniendo a miles de familias campesinas.",
    },
    conicAnatomy: {
      title: "Anatomía del Pan de Azúcar (Siglo XVII – 1940)",
      description: "Cono invertido de purga según la clasificación formulada por Alexander von Humboldt (1827). Durante el drenaje de las mieles en hormas de barro o madera, la gravedad y el lavado generaban tres estratos de pureza y valor mercantil bien diferenciados:",
      strata: [
        {
          id: "blanco",
          name: "Parte Superior: Azúcar Blanco",
          fraction: "5/9 del cono",
          percentage: "55.6%",
          weightLbs: "13.9 lbs",
          purity: "Máxima pureza",
          colorBg: "bg-[#FDFBF7]",
          colorBorder: "border-[#B89758]",
          textColor: "text-[#1F3D2B]",
          gradient: "from-[#FAF6F0] to-[#EAE0D0]",
          desc: "Estrato de mayor filtración y lavado de mieles. Azúcar cristalino, blanquecino y cotizado en los mercados selectos de Pamplona, Vélez y Bucaramanga por su alta concentración de sacarosa pura.",
          marketValue: "Precio Premium / Calidad de Exportación y Mesa Principal",
        },
        {
          id: "quebrado",
          name: "Parte Media: El Quebrado",
          fraction: "3/9 del cono",
          percentage: "33.3%",
          weightLbs: "8.3 lbs",
          purity: "Calidad intermedia",
          colorBg: "bg-[#E6D4B8]",
          colorBorder: "border-[#B89758]",
          textColor: "text-[#362419]",
          gradient: "from-[#E6D4B8] to-[#CCA878]",
          desc: "Zona central donde el drenaje de melazas era parcial. Presentaba una tonalidad rubia o ámbar, con granulación firme pero menor pureza cromática que la corona del pan.",
          marketValue: "Precio Intermedio / Consumo doméstico urbano y confitería local",
        },
        {
          id: "cucurucho",
          name: "Punta Inferior: El Cucurucho",
          fraction: "1/9 del cono",
          percentage: "11.1%",
          weightLbs: "2.8 lbs",
          purity: "El más oscuro y menos cotizado",
          colorBg: "bg-[#9A6B3D]",
          colorBorder: "border-[#23170F]",
          textColor: "text-[#FAF6F0]",
          gradient: "from-[#9A6B3D] to-[#5C3B1E]",
          desc: "Vértice inferior del cono donde se acumulaban las melazas densas no purgadas, bagacillo y pigmentos oscuros. De textura húmeda y sabor acaramelado pronunciado.",
          marketValue: "Precio Popular / Base económica de fermentación y chicha de los arrieros",
        },
      ],
    },
    decayAnalysis: {
      question: "¿Por qué desaparecieron los Panes de Azúcar hacia 1940?",
      originNote: "La panela nació originalmente como un «azúcar defectuoso o de mala calidad», relegado frente a los conos de horma.",
      factors: [
        {
          title: "Preferencia y arraigo popular por las calidades de la panela",
          text: "El paladar y la economía popular valoraron la panela por su alta densidad energética, su contenido mineral y su costo accesible para la preparación de la aguapanela cotidiana en hogares campesinos y obreros.",
        },
        {
          title: "Competencia demoledora de los ingenios del Valle del Cauca",
          text: "Decisivamente, la masificación industrial de los modernos ingenios azucareros del Valle del Cauca inundó el mercado nacional con azúcar blanco y moreno granulado, refinado mecánicamente, limpio y empaquetado en costales de fácil fraccionamiento. Las haciendas de Santander no podían competir en costos con la molienda a vapor del Valle, viéndose forzadas a abandonar la fabricación de panes de azúcar de horma y refugiarse de forma definitiva en la producción de panela en bloque.",
        },
      ],
    },
  },

  seccion4: {
    id: "proceso-normativa",
    badge: "Sección 4 · Lexicografía, Molienda y Modernización (Págs. 93–95)",
    title: "El Proceso Técnico, Léxico y Normativa Moderna",
    subtitle: "Glosario filológico de raíces atlánticas, los 8 subprocesos de la hornilla y las exigencias de higiene (2011–2015)",
    glossary: {
      title: "Glosario Filológico del Trapiche",
      atlanticOrigins: {
        title: "Raíces Atlánticas (1483 – 1538)",
        terms: [
          {
            term: "Guarapo y Fuçanga",
            origin: "Portuguesismos insulares de Madeira (1483) y Canarias (siglo XVI)",
            meaning: "Vocablos transferidos tempranamente al Caribe y la Nueva Granada desde 1538 a través de las expediciones de los adelantados Pedro de Heredia y Sebastián de Belalcázar. Designaban tanto el jugo fresco extraído de la caña como las bebidas fermentadas derivadas de las mieles.",
          },
          {
            term: "El Maestro de Azúcar",
            origin: "Oficio clásico de la cañamelera andina",
            meaning: "Denominado en los trapiches santandereanos «templador, punteador, melero o mielero». Era el artífice empírico encargado de calibrar la viscosidad y temperatura exacta de la «miel gorda» o «melao» antes del vertido en el «tacho» o «canoa» para su batido manual.",
          },
          {
            term: "Tacho y Canoa",
            origin: "Léxico náutico y de ingenios azucareros",
            meaning: "Recipientes y bateas de madera o cobre donde el melao hirviente reposaba y era batido enérgicamente para provocar la nucleación y cristalización de la sacarosa.",
          },
        ],
      },
    },
    stepper: {
      source: "Ordóñez y Rueda (2015) / Metodología Técnica CORANTIOQUIA",
      steps: [
        {
          step: 1,
          name: "Corte y Apronte",
          summary: "Cosecha selectiva de tallos maduros en sazón.",
          technical: "Corte a ras de cepa con machete, deshoje y acarreo inmediato en recuas de mulas hacia la ramada del trapiche para evitar la inversión enzimática del jugo.",
          stage: "Campo y Transporte",
        },
        {
          step: 2,
          name: "Molienda (Molino y Hornilla)",
          summary: "Extracción del jugo crudo y generación de biomasa energética.",
          technical: "Prensado continuo de la caña entre tres masas metálicas o de madera. El jugo crudo (guarapo) fluye al tanque de recolección mientras el bagazo húmedo se estiba para secado al sol y posterior combustión en la hornilla.",
          stage: "Extracción Primaria",
        },
        {
          step: 3,
          name: "Prelimpieza (al calentarse el jugo)",
          summary: "Filtración física y decantación inicial de impurezas.",
          technical: "Alcanzando entre 50°C y 60°C en la primera paila clarificadora, los fragmentos gruesos de bagacillo, arenas y tierra se desprenden y son retirados mecánicamente.",
          stage: "Acondicionamiento Térmico",
        },
        {
          step: 4,
          name: "Clarificación Botánica",
          summary: "Floculación y espumado sin aditivos sintéticos.",
          technical: "Adición de mucílago de corteza de balso (Heliocarpus americanus) o cadillo a 80°C–90°C. Las gomas botánicas coagulan y levantan las sustancias coloidales («cachaza»), limpiadas con espumaderas de cobre.",
          stage: "Purificación Natural",
        },
        {
          step: 5,
          name: "Evaporación",
          summary: "Eliminación masiva de agua por tiro térmico continuo.",
          technical: "El calor de los gases de combustión de la hornilla eleva el guarapo clarificado hasta la ebullición intensa en la batería de pailas, pasando de 18° Brix hasta alcanzar densidad de jarabe o melao.",
          stage: "Concentración de Sólidos",
        },
        {
          step: 6,
          name: "Punteo",
          summary: "Determinación del punto de miel gorda por el templador.",
          technical: "A temperaturas que oscilan entre 118°C y 125°C, el maestro mielero prueba la elasticidad de la gota de melao en agua fría hasta constatar la consistencia quebradiza que garantiza la solidificación.",
          stage: "Punto Crítico Térmico",
        },
        {
          step: 7,
          name: "Batido",
          summary: "Cristalización inducida en la canoa de madera.",
          technical: "Traspaso de la miel gorda al tacho o batea de enfriamiento. Se somete a fricción y volteo rítmico con palas de madera para incorporar aire, enfriar la masa e inducir microcristales homogéneos.",
          stage: "Cristalización",
        },
        {
          step: 8,
          name: "Moldeo y Empaque",
          summary: "Solidificación en gaveras normalizadas y empaque inocuo.",
          technical: "Vertido de la masa aún tibia en moldes (gaveras) tabicados. Tras enfriarse a temperatura ambiente, los bloques se desmoldan y se protegen en envolturas de papel grado alimentario o termoencogible según la reglamentación sanitaria.",
          stage: "Acabado y Despacho",
        },
      ],
    },
    modernImpact: {
      statsYear: "2015",
      title: "Panel de Datos e Impacto Moderno (Pág. 95)",
      stats: [
        {
          value: "73%",
          metric: "Ingresos Familiares Campesinos",
          scope: "En los 6 mayores municipios productores de Santander",
          context: "La agroindustria panelera constituye el principal generador de jornales rurales directos y sostén económico primario de los hogares en las cuencas productivas de la región.",
        },
        {
          value: "68%",
          metric: "Suelo Cultivado Regional",
          scope: "Cobertura agrícola en áreas de ladera y vega santandereana",
          context: "El cultivo secular de caña cañamelera domina el paisaje agrario frente a otros renglones como el café, el tabaco o los cítricos en los distritos paneleros.",
        },
      ],
      regulations: {
        year: "2011",
        title: "Normativa Sanitaria e Inocuidad (Resolución 2011)",
        details: "Estandarización obligatoria de higiene en el procesamiento de trapiches: pisos lavables, canaletas de acero inoxidable, cuartos cerrados de moldeo y prohibición de colorantes artificiales como la anilina o clarificantes tóxicos como el hidrosulfito de sodio (clarol). Exigencia de empaques inocuos rotulados desde 2011.",
        alliances: "Acompañamiento y transferencia técnica liderada por Fedepanelas, el Servicio Nacional de Aprendizaje (SENA) y CORPOICA (Agrosavia).",
      },
    },
  },

  seccion5: {
    id: "funeraria-memoria",
    badge: "Sección 5 · Patrimonio Exequial y Memoria Comunitaria",
    title: "Más Allá del Duelo: Funeraria David Gómez Barrera",
    subtitle: "De la carpintería solidaria en la Carrera 8 #9-01 a la devoción de San Francisco Javier",
    founderData: {
      name: "Don David Gómez Barrera",
      location: "Carrera 8 #9-01 (Centro Histórico de Piedecuesta)",
      historicRole: "Fundador de uno de los primeros servicios exequiales formales del municipio de Piedecuesta.",
      character: "En una época donde los velorios se resolvían en la intimidad de las casas de familia con velas de sebo, don David combinó su destreza en el labrado de madera fina (cedro y nogal) con un compromiso inquebrantable de ayuda mutua hacia las familias campesinas y trabajadoras de las moliendas, fiando o donando féretros a quienes carecían de recursos para un sepelio digno.",
    },
    transition: {
      oldName: "Funeraria David Gómez Barrera",
      newName: "Funeraria San Francisco Javier",
      commercialStrategy: "Cambio de denominación comercial concebido como una estrategia para conectar directamente con la fe católica local y la identidad de la Parroquia San Francisco Javier, templo matriz y patronal que acompañó la erección de la Parroquia de Nuestra Señora de la Candelaria de Piedecuesta desde el siglo XVIII.",
    },
    testimonies: [
      {
        witness: "Señor Ramiro",
        role: "Trabajador de servicios exequiales y memoria obrera",
        date: "18 de mayo de 2026",
        quote: "La funeraria no desapareció sino que cambió de dueño y nombre; por ser empresa privada la información histórica detallada no se divulga fácilmente.",
        analysis: "Confirma la persistencia de la entidad comercial bajo nueva tutela jurídica y describe el celo corporativo que muchas veces dificulta la reconstrucción pública del archivo empresarial privado en el municipio.",
        badge: "Testimonio Directo de Campo",
      },
      {
        witness: "Señora Sofía",
        role: "Trabajadora y pobladora vinculada al sector parroquial",
        date: "18 de mayo de 2026",
        quote: "El nombre conecta con el origen mismo del asentamiento de Piedecuesta y la memoria de la devoción fundacional.",
        analysis: "Explica el arraigo y legitimidad social que aportó el nombre de San Francisco Javier en la memoria de los deudos, transformando una firma privada en una extensión natural del ritual religioso colectivo.",
        badge: "Testimonio Directo de Campo",
      },
    ],
  },

  seccion6: {
    id: "colofon",
    badge: "Sección 6 · Conclusión Histórica & Colofón Académico",
    title: "Conclusión y Colofón Bibliográfico",
    reflection: {
      title: "La Dignificación de los Oficios y el Rescate de la Memoria Colectiva",
      text: "Tanto el trabajo físico en los trapiches cañameleros —con el sudor de los cortadores, bueyeros y templadores de azúcar de horma— como los oficios exequiales cotidianos fundados por hombres como Don David Gómez Barrera, constituyeron los verdaderos cimientos de la identidad humana y comunitaria de Piedecuesta. Frente al avance acelerado de la urbanización metropolitana y el riesgo latente del olvido histórico por la privatización de los archivos, esta investigación escolar reafirma que la historia local no la forjaron únicamente los decretos coloniales, sino la perseverancia silenciosa de quienes endulzaron el camino de la vida y dignificaron la despedida de la muerte.",
    },
    sourcesList: [
      {
        type: "Obra Historiográfica Canónica",
        citation: "Pérez Pinzón, Luis Rubén. (2026). Historias de Piedecuesta (1776–2026). Páginas 91 a 95. Universidad Industrial de Santander (UIS).",
      },
      {
        type: "Fondo Documental Colonial",
        citation: "Archivo General de la Nación (AGN). Fondo Tierras y Cabildos, Sección Colonia, SC.46. Títulos de propiedad y mercedes de tierras en los valles de Lato, Manco y Río de Oro (1635–1638).",
      },
      {
        type: "Estudios Agroindustriales y de Aparcería",
        citation: "Raymond, Pierre. (1997/2003). De la aparcería al capitalismo: La agroindustria panelera en Santander y el Valle de Guatiguará (Investigaciones 1980–1988). Ediciones UIS.",
      },
      {
        type: "Normativa Técnica y de Procesamiento",
        citation: "Ordóñez, J. & Rueda, M. (2015). Buenas Prácticas de Manufactura en Trapiches Paneleros y Subprocesos de Extracción. Convenio Fedepanelas, SENA y CORANTIOQUIA.",
      },
      {
        type: "Fuentes Primarias Orales y Trabajo de Campo ABP",
        citation: "Entrevistas estructuradas de memoria oral realizadas el 18 de mayo de 2026 en el casco urbano de Piedecuesta: Señor Ramiro y Señora Sofía (trabajadores de servicios exequiales).",
      },
      {
        type: "Asiento Parroquial",
        citation: "Archivos Parroquiales de San Francisco Javier y Curato de Piedecuesta (Libros de Difuntos y Oficios Exequiales, 1894–1960).",
      },
    ],
    institutionalCredits: {
      school: "Colegio Municipal Carlos Vicente Rey",
      subject: "Ciencias Sociales 11° · Aprendizaje Basado en Problemas (ABP)",
      period: "Período II · 2026",
      teacher: "Deiby Duvan Galeano Mendoza",
      location: "Piedecuesta, Santander, Colombia",
      inscription: "«Conservar la memoria no es mirar con nostalgia el ayer, sino dar raíz y dignidad a los que habitan el presente».",
    },
  },
};
