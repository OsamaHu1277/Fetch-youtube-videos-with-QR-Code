const express = require("express")
const app = express()
const Youtube = require('youtube-sr')
const fs = require('fs')




app.use(express.static("src"));
app.use(express.static("pages"));
app.use(express.static("Vids"));
app.use(express.static("packages"));


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/main.html");
});


//HTML QR PAGE
app.get('/html', function (request, response) {
    response.sendFile(__dirname + "/pages/html.html")
    GetVids("PLDoPjvoNmBAyXCAQMLhDRZsLi_HurqTBZ", "html")
})

app.get('/javascript', function (request, response) {
    response.sendFile(__dirname + "/pages/javascript.html")
    GetVids("PLDoPjvoNmBAw6p0z0Ek0OjPzeXoqlFlCh", "js")
})

app.get('/php', function (request, response) {
    response.sendFile(__dirname + "/pages/php.html")
    GetVids("PLDoPjvoNmBAzH72MTPuAAaYfReraNlQgM", "php")
})

app.get('/css', function (request, response) {
    response.sendFile(__dirname + "/pages/css.html")
    GetVids("PLDoPjvoNmBAyEyQaHOHO1HJtmSgGt07VC", "css")
})


async function GetVids(id, lang) {
    var Vids = await Youtube.getPlaylist(id)
    var Path = require(__dirname + `/Vids/${lang}.json`)
    if (Path.length === 0) {
        for (let i = 0; i < Vids.videos.length; i++) {
            Path.push(`https://www.youtube.com/embed/${Vids.videos[i].id}`)
            fs.writeFileSync(`Vids/${lang}.json`, JSON.stringify(Path, null, 4))
        }
    }
}

const listener = app.listen("3000", () => {
    console.log("app is listening on port " + listener.address().port);
});