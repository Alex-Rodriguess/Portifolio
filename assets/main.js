function abrirmenu() {
    let BarraMenuAberto = document.getElementById('barra-menu');
    if (BarraMenuAberto.style.width == "0px") {
        BarraMenuAberto.style.width = "200px";
    } else {
        BarraMenuAberto.style.width = "0px";
    }
}

function 