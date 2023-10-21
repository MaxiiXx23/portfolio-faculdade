// Função responsavél por simular o "submit" de um formulário HTML5
function submitForm() {
    // A variável receberá o valor do input, "pegando" está informação através do name do input.
    let name = document.getElementsByName("nameUser")[0].value
    // Função que chama o modal de Alert do navegador.
    alert(`Olá ${name}, já recebi sua mensagem e estarei te respondendo o mais breve possível. Não vejo a hora do nosso bate-papo!`)
}