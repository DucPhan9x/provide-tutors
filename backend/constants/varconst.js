const nameRegex = /^[A-Za-z0-9]{3,22}/;
const userNameRegex = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/
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