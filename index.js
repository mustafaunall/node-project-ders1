require('dotenv').config()

const { PASSWORD_SECRET, PORT } = process.env

//console.log(PASSWORD_SECRET, PORT)

process.on('exit', (returnCode) => {
    console.log(`Programdan ${returnCode} kodu ile çıkıldı!`)
})