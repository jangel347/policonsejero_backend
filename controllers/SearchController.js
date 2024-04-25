const axios = require("axios");
const spacy = require('spacy-js');

// Carga del modelo de lenguaje en español

const RULES = [
    {
        "name": "ARTÍCULO 1. De la Institución",
        "reglamento": "Reglamento Académico",
        "contenido": "La Institución Universitaria Politécnico Grancolombiano, en adelante la Institución, fue creada para contribuir decididamente al desarrollo socioeconómico y cultural del país con programas universitarios de currículo integrado y por ciclos, para la formación de técnicos, tecnólogos, licenciados, profesionales, especialistas y magísteres por medio de una educación basada en el respeto por los derechos humanos, el desarrollo integral de la persona humana, y la formación para la autonomía intelectual.",
        "tags": [],
        "pages": [
            8
        ]
    },
    {
        "name": "ARTÍCULO 2. Destinatarios",
        "reglamento": "Reglamento Académico",
        "contenido": "El presente Reglamento Académico y Disciplinario rige para la comunidad estudiantil de la Institución Universitaria Politécnico Grancolombiano y regula las relaciones de los estudiantes con la Institución, en concordancia con las disposiciones constitucionales, legales, estatutarias, misionales y el Proyecto Educativo Institucional (PEI). De igual manera, contribuye a asegurar la calidad del servicio educativo, a definir los derechos y los deberes de los estudiantes y a estimular su participación en el desarrollo académico de la Institución.",
        "tags": [],
        "pages": [
            8
        ]
    },
    {
        "name": "ARTÍCULO 3. Propósitos",
        "reglamento": "Reglamento Académico",
        "contenido": "En concordancia con el PEI, son propósitos del presente reglamento: a. Incentivar la autonomía como principio que fundamenta la libertad y permite a cada individuo la realización de su proyecto de vida académico y profesional. La Institución entiende la autonomía como el soporte para la autodeterminación, la elección y la capacidad de asumir responsabilidades que permite que los estudiantes sean protagonistas de su propio aprendizaje y no el objeto del mismo. Por tal razón, se considera el liderazgo como una consecuencia natural de la autonomía y se expresa en todas las actividades que las personas realizan dentro o fuera de la Institución.",
        "tags": [],
        "pages": [
            9
        ]
    },
    {
        "name": "ARTÍCULO 4. Ámbito de aplicación",
        "reglamento": "Reglamento Académico",
        "contenido": "El presente Reglamento Académico y Disciplinario es de obligatorio cumplimiento para todos los estudiantes de la Institución Universitaria Politécnico Grancolombiano, sin distinción de modalidad, programa académico, nivel de formación o jornada.",
        "tags": [],
        "pages": [
            9
        ]
    },
    {
        "name": "ARTÍCULO 5. Objetivos y alcances",
        "reglamento": "Reglamento Académico",
        "contenido": "El presente Reglamento Académico y Disciplinario tiene como objetivo establecer las normas, los procedimientos y las responsabilidades que regulan la vida académica y disciplinaria de los estudiantes de la Institución Universitaria Politécnico Grancolombiano, en concordancia con los principios constitucionales, legales, estatutarios y misionales de la Institución.",
        "tags": [],
        "pages": [
            9
        ]
    },
    {
        "name": "ARTÍCULO 6. Principios",
        "reglamento": "Reglamento Académico",
        "contenido": "Este reglamento se edifica sobre principios constitucionales, según los cuales la educación superior es un derecho y un bien público; por lo tanto, la equidad, la pertinencia, el pluralismo y la responsabilidad permiten, a través de la autonomía universitaria, los procesos de autorregulación, que hacen coherentes sus actividades con la transparencia, la excelencia y la participación. La Institución propenderá porque los estudiantes entiendan los problemas que afectan a la sociedad actual y se conviertan en instrumentos estratégicos para concebir y poner en marcha soluciones viables, adecuadas y sostenibles.",
        "tags": [],
        "pages": [
            9
        ]
    },
    {
        "name": "ARTÍCULO 7. Proyección social del Reglamento",
        "reglamento": "Reglamento Académico",
        "contenido": "Es obligación del estudiante buscar una interacción con el conocimiento que abra no solo las posibilidades de realización humana, sino de transformación de la sociedad, para lo cual tiene el deber de encontrar opciones novedosas e innovadoras en el actuar y en el uso de los recursos de la Institución, así como intervenir de forma oportuna y eficaz, interactuando con todos los estamentos y los espacios de la vida universitaria. Por ningún motivo será justificable la violencia, la intimidación o el uso de la fuerza en el ámbito académico, pues este es un campo de formación académica, de convivencia, de tolerancia, de pluralismo y de búsqueda del conocimiento. El irrespeto a la dignidad e integridad de las personas no tiene cabida en la Institución. El quehacer universitario está centrado en la búsqueda de la excelencia, en el estímulo y la realización de la investigación, conformando comunidades académicas que compartan con la sociedad sus logros académicos y científicos, que dinamicen y articulen sus propias expectativas y propendan por la solución de sus problemas. El estudiante en la Institución Universitaria Politécnico Grancolombiano aprende y transforma su vida.",
        "tags": [],
        "pages": [
            9
        ]
    },
    {
        "name": "ARTÍCULO 8. Programa académico",
        "reglamento": "Reglamento Académico",
        "contenido": "La Institución Universitaria Politécnico Grancolombiano ofrece programas académicos en diversas áreas del conocimiento, con el propósito de formar profesionales competentes y comprometidos con el desarrollo social, económico y cultural del país.",
        "tags": [],
        "pages": [
            9
        ]
    },
    {
        "name": "ARTÍCULO 9. Plan de estudios",
        "reglamento": "Reglamento Académico",
        "contenido": "Los planes de estudios de la Institución Universitaria Politécnico Grancolombiano están diseñados para garantizar una formación integral de los estudiantes, que incluya aspectos teóricos, prácticos y de investigación en su área de conocimiento.",
        "tags": [],
        "pages": [
            9
        ]
    },
    {
        "name": "ARTÍCULO 10. Estructura de los planes de estudio",
        "reglamento": "Reglamento Académico",
        "contenido": "Los planes de estudio de la Institución Universitaria Politécnico Grancolombiano se organizan por ciclos académicos, con el fin de facilitar la progresión de los estudiantes en su formación y garantizar la coherencia y pertinencia de los contenidos impartidos.",
        "tags": [],
        "pages": [
            10
        ]
    }
];

