// select all images
var images = document.querySelectorAll('img');

// attach click event listener on each image
images.forEach(function(image) {
  image.addEventListener('click', function(event) {
    // Obtendo a imagem clicada
    var img = event.target;
    // Criando um elemento div para exibir a imagem ampliada
    var modal = document.createElement('div');
    modal.classList.add('modal');
    // Adicionando a imagem ampliada dentro do modal
    modal.appendChild(img.cloneNode());
    // Adicionando o modal ao corpo do documento
    document.body.appendChild(modal);
    // escondendo a imagem original
    img.classList.add("hide-image")
    // Adicionando a classe que amplia e centraliza a imagem
    modal.classList.add('modal-open');
    // Adicionando o event listener para fechar o modal clicando fora dele
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        // remove the modal from the page
        modal.remove();
        //show the original image
        img.classList.remove("hide-image")
        // remove the class "modal-open" from the body
        document.body.classList.remove('modal-open');
      }
    });
    document.body.classList.add('modal-open');
  });
});
