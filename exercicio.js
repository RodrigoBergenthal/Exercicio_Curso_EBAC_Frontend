
        function validarFormulario() {
            // pego os valores dos campos A e B
            var campoA = parseFloat(document.getElementById("campoA").value);
            var campoB = parseFloat(document.getElementById("campoB").value);

            // Verifica se B é maior que A
            if (campoB > campoA) {
                // Exibe mensagem positiva
                document.getElementById("mensagem").innerHTML = "Formulário válido! B é maior que A.";
            } else {
                // Exibe mensagem negativa
                document.getElementById("mensagem").innerHTML = "Formulário inválido! B deve ser maior que A.";
            }

            // Evita o envio do formulário
            return false;
        }

        