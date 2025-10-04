// Datos centralizados de todos los kits de Nanai-Kit
// Este archivo es la única fuente de verdad para la información de kits

export const kitsData = [
  // NIVEL 1 - PREVENTIVO
  {
    id: 1,
    nombre: "Kit Gratitud",
    precio: 9990,
    imagen: "/assets/images/kitGratitudHome2.png",
    nivel: "N1_PREVENTIVO",
    nivelTexto: "Nivel 1 - Preventivo",
    categoria: "Preventivo",
    descripcionBreve: "Para valorar lo cotidiano y cultivar pensamientos positivos.",
    descripcion: "Una invitación a pausar, observar y agradecer. Este kit promueve la conexión con lo simple y valioso de cada día mediante herramientas suaves y positivas que inspiran gratitud genuina. Perfecto para: cultivar pensamientos amables, empezar o cerrar el día con intención y reconectar con el presente.",
    incluye: [
      "Taza",
      "Infusión Calmante",
      "Cuaderno de Gratitud",
      "Posavasos",
      "Stickers",
      "Luz de calma"
    ],
    perfectoPara: "Cultivar pensamientos amables, empezar o cerrar el día con intención y reconectar con el presente.",
    stock: true
  },
  {
    id: 2,
    nombre: "Kit Rutina",
    precio: 12990,
    imagen: "/assets/images/kitRutinaHome.png",
    nivel: "N1_PREVENTIVO",
    nivelTexto: "Nivel 1 - Preventivo",
    categoria: "Preventivo",
    descripcionBreve: "Para recuperar hábitos y estructura diaria con amabilidad.",
    descripcion: "Diseñado para quienes desean recuperar el ritmo, reordenar su día con amabilidad y estructurar hábitos que promuevan autocuidado y claridad mental. Perfecto para: personas que sienten desorden, fatiga o falta de motivación y desean organizarse con compasión.",
    incluye: [
      "Planner Semanal",
      "Infusión energizante",
      "Stickers",
      "Tarjetas para hábitos",
      "Aromaterapia energizante",
      "Liga de ejercicio",
      "Reloj"
    ],
    perfectoPara: "Personas que se sienten desconectadas, en baja energía, con sobrecarga o que buscan iniciarse en el autocuidado preventivo.",
    recomendadoPara: "Personas que sienten desorden, fatiga o falta de motivación y desean organizarse con compasión.",
    stock: true
  },

  // NIVEL 2 - ALERTA
  {
    id: 3,
    nombre: "Kit Calma",
    precio: 15990,
    imagen: "/assets/images/kitDestacadoHome.png",
    nivel: "N2_ALERTA",
    nivelTexto: "Nivel 2 - Alerta",
    categoria: "Alerta",
    descripcionBreve: "Para bajar la intensidad, respirar y volver al cuerpo.",
    descripcion: "Este kit ofrece una pausa sensorial para quienes necesitan bajar revoluciones, respirar profundamente y volver al cuerpo. Cada elemento está pensado para reducir la activación del sistema nervioso y favorecer el descanso emocional.",
    incluye: [
      "Libro de respiración guiada",
      "Infusión Calmante",
      "Libro de Mandalas",
      "Lápices",
      "Aromaterapia",
      "Fanzine",
      "Cojín de contención emocional"
    ],
    perfectoPara: "Quienes sienten ansiedad persistente, sobrecarga laboral o agitación interior.",
    recomendadoPara: "Personas en crisis adaptativas, con ansiedad moderada o atravesando cambios complejos.",
    stock: true
  },
  {
    id: 4,
    nombre: "Kit Renace",
    precio: 17990,
    imagen: "/assets/images/kitRenaceHome.png",
    nivel: "N2_ALERTA",
    nivelTexto: "Nivel 2 - Alerta",
    categoria: "Alerta",
    descripcionBreve: "Para dar sentido a los cambios, procesar lo vivido y comenzar de nuevo.",
    descripcion: "Creado para acompañar procesos de transición personal, duelos o reinvención. Ayuda a resignificar lo vivido y a sembrar una nueva etapa con sentido. Perfecto para: personas que atraviesan rupturas, decisiones importantes o momentos de redefinición personal.",
    incluye: [
      "Botella con frases",
      "Cuaderno de autoexploración emocional",
      "Guía de autocuidado",
      "Semillas para plantar",
      "Antifaz para dormir"
    ],
    perfectoPara: "Personas que atraviesan rupturas, decisiones importantes o momentos de redefinición personal.",
    recomendadoPara: "Personas en crisis adaptativas, con ansiedad moderada, atravesando cambios complejos o con necesidad de reinterpretar su presente.",
    stock: true
  },

  // NIVEL 3 - SOS URGENCIA
  {
    id: 5,
    nombre: "Kit Contención",
    precio: 18990,
    imagen: "/assets/images/kitContencionHome.png", 
    nivel: "N3_SOS",
    nivelTexto: "Nivel 3 - SOS Urgencia",
    categoria: "SOS Urgencia",
    descripcionBreve: "Para brindar compañía simbólica en estados de tristeza profunda, duelo o aislamiento emocional.",
    descripcion: "Una presencia simbólica para momentos en que las palabras no bastan. Brinda acompañamiento emocional suave, consuelo físico y validación afectiva en situaciones de tristeza profunda o pérdida.",
    incluye: [
      "Frases de contención",
      "Diario Emocional",
      "Peluche de contención emocional",
      "Taza",
      "Infusión",
      "Guía para episodios de crisis",
      "Cojín de contención emocional"
    ],
    perfectoPara: "Personas en duelo, aislamiento emocional o atravesando dolor sin red de apoyo.",
    recomendadoPara: "Personas que viven crisis agudas, pérdidas importantes, estados emocionales extremos o necesitan consuelo inmediato.",
    stock: true
  },
  {
    id: 6,
    nombre: "Kit Ansiedad - Insomnio - Pánico",
    precio: 19990,
    imagen: "/assets/images/kitAnsiedadHome.png",
    nivel: "N3_SOS",
    nivelTexto: "Nivel 3 - SOS Urgencia",
    categoria: "SOS Urgencia",
    descripcionBreve: "Primeros auxilios emocionales ante ataques de ansiedad, insomnio o pánico.",
    descripcion: "Un botiquín emocional pensado para momentos de pánico, insomnio, bloqueo o desregulación. Contiene elementos de respuesta rápida, técnicas de respiración y recursos sensoriales para anclarse al presente.",
    incluye: [
      "Juego de autorregulación",
      "Tarjetas de calma",
      "Libro de autoayuda",
      "Aromaterapia",
      "Flores de Bach SOS",
      "Velas",
      "Peluche",
      "Taza",
      "Infusión relajante"
    ],
    perfectoPara: "Ataques de ansiedad, angustia nocturna o situaciones donde se necesita volver al cuerpo urgentemente.",
    recomendadoPara: "Crisis de pánico, insomnio severo, ataques de ansiedad o momentos de desregulación emocional.",
    stock: true
  }
];

// Funciones auxiliares para trabajar con los datos
export const getKitById = (id) => {
  return kitsData.find(kit => kit.id === parseInt(id));
};

export const getKitsByNivel = (nivel) => {
  return kitsData.filter(kit => kit.nivel === nivel);
};

export const getAllKits = () => {
  return kitsData;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(price);
};