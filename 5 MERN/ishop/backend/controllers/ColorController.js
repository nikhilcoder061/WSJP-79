const ColorModel = require("../models/ColorModel");
const ColorRouter = require("../routers/ColorRouter");


class ColorController {
    create(data, file) {
        return new Promise(
            (resolve, reject) => {
                try {
                    if (data.colorName && data.colorSlug && data.colorCode) {
                        const color = new ColorModel(
                            {
                                ...data
                            }
                        );
                        color.save().then(
                            (success) => {
                                resolve(
                                    {
                                        msg: "Color Created succesfullly",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                console.log(error);
                                reject(
                                    {
                                        msg: "Color not Created",
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

    read(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let color;

                    if (id) {
                        color = await ColorModel.findById(id);
                    } else {
                        color = await ColorModel.find();
                    }
                    resolve(
                        {
                            msg: "Color Found",
                            status: 1,
                            color
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
                    ColorModel.deleteOne({ _id: id }).then(
                        (success) => {
                            resolve(
                                {
                                    msg: "Color delete Successfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            reject(
                                {
                                    msg: "Color not deleted",
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

module.exports = ColorController