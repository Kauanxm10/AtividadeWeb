document.getElementById("meuFormulario").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "Mandado com sucesso " + nome + ". Obrigado pelo Feedback!";
  });