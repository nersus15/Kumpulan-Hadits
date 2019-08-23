// import packages, moduls etc...
const { buildSchema } = require('graphql');
// ...

// build and export GraphQl schema as module
module.exports = buildSchema(`
    type Hadits{    
        _id:ID   
        isi:String!
        tentang:String!
        kategory:String!
        riwayat:String!
        tgl_ditambahkan:String!
        tgl_diperbarui: String!
    }
    input inputHadits{
        isi:String!
        tentang:String!
        kategory:String!
        riwayat:String!
    }
    type rootQuery{
        hadits:[Hadits!]!
    }
    type rootMutation{
        addHadits(haditsBaru:inputHadits!):Hadits!
    }
    schema{
        query: rootQuery,
        mutation: rootMutation
    }
`);