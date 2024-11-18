document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // evita o envio do formulario

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // cria um novo elemento de lista para o comentario
    const li = document.createElement('li');
    li.textContent = `${name}: ${comment}`;

    // adiciona o comentario a lista de comentarios
    document.getElementById('commentsList').appendChild(li);

    // limpa o formulario
    document.getElementById('commentForm').reset();
});