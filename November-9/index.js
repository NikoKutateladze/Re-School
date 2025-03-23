var users = [
    { id: 1, name: "Alice", age: 20, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 17, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
    { id: 4, name: "David", age: 16, email: "david@example.com" },
    { id: 5, name: "Eve", age: 19, email: "Eve@example.com" },
];

function checkUser(user) {
    var userName = user.name;//Alice
    var loweredUserName = userName.toLowerCase();//alice
    var searchText = document.getElementById("search-text").value;//a

    if (loweredUserName.includes(searchText)) {
        return true;
    }
    return false;
}


function filterUsers() {
    console.log("user clicked on the button");

    var filteredUsers = users.filter(checkUser)

    console.log(filteredUsers);

    var ulElement = document.getElementById("result");
    ulElement.innerHTML = "";

    for (var i = 0; i < filteredUsers.length; i++) {
        var user =filteredUsers[i];

        var liElement = document.createElement("li");
        liElement.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.age}</p>
            <p>${user.email}</p>       
        `

        ulElement.appendChild(liElement);
    }
}



