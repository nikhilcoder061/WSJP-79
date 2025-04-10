import React, { useContext } from 'react'
import { MainContext } from '../../../Context/Context';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MultipleImage() {

    const { API_BASE_URL, PRODUCT_URL, toastNotify } = useContext(MainContext);
    const { product_id } = useParams();

    const uploadImages = (event) => {
        event.preventDefault();
        const formData = new FormData();

        for (let image of event.target.other_image.files) {
            formData.append("other_image", image);
        }

        axios.post(API_BASE_URL + PRODUCT_URL + "/multipleimage/" + product_id, formData).then(
            (success) => {
                toastNotify(success.data.msg, success.data.status);
                if (success.data.status == 1) {
                    event.target.reset();
                }
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    return (
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg mt-2 border">
            <h2 className="text-2xl font-semibold mb-4">Images Upload</h2>
            <form className="grid grid-cols-3 gap-6" onSubmit={uploadImages}>
                <div>
                    <label className="block font-medium">Other Images</label>
                    <input
                        multiple
                        type="file"
                        name="other_image"
                        className="w-full p-2 border rounded"
                        required=""
                    />
                </div>
                <div className="col-span-3 flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Upload Images
                    </button>
                </div>
            </form>
        </div>
    )
}