const list = async (req, res) => {
    let data = req.body;
    data["rules"] = RULES;
    const API_URL = "http://127.0.0.1:5000/evaluation";
    let respuesta;
    const apiResponse = await axios.post(API_URL, data).then((res) => {
        // console.log(res.data)
        respuesta = res.data;
    });

    return res.status(200).json(respuesta);
}

const consume = async (req, res) => {
    const API_URL = "http://127.0.0.1:5000/evaluation";
    const response = await axios.post(API_URL, {
        "situation": "Reglamento Académico y Disciplinario",
        "rules": [
            {
                "name": "ARTÍCULO 1. De la Institución",
                "reglamento": "Reglamento Académico",
                "contenido": "La Institución Universitaria Politécnico Grancolombiano, en adelante la Institución, fue creada para contribuir decididamente al desarrollo socioeconómico y cultural del país con programas universitarios de currículo integrado y por ciclos, para la formación de técnicos, tecnólogos, licenciados, profesionales, especialistas y magísteres por medio de una educación basada en el respeto por los derechos humanos, el desarrollo integral de la persona humana, y la formación para la autonomía intelectual.",
                "tags": [
                    "Acoso"
                ],
                "pages": [
                    8,
                    9,
                    10
                ]
            },
            {
                "name": "ARTÍCULO 2. Destinatarios",
                "reglamento": "Reglamento Académico",
                "contenido": "El presente Reglamento Académico y Disciplinario rige para la comunidad estudiantil de la Institución Universitaria Politécnico Grancolombiano y regula las relaciones de los estudiantes con la Institución, en concordancia con las disposiciones constitucionales, legales, estatutarias, misionales y el Proyecto Educativo Institucional (PEI). De igual manera, contribuye a asegurar la calidad del servicio educativo, a definir los derechos y los deberes de los estudiantes y a estimular su participación en el desarrollo académico de la Institución.",
                "tags": [
                    "Violencia"
                ],
                "pages": [
                    8
                ]
            }
        ]
    }).then((res) => {
        console.log(res);
        console.log("EJECUTADO ENDPOINT");
    });
    // const nlp = spacy.load('es_core_news_sm');
    // // Definición de la situación y las reglas
    // let situacion = "Un profesor me agrede físicamente y me dice insultos racistas";
    // let reglas = [
    //     {
    //         nombre: "regla #1",
    //         descripcion: "Los estudiantes y profesores no deben agredir a ningún miembro de la comunidad",
    //         etiquetas: ["Faltas", "Acoso"]
    //     },
    //     {
    //         nombre: "regla #2",
    //         descripcion: "Los estudiantes y profesores no deben insultar a ninguna persona",
    //         etiquetas: ["Faltas", "Acoso", "Discriminación"]
    //     }
    // ];

    // // Función para buscar reglas relacionadas con la situación dada

    // const situacionDoc = await nlp(situacion);
    // const reglasRelacionadas = [];

    // reglas.forEach(async (regla) => {
    //     const descripcionDoc = await nlp(regla.descripcion);
    //     const similitud = situacionDoc.similarity(descripcionDoc);
    //     if (similitud > 0.5) { // Umbral de similitud arbitrario
    //         reglasRelacionadas.push(regla);
    //     }
    // });

    // // Impresión de las reglas encontradas
    // reglasRelacionadas.forEach(regla => {
    //     console.log("Nombre de la regla:", regla.nombre);
    //     console.log("Descripción de la regla:", regla.descripcion);
    //     console.log("Etiquetas:", regla.etiquetas);
    //     console.log();
    // });

    return res.status(200).json({ "status": "OK" });
}

module.exports = {
    list, consume
};