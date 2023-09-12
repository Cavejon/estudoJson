const objs = [
    {
        "name": "Cavejon",
        "idade": 21,
        "cidade": "Joinville",
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "profissao": "Programador",
            "empresa": "Freeline"
        },
        "hobbies": [
            "Programar",
            "Correr",
            "Ler"
        ]
    },
    {
        "name": "Lucas",
        "idade": 21,
        "cidade": "Joinville",
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": null,
            "empresa":  null
        },
        "hobbies": [
            "Programar",
            "Correr",
            "Ler"
        ]
    }
]


//converter objeto para JSON
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

//converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa => {
    console.log(pessoa.name);
}))