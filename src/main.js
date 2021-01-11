const htmllist = document.getElementById("htmllist");


//Html Page
function PushVides(Data) {
    const newListItem = document.createElement("iframe");
    Setting(newListItem, Data)
    htmllist.appendChild(newListItem);
}
fetch("/html.json").then(res => res.json()).then(Vids => {
    htmllist.firstElementChild.remove();
    Vids.forEach(PushVides);
})



//JS Page
const jslist = document.getElementById('jslist')
function JSPerVid(Data) {
    const newListItem = document.createElement("iframe");
    Setting(newListItem, Data)

    jslist.appendChild(newListItem);
}
fetch("/js.json").then(res => res.json()).then(Vids => {
    jslist.firstElementChild.remove();
    Vids.forEach(JSPerVid);
})


//PHP Page
const phplist = document.getElementById('phplist')
function PHPPerVid(Data) {
    const newListItem = document.createElement("iframe");
    Setting(newListItem, Data)
    phplist.appendChild(newListItem);
}
fetch("/php.json").then(res => res.json()).then(Vids => {
    phplist.firstElementChild.remove();
    Vids.forEach(PHPPerVid);
})

//PHP Page
const csslist = document.getElementById('csslist')
function CSSPerVid(Data) {
    const newListItem = document.createElement("iframe");
    Setting(newListItem, Data)
    csslist.appendChild(newListItem);
}
fetch("/css.json").then(res => res.json()).then(Vids => {
    csslist.firstElementChild.remove();
    Vids.forEach(CSSPerVid);
})




function Setting(newListItem, Data) {
    newListItem.src = Data;
    newListItem.frameborder = 0;
    // newListItem.width = 949
    // newListItem.height = 534
}

var QRCODE = new QRCode(document.getElementById('html'), {
    text: `${window.location.href}html`,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

QRCODE = new QRCode(document.getElementById('js'), {
    text: `${window.location.href}javascript`,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
QRCODE = new QRCode(document.getElementById('php'), {
    text: `${window.location.href}php`,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
QRCODE = new QRCode(document.getElementById('css'), {
    text: `${window.location.href}css`,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});





