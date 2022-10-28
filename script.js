// eCommerce
var id = [], nameProduct = [], price = [], review = [];
var idNumber = 1
var arrCounter = 0


Registration();
SearchByName();


function Registration() {
    id[arrCounter] = idNumber;
    nameProduct[arrCounter] = prompt("Nome do produto:");
    price[arrCounter] = parseInt(prompt("Preço do produto:"));
    review[arrCounter] = parseInt(prompt("Avaliação 1-5:"));
    idNumber++;
    arrCounter++;
    return id, nameProduct, price, review;
};

function SearchById(id) {
    var search = parseInt(prompt("Digite o ID do Produto."))
    for (var i = 0; i < id.length; i++) {
        if (search == id[i]) {
            console.log(id[i] + " | " + nameProduct[i] + " | " + price[i] + " | " + review[i]);
        };
    }
}

function SearchByName(nameProduct) {
    var search = prompt("Digite o Nome do Produto.");
    for (var i = 0; i < id.length; i++) {
        if (search == nameProduct[i]) {
            console.log(nameProduct[i] + " | " + " ID = " + id[i]);
        }
    }
}

function OrderById(id) {
    for (var i = 0; i < id.length; i++) {
        console.log(id[i] + " | " + nameProduct[i] + " | " + price[i] + " | " + review[i]);

    }
}

