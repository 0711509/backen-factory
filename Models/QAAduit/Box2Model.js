const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box2Schema = new Schema({

    Answer1: {
        type: Boolean,
        required: [true, "Plaese Enter Does facility store any refrigerated"]
    },
    Answer2: {
        type: Boolean,
        required: [true, "Plaese Enter How often does the HACCP Team mee"]
    },
    Answer3: {
        type: Boolean,
        required: [true, "Plaese Enter Have employees been trained on HACCP principles"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }

});

const QABox2Model = mongoose.model("QABox2", Box2Schema);
module.exports = QABox2Model;