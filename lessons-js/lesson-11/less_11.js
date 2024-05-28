// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

function displayCarts(carts) {
    const container = document.getElementById('carts-container');

    carts.forEach(cart => {
        const cartDiv = document.createElement('div');
        cartDiv.className = 'cart';

        const cartId = document.createElement('div');
        cartId.textContent = `Cart ID: ${cart.id}`;
        cartDiv.appendChild(cartId);

        const userId = document.createElement('div');
        userId.textContent = `User ID: ${cart.userId}`;
        cartDiv.appendChild(userId);

        const totalProducts = document.createElement('div');
        totalProducts.textContent = `Total Products: ${cart.totalProducts}`;
        cartDiv.appendChild(totalProducts);

        const totalQuantity = document.createElement('div');
        totalQuantity.textContent = `Total Quantity: ${cart.totalQuantity}`;
        cartDiv.appendChild(totalQuantity);

        const total = document.createElement('div');
        total.textContent = `Total: ${cart.total}`;
        cartDiv.appendChild(total);

        const discountedTotal = document.createElement('div');
        discountedTotal.textContent = `Discounted Total: ${cart.discountedTotal}`;
        cartDiv.appendChild(discountedTotal);

        const productsTitle = document.createElement('div');
        productsTitle.textContent = 'Products:';
        cartDiv.appendChild(productsTitle);

        const productsList = document.createElement('ul');
        cart.products.forEach(product => {
            const productItem = document.createElement('li');
            productItem.textContent = `Product ID: ${product.id}, Title: ${product.title}, Price: ${product.price}, Quantity: ${product.quantity}, Total: ${product.total}, Discount Percentage: ${product.discountPercentage}, Discounted Price: ${product.discountedPrice}`;
            productsList.appendChild(productItem);
        });
        cartDiv.appendChild(productsList);

        container.appendChild(cartDiv);
    });
}

fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
        displayCarts(data.carts);
    })
    .catch(error => console.error('Error fetching carts:', error));

//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні
//     бути список під час відображення.

function displayRecipes(recipes) {
    const container = document.getElementById('recipes-container');

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';

        const title = document.createElement('div');
        title.textContent = `Title: ${recipe.title}`;
        recipeDiv.appendChild(title);

        const description = document.createElement('div');
        description.textContent = `Description: ${recipe.description}`;
        recipeDiv.appendChild(description);

        const ingredientsTitle = document.createElement('div');
        ingredientsTitle.textContent = 'Ingredients:';
        recipeDiv.appendChild(ingredientsTitle);

        const ingredientsList = document.createElement('ul');
        ingredientsList.className = 'ingredients';
        recipe.ingredients.forEach(ingredient => {
            const ingredientItem = document.createElement('li');
            ingredientItem.textContent = ingredient;
            ingredientsList.appendChild(ingredientItem);
        });
        recipeDiv.appendChild(ingredientsList);

        container.appendChild(recipeDiv);
    });
}

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        displayRecipes(data.recipes);
    })
    .catch(error => console.error('Error fetching recipes:', error));

//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

// Получаем список пользователей
fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById('userList');
        users.forEach(user => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `lesson_11_add.html?id=${user.id}`;
            link.textContent = `${user.id} - ${user.name}`;
            listItem.appendChild(link);
            userList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Ошибка:', error));

// Что-то я так и не разобрался с этим заданием. Меня по ссылке из задания даже сайт не прогружается.
// Выдает ошибку связанную с CORS. Список то есть, то нет его на странице в браузере.