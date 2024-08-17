// JavaScript para manejar la inserción de comentarios

document.getElementById('insertarComentario').addEventListener('click', function() {

    // Obtener el comentario del textarea
    
    const comentario = document.getElementById('comentario').value;

    // Crear un nuevo elemento <li>
    const nuevoComentario = document.createElement('li');
    nuevoComentario.textContent = comentario;

    // Agregar el nuevo comentario a la lista
    document.getElementById('listaComentarios').appendChild(nuevoComentario);

    // Limpiar el textarea después de agregar el comentario
    document.getElementById('comentario').value = '';
});
