var app = {
    init: function () {
        console.log("init inside app!");
        $("title").text("Bar prof");
        $.getJSON("data.json")
            .done(app.onSuccess)
            .fail(app.onError);

    },
    onSuccess: function (jsonData) {
        console.log(jsonData);
        jsonData.productList.forEach(element => {
            let productRow = `<div class="menu-table-row">
            <div class="menu-table-cell">${element.product}</div>
            <div class="menu-table-cell">${element.price} euro</div>
            </div>`;
            $("#menu-table").append(productRow);
        });

    },

    onError: function (e) {
        console.log("error!");
        console.log(JSON.stringify(e));
    }
};



$(document).ready(app.init);