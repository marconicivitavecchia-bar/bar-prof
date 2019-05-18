var app = {
    baseURL: "https://marconi-bar.firebaseio.com/bar-prof",
    productList: {},
    init: function () {
        console.log("init inside app!");
        $("title").text("Bar prof");
        // Get the product list from the database
        app.getProductList();
    },
    getProductList: function() {
        // make a HTTP GET request
        $.getJSON(`${app.baseURL}.json`)
        .done(app.onSuccess)
        .fail(app.onError);
    },
    onSuccess: function (jsonData) {
        console.log(jsonData);
        // Delete the current table
        $("#menu-table-body").html("");
        // save data in a local variable
        app.productList = jsonData.productList;
        // update the list
        // for each element, get both the object (element) and its index (idx) in the list
        // create a different data-id attribute for each plus button
        app.productList.forEach((element, idx) => {
            let productRow = `<div class="menu-table-row">
            <div class="menu-table-cell">${element.product}</div>
            <div class="menu-table-cell">${element.price} euro</div>
            <div class="menu-table-cell">${element.quantity} <span data-id="${idx}" class="add-button">+</span></div>
            </div>`;
            $("#menu-table-body").append(productRow);
        });
        // associate the event to each plus button
        $(".add-button").on("click", app.addQuantityByOne);
        // set the cursor as pointer
        $(".add-button").css("cursor", "pointer");
    },
    addQuantityByOne: function () {
        // get the "data-id" attribute with the "data" function of jquery
        let id = $(this).data("id");
        // create the json body for the PUT request
        var jsonData = JSON.stringify(app.productList[id].quantity+1);
        // compose the full URL for the request
        var fullURL = app.baseURL + '/productList/' + id + '/quantity.json';
        // make the HTTP PUT request
        $.ajax({
            type: "PUT",
            url: fullURL,
            contentType: "application/json",
            data: jsonData
        }).done(app.onPutSuccess).fail(app.onError);
    },
    onPutSuccess: function(responseBody) {
        console.log('On PUT success:');
        console.log(responseBody);
        // refresh the list
        app.getProductList();
    },
    onError: function (e) {
        console.log("error!");
        console.log(JSON.stringify(e));
    }
};

$(document).ready(app.init);