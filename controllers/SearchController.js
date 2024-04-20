
const list = (req, res) => {
    console.log(req.body);
    return res.status(200).json({
        "response":"Esta es una situación muy compleja y puedes resolverla con el policonsejero, espero ayudarte para que puedas solucionar tu situación con tu maestro",
        "tags":["Acoso","Discriminación","Violencia"],
        "rules":[
            {
                "name": "ARTÍCULO 1. De la Institución",
                "reglamento": "Reglamento Académico",
                "contenido": [
                    {
                        "name": "ARTÍCULO 1. De la Institución",
                        "contenido": "La Institución Universitaria Politécnico Grancolombiano, en adelante la Institución, fue creada para contribuir decididamente al desarrollo socioeconómico y cultural del país con programas universitarios de currículo integrado y por ciclos, para la formación de técnicos, tecnólogos, licenciados, profesionales, especialistas y magísteres por medio de una educación basada en el respeto por los derechos humanos, el desarrollo integral de la persona humana, y la formación para la autonomía intelectual."
                    }
                ],
                "tags":["Acoso"],
                "pages": [
                    8, 9, 10
                ]
            },
            {
                "name": "ARTÍCULO 2. Destinatarios",
                "reglamento": "Reglamento Académico",
                "contenido": [
                    {
                        "name": "ARTÍCULO 2. Destinatarios",
                        "contenido": "El presente Reglamento Académico y Disciplinario rige para la comunidad estudiantil de la Institución Universitaria Politécnico Grancolombiano y regula las relaciones de los estudiantes con la Institución, en concordancia con las disposiciones constitucionales, legales, estatutarias, misionales y el Proyecto Educativo Institucional (PEI). De igual manera, contribuye a asegurar la calidad del servicio educativo, a definir los derechos y los deberes de los estudiantes y a estimular su participación en el desarrollo académico de la Institución."
                    }
                ],
                "tags":["Violencia"],
                "pages": [
                    8
                ]
            },
        ]
    });
}


module.exports = {
    list
};