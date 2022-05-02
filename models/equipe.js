var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var equipe = new Schema({
    titulo:{
        type: String
    },
    ang:{
        type: String
    },
    ang_descricao:{
        type: String
    },
    angAno:{
        type: String
    },

    angAoriginalName:{
        type: String
    },
    angAfileName:{
        type: String
    },

    well:{
        type: String
    },
    well_descricao:{
        type: String
    },
    wellAno:{
        type: String
    },
    welloriginalName:{
        type: String
    },
    wellfileName:{
        type: String
    },

    penha:{
        type: String
    },
    penha_descricao:{
        type: String
    },
    penhaAno:{
        type: String
    },
    penhaoriginalName:{
        type: String
    },
    penhafileName:{
        type: String
    },

    pat:{
        type: String
    },
    pat_descricao:{
        type: String
    },
    patAno:{
        type: String
    },
    patoriginalName:{
        type: String
    },
    patfileName:{
        type: String
    },

    edu:{
        type: String
    },
    edu_descricao:{
        type: String
    },
    eduAno:{
        type: String
    },
    eduoriginalName:{
        type: String
    },
    edufileName:{
        type: String
    },

    palmer:{
        type: String
    },
    palmer_descricao:{
        type: String
    },
    palmerAno:{
        type: String
    },
    paloriginalName:{
        type: String
    },
    palfileName:{
        type: String
    },

    sa:{
        type: String
    },
    sa_descricao:{
        type: String
    },
    saAno:{
        type: String
    },
    saoriginalName:{
        type: String
    },
    safileName:{
        type: String
    },

    jef:{
        type: String
    },
    jef_descricao:{
        type: String
    },
    jefAno:{
        type: String
    },
    jeforiginalName:{
        type: String
    },
    jeffileName:{
        type: String
    },

    ageu:{
        type: String
    },
    ageu_descricao:{
        type: String
    },
    ageuAno:{
        type: String
    },
    ageuoriginalName:{
        type: String
    },
    ageufileName:{
        type: String
    },

    rafa:{
        type: String
    },
    rafa_descricao:{
        type: String
    },
    rafaAno:{
        type: String
    },
    rafaoriginalName:{
        type: String
    },
    rafafileName:{
        type: String
    },

    joao:{
        type: String
    },
    joao_descricao:{
        type: String
    },
    joaoAno:{
        type: String
    },
    joaooriginalName:{
        type: String
    },
    joaofileName:{
        type: String
    },

    math:{
        type: String
    },
    math_descricao:{
        type: String
    },
    mathAno:{
        type: String
    },
    mathoriginalName:{
        type: String
    },
    mathfileName:{
        type: String
    }
    
},
{
    timestamps: true,

}
);

mongoose.model('Equipe', equipe);
