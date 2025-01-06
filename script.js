document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const url = `https://www.codewars.com/api/v1/users/${username}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const userDataDiv = document.getElementById('userData');
            userDataDiv.innerHTML = '';
            
            const userCard = document.createElement('div');
            userCard.className = 'card';
            
            const userInfo = `
                <p><strong>Felhasználónév:</strong> ${data.username}</p>
                <p><strong>Név:</strong> ${data.name}</p>
                <p><strong>Klán:</strong> ${data.clan}</p>
                <p><strong>Programozási nyelvek:</strong> ${Object.keys(data.ranks.languages).join(', ')}</p>
                <p><strong>JavaScript rang:</strong> ${data.ranks.languages.javascript.rank}</p>
            `;
            
            userCard.innerHTML = userInfo;
            userDataDiv.appendChild(userCard);
        })
        .catch(error => console.error('Hiba történt:', error));
});
