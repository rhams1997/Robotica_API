const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const connectToDatabase = require('./models/home');


connectToDatabase();


require('./models/home');
const Home = mongoose.model('Home');

require('./models/quemsomos');
const Quemsomos = mongoose.model('Quemsomos');

require('./models/equipe');
const Equipe = mongoose.model('Equipe');



app.use(express.json());

app.use((req, res, next) => {

    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-control-Alolow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Acess-control-Alolow-Headers", 'Content-Type, Authorization, X-PINGOTHER')
    app.use(cors());
    next();


})


app.get("/home", (req, res) => {
    Home.findOne({}).then((home) => {
        return res.json(home);
    }).catch((err) => {
        return res.status(400).json({
            error:true,
            mensage: 'Nenhum registro encontrado!'
        });

    })
    
});

app.get("/quemsomos", (req, res) => {
    Quemsomos.findOne({}).then((home) => {
        return res.json(home);
    }).catch((err) => {
        return res.status(400).json({
            error:true,
            mensage: 'Nenhum registro encontrado!'
        });

    })
    
});

app.get("/equipe", (req, res) => {
    Equipe.findOne({}).then((home) => {
        return res.json(home);
    }).catch((err) => {
        return res.status(400).json({
            error:true,
            mensage: 'Nenhum registro encontrado!'
        });

    });
    
});

app.post("/home", (req, res) => {
    Home.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Conteudo não cadastrado com sucesso!"
        })
    })

    return res.json({
        error:false,
        message: "Conteudo da pagina home cadastrado com sucesso!"
    });
});

app.post("/quemsomos", (req, res) =>{
    Quemsomos.create(req.body, (err) =>{
        if(err) return res.status(400).json({
            error: true,
            message: "Error conteudo da pagina quemsomos falhou!"
        });
    } );

    return res.json({
        error: false,
        message:"Conteudo da pagina quemsomos cadastrada com sucesso!"
    });
});

app.post("/equipe", (req, res) =>{
    Equipe.create(req.body, (err) =>{
        if(err) return res.status(400).json({
            error: true,
            message: "Error conteudo da pagina quemsomos falhou!"
        });
    } );

    return res.json({
        error: false,
        message:"Conteudo da pagina quemsomos cadastrada com sucesso!"
    });
});

app.listen(8010, () => {
    console.log("Servidor iniciado na porta 8010: http://localhost:8010");
});