const mongoose = require('mongoose');

const ColorSchema = mongoose.Schema(

    {
        colorName: {
            type: String,
            required: true,
            unique: true
        },
        colorSlug: {
            type: String,
            required: true,
            unique: true
        },
        colorCode: {
            type: String,
            required: true,
            unique: true
        },
        colorStatus: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

const ColorModel = mongoose.model('colors', ColorSchema);
module.exports = ColorModel;