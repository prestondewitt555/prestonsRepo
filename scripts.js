let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartList = document.getElementById("cart");

const addButtons = document.querySelectorAll(".add-to-cart");

function displayCart () {
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");

        li.textContent = item + " ";


        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function () {
            removeItem(index);
        };

        li.appendChild(deleteBtn);
        cartList.appendChild(li);
    
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("cart", JSON.stringify(cart));
}


function addItem(itemName) {
    cart.push(itemName);
    displayCart();
}


function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}


addButtons.forEach(button => {
    button.addEventListener("click", function(){
        const itemName = this.dataset.name;
        addItem(itemName);
    });
});



displayCart();



const clearBtn = document.getElementById("glozelle");


if (clearBtn) {
    clearBtn.addEventListener("click", function () {
        cart = [];
        localStorage.removeItem ("cart");
        displayCart();
        alert("Cart was Cleared.");
    });
}


const checkoutBtn = document.getElementById("rotel");

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function (){
        cart = [];
        localStorage.removeItem ("cart");
        displayCart();
        
    })
}
