const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(

    {
        categoryName: {
            type: String,
            required: true,
            unique: true
        },
        categorySlug: {
            type: String,
            required: true,
            unique: true
        },
        categoryImageName: {
            type: String,
            default: null
        },
        categoryStatus: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

const CategoryModel = mongoose.model('categories', CategorySchema);
module.exports = CategoryModel;