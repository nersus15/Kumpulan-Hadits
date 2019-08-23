// import packages and moduls
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new mongoDB schema
const haditsSchema = new Schema({
    isi: { type: String, required: true },
    tentang: { type: String, required: true },
    kategory: { type: String, required: true },
    riwayat: { type: String, required: true },
}, { timestamps: true });

// create mongoDB model and export the modul
module.exports = mongoose.model('haditsModel', haditsSchema);