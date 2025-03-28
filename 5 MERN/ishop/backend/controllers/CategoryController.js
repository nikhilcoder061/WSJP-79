const generateUniqueImageName = require("../helping");
const CategoryModel = require("../models/CategoryModel")

class CategoryController {

    create(data, file) {
        return new Promise(
            (resolve, reject) => {
                try {
                    const newCategoryImageName = generateUniqueImageName(file.name);
                    const destination = "./Public/images/category/" + newCategoryImageName;
                    file.mv(
                        destination,
                        (error) => {
                            if (error) {
                                reject(
                                    {
                                        msg: "Category not Created due to image upload",
                                        status: 0
                                    }
                                )
                            } else {
                                if (data.categoryName && data.categorySlug) {
                                    const category = new CategoryModel(
                                        {
                                            ...data,
                                            categoryImageName: newCategoryImageName
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
                            }
                        }
                    )
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

    read(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let category;

                    if (id) {
                        category = await CategoryModel.findById(id);
                    } else {
                        category = await CategoryModel.find();
                    }
                    resolve(
                        {
                            msg: "Category Found",
                            status: 1,
                            category
                        }
                    )

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

    delete(id) {
        return new Promise(
            (resolve, reject) => {
                try {
                    CategoryModel.deleteOne({ _id: id }).then(
                        (success) => {
                            resolve(
                                {
                                    msg: "Category delete Successfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            reject(
                                {
                                    msg: "Category not deleted",
                                    status: 0
                                }
                            )
                        }
                    )
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