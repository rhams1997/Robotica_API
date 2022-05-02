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
        type: int
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
        type: int
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
        type: int
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
        type: int
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
        type: int
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
        type: int
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
        type: int
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
        type: int
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
        type: int
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
        type: int
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
        type: int
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
        type: int
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
