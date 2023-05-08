

function encriptar() {
  var inputTexto = document.getElementById("inputTexto").value;
  var outputTexto = inputTexto.replace(/e/ig, "enter")
                              .replace(/o/ig, "ober")
                              .replace(/i/ig, "imes")
                              .replace(/a/ig, "ai")
                              .replace(/u/ig, "ufat");
  document.getElementById("texto").innerHTML = outputTexto;
  document.getElementById("texto2").value = outputTexto;
}

function desencriptar() {
  var inputTexto = document.getElementById("texto2").value;
  var outputTexto = inputTexto.replace(/ufat/ig, "u")
                              .replace(/ai/ig, "a")
                              .replace(/imes/ig, "i")
                              .replace(/ober/ig, "o")
                              .replace(/enter/ig, "e");
  document.getElementById("texto").innerHTML = outputTexto;
  document.getElementById("texto2").value = outputTexto;
}

function copiar() {
  var outputTexto = document.getElementById("texto2").value;
  var el = document.createElement('textarea');
  el.value = outputTexto;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert("Mensaje copiado al portapapeles: " + outputTexto);
}

