var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var projetos = new Schema({
    titulo:{
        type: String
    },
    descricao:{
        type: String
    },
    subtitulo:{
        type: String
    },
},
{
    timestamps: true,
}
);

mongoose.model('projetos', projetos);
