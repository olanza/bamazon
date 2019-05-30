$(document).ready(function() {
    populateStock();
});

var populateStock = () => {
    $.get("/products", (products) => {
        $.each(products, (param, eachObject) => {
            $("#products-div").append(`<tr>
<td><button type="button" class="btn btn-warning">
<i class="fas fa-cart-plus"></i>
</button></td>
<td class="itemId">${eachObject.id}</td>
<td class="productName">${eachObject.product_name}</td>
<td>${eachObject.department_name}</td>
<td>$ ${eachObject.price}</td>
<td>${eachObject.stock_quantity}</td>
</tr>`);
        });
    });
};


// this is where the code goes to add products to some type of cart div/modal, allow the customer to checkout through 
// either a redirect or confirmation, and then update the quantities in the database based on purchase. 