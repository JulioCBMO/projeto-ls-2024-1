document.getElementById('add-comment-btn').addEventListener('click', addComment);

function addComment() {
    // Pega os valores dos campos de entrada como um array de objetos
    const inputs = [
        { id: 'user-name', value: document.getElementById('user-name').value },
        { id: 'comment-input', value: document.getElementById('comment-input').value },
        { id: 'rating', value: document.getElementById('rating').value }
    ];

    // Filtra campos vazios
    const emptyInputs = inputs.filter(input => input.value === '');

    if (emptyInputs.length > 0) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Mapeia os valores para criar os elementos HTML
    const elements = inputs.map(input => {
        if (input.id === 'user-name') {
            return createElement('h4', input.value);
        } else if (input.id === 'comment-input') {
            return createElement('p', input.value);
        } else if (input.id === 'rating') {
            const stars = '★'.repeat(input.value) + '☆'.repeat(5 - input.value);
            return createElement('p', `Avaliação: ${stars}`);
        }
    });

    // Reduz os elementos para um único container de comentários
    const newComment = elements.reduce((container, element) => {
        container.appendChild(element);
        return container;
    }, document.createElement('div'));

    newComment.className = 'comment';

    // Adiciona o novo comentário ao container de comentários
    document.getElementById('comments-container').appendChild(newComment);

    // Limpa os campos de entrada
    inputs.forEach(input => document.getElementById(input.id).value = input.id === 'rating' ? '5' : '');
}

// Função para criar os elementos HTML
function createElement(tag, textContent) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    return element;
}
