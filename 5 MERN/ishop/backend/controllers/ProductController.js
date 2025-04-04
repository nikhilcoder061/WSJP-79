const generateUniqueImageName = require("../helping");
const ProductModel = require("../models/ProductModel");
const ProductRouter = require("../routers/ProductRouter");

class ProductController {

    read(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let product;

                    if (id) {
                        product = await ProductModel.findById(id);
                    } else {
                        product = await ProductModel.find();
                    }
                    resolve(
                        {
                            msg: "Products Found",
                            status: 1,
                            product
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

    create(data, file) {
        return new Promise(
            (resolve, reject) => {
                try {
                    // console.log(JSON.parse(data.color));
                    // return;
                    const newProductImageName = generateUniqueImageName(file.name);
                    const destination = "./Public/images/product/" + newProductImageName;
                    file.mv(
                        destination,
                        (error) => {
                            if (error) {
                                reject(
                                    {
                                        msg: "Product not Created due to image upload",
                                        status: 0
                                    }
                                )
                            } else {
                                if (data.name && data.slug) {
                                    const product = new ProductModel(
                                        {
                                            ...data,
                                            color: JSON.parse(data.color),
                                            main_image: newProductImageName
                                        }
                                    );
                                    product.save().then(
                                        (success) => {
                                            resolve(
                                                {
                                                    msg: "Product Created succesfullly",
                                                    status: 1
                                                }
                                            )
                                        }
                                    ).catch(
                                        (error) => {
                                            console.log(error);
                                            reject(
                                                {
                                                    msg: "Product not Created",
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


}

module.exports = ProductController