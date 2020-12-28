const nameRegex = /^[A-Za-z]{1,22}/;
const userNameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passRegex = /^[A-Za-z0-9/:@!#$^&_+*\(\)\[-`{-~]{6,24}/;
const phoneRegex = /(0)+([0-9]{9})\b/;

const listSubjects = [
    {
        Maths:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172516/single/maths_mogjw3.png",
    },
    {
        History:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172515/single/phy_wvlvmm.png",
    },
    {
        Physics:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172515/single/his_w3dc2b.png",
    },
    {
        Informatics:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172515/single/info_jijwf0.png",
    },
    {
        Literature:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172515/single/li_vju909.png",
    },
    {
        Biology:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172515/single/bio_ffynrb.png",
    },
    {
        Geography:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172515/single/geo_ri9sti.png",
    },
    {
        Art:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172515/single/english_gwih60.png",
    },
    {
        Chemistry:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172514/single/chem_a4gud7.png",
    },
    {
        English:
            "https://res.cloudinary.com/tutotring/image/upload/v1609172514/single/art_yffzwi.png",
    },
];
export const varConst = {
    nameRegex,
    emailRegexp,
    passRegex,
    phoneRegex,
    userNameRegex,
    listSubjects,
};
