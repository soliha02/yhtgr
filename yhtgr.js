function fetchAndDisplayUsers() {
    fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
            const usersContainer = document.getElementById('users');
            usersContainer.innerHTML = ''; 

            data.users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';

                userCard.innerHTML = `
                    <img src="${user.image}" alt="${user.firstName} ${user.lastName}">
                    <h2>${user.firstName} ${user.lastName}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Username: ${user.username}</p>
                `;

                usersContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

fetchAndDisplayUsers();
  


  
