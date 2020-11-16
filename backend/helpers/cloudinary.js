import cloudinary from "cloudinary";
import multer from "multer";



cloudinary.v2.config({
    cloud_name: 'tutotring',
    api_key: '274767948479987',
    api_secret: '288eL9odJfgTrBDzm-839pqPXSQ'
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