function increaseQuantity(index) {
    var quantityElement = document.getElementById('quantity_' + index);
    var quantity = parseInt(quantityElement.innerText, 10);
    if (quantity < 99) {
        quantityElement.innerText = (quantity + 1).toString().padStart(2, '0');
    }
}

function decreaseQuantity(index) {
    var quantityElement = document.getElementById('quantity_' + index);
    var quantity = parseInt(quantityElement.innerText, 10);
    if (quantity > 1) {
        quantityElement.innerText = (quantity - 1).toString().padStart(2, '0');
    }
}

function showHideProds(quantity, index) {
    // Custom functionality to show or hide products
}
