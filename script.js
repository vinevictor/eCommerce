// eCommerce
var id = [], nameProduct = [], price = [], review = [];
var idNumber = 1
var arrCounter = 0
var search

search = parseInt(prompt("Digite a ID do produto."))
SearchById(search);


function Registration() {
    id[arrCounter] = idNumber;
    nameProduct[arrCounter] = prompt("Nome do produto:");
    price[arrCounter] = parseInt(prompt("Preço do produto:"));
    review[arrCounter] = parseInt(prompt("Avaliação 1-5:"));
    idNumber++;
    arrCounter++;
    return id, nameProduct, price, review;
};

function SearchById(search) {
    for (var i = 0; i < id.length; i++) {
        if (search == id[i]) {
            console.log(id[i] + " | " + nameProduct[i] + " | " + price[i] + " | " + review[i]);
        };
    }
}

