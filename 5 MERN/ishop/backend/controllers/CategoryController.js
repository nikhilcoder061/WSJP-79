const CategoryModel = require("../models/CategoryModel")

class CategoryController {

    create(data) {
        return new Promise(
            (resolve, reject) => {
                try {
                    if (data.categoryName && data.categorySlug) {
                        const category = new CategoryModel(
                            {
                                ...data
                            }
                        );
                        category.save().then(
                            (success) => {
                                resolve(
                                    {
                                        msg: "Category Created succesfullly",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                console.log(error);
                                reject(
                                    {
                                        msg: "Category not Created",
                                        status: 0
                                    }
                                )
                            }
                        )
                    } else {
                        reject(
                            {
                                msg: "All fields are required",
                                status: 0
                            }
                        )
                    }

                } catch (error) {
                    console.log(error);
                    reject(
                        {
                            msg: "Internal Server error",
                            status: 0
                        }
                    )
                }
            }
        )
    }
}

module.exports = CategoryController