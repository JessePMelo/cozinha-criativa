// Espera o DOM carregar completamente antes de rodar o código

document.addEventListener('DOMContentLoaded', () => {
    // Quando clicar em assinar, enviar o formulário
    const btnAssinarnewsletter = document.getElementById('btnAssinarnewsletter');
    // Quando clicar em cancelar, fechar o modal
    const btnCancelar = document.getElementById('btnCancelar');
    // Seleciona o dialog
    const newnsletterdialog = document.getElementById('newnsletterdialog');
    const formAssinarnewsletter = document.getElementById('formAssinarnewsletter');

    // Verifica se o botão "Assinar" e o formulário existem antes de adicionar o evento
    if (btnAssinarnewsletter && formAssinarnewsletter) {
        btnAssinarnewsletter.addEventListener('click', () => {
            // Enviar o formulário
            formAssinarnewsletter.submit();
        });
    }

    // Verifica se o botão "Cancelar" e o dialog existem antes de adicionar o evento
    if (btnCancelar && newnsletterdialog) {
        btnCancelar.addEventListener('click', () => {
            // Fechar o dialog
            newnsletterdialog.close();
        });
    }

    // Função para exibir o modal
    const showNewsletter = () => {
        setTimeout(() => {
            if (newnsletterdialog) {
                newnsletterdialog.showModal();
            }
        }, 3000);
    };

    // Chama a função showNewsletter após o carregamento completo da página
    showNewsletter();
});
