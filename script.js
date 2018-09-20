const emoji = [
    "zozo", 
    "kaga_anime",
    "daichan_anime",
    "sihan"
];

window.onload = function(){
    var form = document.forms.form;
    form.list.value = "";
    for(var i = 0; i < emoji.length; i++){
        form.list.value += ":" + emoji[i] + ":" + "\n";
    }
    gene();
}

function gene(){
    form.res.value = "";
    var lines = form.list.value.split("\n");
    var tmp = [];
    for(var i = 0; i < lines.length; i++){
        if(lines[i].length)tmp.push(lines[i]);
    }
    for(var y = 0; y < parseInt(form.H.value, 10); y++){
        if(y)form.res.value += "\n";
        for(var x = 0; x < parseInt(form.W.value, 10); x++){
            form.res.value += tmp[getRandomInt(tmp.length)];
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}