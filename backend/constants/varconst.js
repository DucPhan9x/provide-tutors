const nameRegex = /^[A-Za-z]{1,22}/;
const userNameRegex = /^[a-z0-9_-]{3,16}$/
const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passRegex = /^[A-Za-z0-9/:@!#$^&_+*\(\)\[-`{-~]{6,24}/;
const phoneRegex = /(0)+([0-9]{9})\b/;

export const varConst = {
    nameRegex,
    emailRegexp,
    passRegex,
    phoneRegex,
    userNameRegex

}