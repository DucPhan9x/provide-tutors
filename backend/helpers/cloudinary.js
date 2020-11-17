import cloudinary from "cloudinary";
import multer from "multer";

import { envVariables } from "../configs";

const {
    cloudName,
    api_key_cloud,
    api_secret_cloud
} = envVariables

cloudinary.v2.config({
    cloud_name: cloudName,
    api_key: api_key_cloud,
    api_secret: api_secret_cloud
});
export const upload = multer({ dest: 'uploads/' });

export const uploadSingle = (file) => {
    return new Promise(resolve => {
        cloudinary.v2.uploader.upload(file, {
                folder: 'single'
            })
            .then(result => {
                if (result) {
                    const fs = require('fs')
                    fs.unlinkSync(file)
                    resolve({
                        url: result.secure_url
                    })
                }
            })
    })
}