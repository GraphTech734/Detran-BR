let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage()
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

function mostrarBotao() {
    const estado = document.getElementById('estado').value;
    const botao = document.getElementById('consultar');
    if (estado) {
        botao.style.display = 'block';
    } else {
        botao.style.display = 'none';
    }
}

function consultar() {
    const estado = document.getElementById('estado').value;
    window.location.href = estado;
}
