// eCommerce
var id = [], nameProduct = [], price = [], review = [];
var idNumber = 1;
var arrCounter = 0;
var arrSupId = [], arrSupName = [], arrSupPrice = [], arrSupReview = [];
var smallestNumber = 0



id[0] = 2, id[1] = parseInt(30), id[2] = 3, id[3] = 1, id[4] = 4;
nameProduct[0] = "mouse5", nameProduct[1] = "mouse4", nameProduct[2] = "mouse3", nameProduct[3] = "mouse2", nameProduct[4] = "mouse1";
price[0] = 50, price[1] = 40, price[2] = 30, price[3] = 20, price[4] = 10;
review[0] = 5, review[1] = 5, review[2] = 4, review[3] = 3, review[4] = 2;

OrderById()



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


function OrderById() {
    var counterId = id.length - 1;
    for (var i = 0; i < id.length; i++) {
        smallestNumber = id[i]
        for (var i2 = 0; i2 < id.length; i2++) {
            if (smallestNumber < id[i2]) {
                smallestNumber = id[i2];
            }
        }
        for (var i3 = 0; i3 < id.length; i3++) {
            if (smallestNumber == id[i3]) {
                arrSupId[counterId] = id[i3]
                arrSupName[counterId] = nameProduct[i3]
                arrSupPrice[counterId] = price[i3]
                arrSupReview[counterId] = review[i3]

                id[i3] = 0
                counterId--
            }
        }
    }
    for (var i = 0; i < arrSupId.length; i++) {
        console.log(arrSupId[i] + " | " + arrSupName[i] + " | " + arrSupPrice[i] + " | " + arrSupReview[i]);
    }
    id = arrSupId
    nameProduct = arrSupName
    price = arrSupPrice
    review = arrSupReview

    return id, nameProduct, price, review;
}


