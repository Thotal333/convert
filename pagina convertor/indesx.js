function Enviar() {
    var medida = document.getElementById("select").value;

    if (medida !== "sel") {
        // Redireciona para home.html com o parâmetro da medida
        window.location.href = `./home.html?medida=${medida}`;
    } else {
        alert('Por favor, selecione uma unidade de medida.');
    }
}
