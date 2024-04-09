function filtrarIPs() {
    var texto = document.getElementById('texto').value;
    var ips = texto.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g);
    var uniqueIps = ips ? ips.filter((value, index, self) => {
        return self.indexOf(value) === index;
    }) : [];
    if (uniqueIps.length > 0) {
        document.getElementById('resultado').textContent = uniqueIps.join(', ');
        mostrarAvisoFiltrado();
    } else {
        document.getElementById('resultado').textContent = "Nenhum IP encontrado.";
        mostrarAvisoInvalido();
    }
}

function copiarIPs() {
    var resultado = document.getElementById('resultado');
    var range = document.createRange();
    range.selectNode(resultado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    mostrarAvisoCopiado();
}

function mostrarAvisoCopiado() {
    var copiedMsg = document.getElementById('copied-msg');
    copiedMsg.textContent = "IPs copiados!";
    copiedMsg.style.display = "block"; // Exibe o aviso
    setTimeout(function() {
        copiedMsg.style.display = "none"; // Oculta o aviso após 3 segundos
    }, 3000);
}

function mostrarAvisoFiltrado() {
    var filteredMsg = document.getElementById('filtered-msg');
    filteredMsg.textContent = "Texto filtrado!";
    filteredMsg.style.display = "block"; // Exibe o aviso
    setTimeout(function() {
        filteredMsg.style.display = "none"; // Oculta o aviso após 3 segundos
    }, 3000);
}

function mostrarAvisoInvalido() {
    var invalidMsg = document.getElementById('invalid-msg');
    invalidMsg.textContent = "Texto inválido!";
    invalidMsg.style.display = "block"; // Exibe o aviso
    setTimeout(function() {
        invalidMsg.style.display = "none"; // Oculta o aviso após 3 segundos
    }, 3000);
}
