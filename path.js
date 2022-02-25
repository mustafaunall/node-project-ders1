const fs = require('fs')

const writeFile = async (filePath, content) => {
    return new Promise((res, rej) => {
        fs.writeFile(filePath, content, async (err) => {
            if (err) return rej(err)
            res('Dosyaya başarıyla yazıldı.')
        })
    })
}
const appendFile = async (filePath, content) => {
    return new Promise((res, rej) => {
        fs.appendFile(filePath, content, async (err) => {
            if (err) return rej(err)
            res('Dosyaya başarıyla yazıldı.')
        })
    })
}

writeFile('a.txt', '1 2 3')
    .then(() => {
        appendFile('a.txt', ' 4 5 6')
            .then(() => {
                appendFile('a.txt', ' 7 8 9')
                .then(() => { console.log('İşlemler bitti.') })
            })
    })
    .catch(e => { console.log('Hata çıktı!', e.message) })