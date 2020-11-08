var text = document.getElementById("txtWr").innerText,
    countTxt = text.length,
    wait = 200;
document.getElementById("txtWr").innerText = "";

var textWriter = (newtxt)=> {
    var nowText = document.getElementById("txtWr").innerText,
        nextText;
    if(nowText.length < countTxt) {
        nextText = newtxt.charAt(nowText.length);
    } else {
        nowText = text;
        nextText = "";
    }
    document.getElementById("txtWr").innerText = nowText + nextText;
};
setInterval("textWriter(text)",wait);
