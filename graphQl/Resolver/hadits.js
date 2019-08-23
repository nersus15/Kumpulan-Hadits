// // import packages and modules, etc...
const haditsModel = require('../models/hadits')

// ...

//  make resolver graphQl and export as modul
module.exports = {
    hadits: async () => {
        try {
            const Hadits = await haditsModel.find();
            return Hadits.map(hadits => {
                return {
                    ...hadits._doc,
                    _id: hadits.id,
                    tgl_ditambahkan: hadits.createdAt,
                    tgl_diperbarui: hadits.updatedAt,
                };
            })
        } catch (err) {
            throw err
        }
    },
    addHadits: async (args, req) => {
        const HaditsModel = new haditsModel({
            isi: args.haditsBaru.isi,
            tentang: args.haditsBaru.tentang,
            kategory: args.haditsBaru.kategory,
            riwayat: args.haditsBaru.riwayat,
        });
        try {
            const result = await HaditsModel.save()
            return result
        } catch (err) {
            throw err;
        }
    }
}