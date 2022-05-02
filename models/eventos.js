var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var sobre = new Schema({
    titulo:{
        type: String
    },
    descricao:{
        type: String
    },
    subtitulo:{
        type: String
    }
})

mongoose.model('Eventosos', eventosos);
