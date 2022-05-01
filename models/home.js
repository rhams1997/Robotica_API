const mongoose = require('mongoose');
var Schema = mongoose.Schema;

function connectToDatabase(){
    mongoose.connect("mongodb+srv://Rafael:rhams2020@roboticadb.haony.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Conexao com mongo db realizado com sucesso!");
}).catch((erro) => {
    console.log("Error: Conexão com mongo db realizado com sucesso!" + erro);
})
}
/*
function connectToDatabase(){
    mongoose.connect("mongodb://localhost/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Conexao com mongo db realizado com sucesso!");
}).catch((erro) => {
    console.log("Error: Conexão com mongo db realizado com sucesso!" + erro);
})
}
*/
module.exports = connectToDatabase;

var home = new Schema({
    titulo:{
        type: String
    },
    subtitulo:{
        type: String
    },
    servUmIcone:{
        type: String
    },
    servUmTitulo:{
        type: String
    },
    servUmDescricao:{
        type: String
    },
    servDoisIcone:{
        type: String
    },
    servDoisTitulo:{
        type: String
    },
    servDoisDescricao:{
        type: String
    },
    servTresIcone:{
        type: String
    },
    servTresTitulo:{
        type: String
    },
    servTresDescricao:{
        type: String
    },
    servQuatroTitulo:{
        type: String
    },
    servQuatroSubtitulo:{
        type: String
    },
    servQuatroDescricao:{
        type: String
    },
    


},
{
    timestamps: true,
}
);

mongoose.model('Home', home);

