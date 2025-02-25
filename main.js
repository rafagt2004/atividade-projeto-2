const form = document.getElementById('form-cadastro');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome-contato').value;
    const telefone = document.getElementById('telefone').value;

    let linha = '<tr>';
    linha += `<td>${nome}</td>`;
    linha += `<td>${telefone}</td>`;
    linha += '</tr>';
    document.querySelector('tbody').innerHTML += linha;

});
