const fetchItems = async () => {
    const response = await fetch("http://localhost:3000/items");
    const items = await response.json();

    const itemsList = document.getElementById("itemsList");
    itemsList.innerHTML = "";

    items.forEach((item) => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
        <span>${item.name} - $${item.price}</span>
        <div>
        <button onclick="editItem(${item.id})">Edit</button>
          <button onclick="deleteItem(${item.id})">Delete</button>
        </div>
      `;
        itemsList.appendChild(div);
    });
};

const addItem = async () => {
    const name = document.getElementById("itemName").value;
    const price = document.getElementById("itemPrice").value;
    
    if (!name || !price) {
        alert("Please fill the inputs");
    } else {
        const dataToSend = {
            name: name,
            price: price
        };
        const jsonToSend = JSON.stringify(dataToSend);

        const response = await fetch("http://localhost:3000/items", {
            method: "POST",
            body: jsonToSend,
            headers: { "Content-Type": "Application/json"},
        });

        if (response.ok) {
            fetchItems();
        }
    }
    
}
const deleteItem = async (id) => {
    const response = await fetch(`http://localhost:3000/items/${id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        fetchItems();
    }
}
const editItem = async (id) => {
    const name = prompt("Enter new Name");
    const price = prompt("Enter new price");

    if (!name || !price) {
        alert("Invalid inputs");
    } else {
        const dataToSend = {
            name: name,
            price: price,
        };
        const jsonToSend = JSON.stringify(dataToSend);


        const response = await fetch(`http://localhost:3000/items/${id}`, {
            method: "PUT",
            body: jsonToSend,
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (response.ok) {
            fetchItems()
        }
    }
}
fetchItems();