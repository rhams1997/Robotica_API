var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var quemsomos = new Schema({
    titulo:{
        type: String
    },
    subtitulo:{
        type: String
    },
    descricao:{
        type: String
    },
    descricao01:{
        type: String
    },
    subtitulo01:{
        type: String
    },
    descricao02:{
        type: String
    },
    subtitulo02:{
        type: String
    },
    descricao03:{
        type: String
    },
},
{
    timestamps: true,
}
);

mongoose.model('Quemsomos', quemsomos);
