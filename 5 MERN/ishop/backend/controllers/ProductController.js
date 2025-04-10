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
                        product = await ProductModel.findById(id).populate(["category_id", "color"]);
                    } else {
                        product = await ProductModel.find().populate(["category_id", "color"]);
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

    update(id, flag) {
        return new Promise(
            async (resolve, reject) => {

                try {
                    const product = await ProductModel.findById(id);
                    ProductModel.updateOne(
                        { _id: id },
                        {
                            $set: {
                                status: flag == 2 ? !product.status : product.status,
                                stock: flag == 1 ? !product.stock : product.stock,
                                top_selling: flag == 3 ? !product.top_selling : product.top_selling
                            }
                        }
                    ).then(
                        (success) => {
                            if (product.status == false) {
                                resolve(
                                    {
                                        msg: "Product updated",
                                        status: 1
                                    }
                                )
                            } else {
                                resolve(
                                    {
                                        msg: "Product updated",
                                        status: 1
                                    }
                                )
                            }

                        }
                    ).catch(
                        (error) => {
                            console.log(error);
                            reject(
                                {
                                    msg: "Status Not Updated",
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

    multipleImage(id, allFiles) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const product = await ProductModel.findById(id);
                    if (product) {

                        let currentImage = product.other_image;
                        const allNewFiles = Array.isArray(allFiles) ? allFiles : [allFiles];

                        for (let file of allNewFiles) {
                            const newProductImageName = generateUniqueImageName(file.name);
                            currentImage.push(newProductImageName);
                            const destination = "./Public/images/product/" + newProductImageName;
                            file.mv(destination)
                        }

                        ProductModel.updateOne(
                            { _id: id },
                            {
                                $set: {
                                    other_image: currentImage
                                }
                            }
                        ).then(
                            (success) => {
                                resolve(
                                    {
                                        msg: "Images uploaded succesfullly",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                console.log(error);
                                reject(
                                    {
                                        msg: "Images not uploaded",
                                        status: 0
                                    }
                                )
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Product not found",
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

    editProduct(id, data, file) {
        return new Promise(
            (resolve, reject) => {
                try {
                    if (file) {
                        const newProductImageName = generateUniqueImageName(file.name);
                        const destination = "./Public/images/product/" + newProductImageName;
                        file.mv(
                            destination,
                            (error) => {
                                if (error) {
                                    reject(
                                        {
                                            msg: "Product not updated due to image",
                                            status: 0
                                        }
                                    )
                                } else {
                                    ProductModel.updateOne(
                                        { _id: id },
                                        {
                                            $set: {
                                                ...data,
                                                color: JSON.parse(data.color),
                                                main_image: newProductImageName
                                            }
                                        }
                                    ).then(
                                        (success) => {
                                            resolve(
                                                {
                                                    msg: "Product updated",
                                                    status: 1
                                                }
                                            )
                                        }
                                    ).catch(
                                        (error) => {
                                            reject(
                                                {
                                                    msg: "Product not updated",
                                                    status: 0
                                                }
                                            )
                                        }
                                    )
                                }
                            }
                        )

                    } else {
                        ProductModel.updateOne(
                            { _id: id },
                            {
                                $set: {
                                    ...data,
                                    color: JSON.parse(data.color)
                                }
                            }
                        ).then(
                            (success) => {
                                resolve(
                                    {
                                        msg: "Product updated",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                reject(
                                    {
                                        msg: "Product not updated",
                                        status: 0
                                    }
                                )
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

module.exports = ProductController