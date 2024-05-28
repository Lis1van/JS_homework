document.addEventListener('DOMContentLoaded', function() {

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    if (userId) {
        fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                const userDetails = document.getElementById('userDetails');
                userDetails.textContent = JSON.stringify(user, null, 2);
            })
            .catch(error => console.error('Ошибка:', error));
    } else {
        const userDetails = document.getElementById('userDetails');
        userDetails.textContent = 'Идентификатор пользователя не указан.';
    }
})

// Так и не разобрался. То ошибку выдает, то только 1-го пользователя показывает.
