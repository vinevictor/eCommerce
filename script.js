// eCommerce
var id = [], nameProduct = [], price = [], review = [];
var idNumber = 1;
var arrCounter = 0;
var arrSupId = [], arrSupName = [], arrSupPrice = [], arrSupReview = [];
var counterArraySup = 0

id[0] = 2, id[1] = parseInt(30), id[2] = 3, id[3] = 1, id[4] = 4;
nameProduct[0] = "mouse5", nameProduct[1] = "mouse4", nameProduct[2] = "mouse3", nameProduct[3] = "mouse2", nameProduct[4] = "mouse1";
price[0] = parseInt(40), price[1] = parseInt(50), price[2] = parseInt(30), price[3] = parseInt(20), price[4] = parseInt(10);
review[0] = parseInt(2), review[1] = parseInt(5), review[2] = parseInt(3), review[3] = parseInt(5), review[4] = parseInt(4);

function Registration() {
    id[arrCounter] = idNumber;
    nameProduct[arrCounter] = prompt("Nome do produto:");
    price[arrCounter] = parseInt(prompt("Preço do produto:"));
    review[arrCounter] = parseInt(prompt("Avaliação 1-5:"));
    idNumber++;
    arrCounter++;
    return id, nameProduct, price, review;
};

function SearchById() {
    var search = parseInt(prompt("Digite o ID do Produto."))
    for (var i = 0; i < id.length; i++) {
        if (search == id[i]) {
            console.log(id[i] + " | " + nameProduct[i] + " | " + price[i] + " | " + review[i]);
        };
    }
};

function SearchByName(nameProduct) {
    var search = prompt("Digite o Nome do Produto.");
    for (var i = 0; i < id.length; i++) {
        if (search == nameProduct[i]) {
            console.log(nameProduct[i] + " | " + " ID = " + id[i]);
        }
    }
};


function OrderById() {
    arrSupId = [];
    arrSupName = [];
    arrSupPrice = [];
    arrSupReview = [];
    counterArraySup = id.length - 1;
    var smallestNumber = 0;
    for (var i = 0; i < id.length; i++) {
        smallestNumber = id[i]
        for (var i2 = 0; i2 < id.length; i2++) {
            if (smallestNumber < id[i2]) {
                smallestNumber = id[i2];
            }
        }
        for (var i3 = 0; i3 < id.length; i3++) {
            if (smallestNumber == id[i3]) {
                arrSupId[counterArraySup] = parseInt(id[i3])
                arrSupName[counterArraySup] = nameProduct[i3]
                arrSupPrice[counterArraySup] = parseInt(price[i3])
                arrSupReview[counterArraySup] = parseInt(review[i3])

                id[i3] = 0
                counterArraySup--
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


};

function OrderByPrice() {
    arrSupId = [];
    arrSupName = [];
    arrSupPrice = [];
    arrSupReview = [];
    counterArraySup = 0;
    var biggestPrice = 0;
    for (var i = 0; i < price.length; i++) {
        biggestPrice = price[i];
        for (var i2 = 0; i2 < price.length; i2++) {
            if (biggestPrice < price[i2]) {
                biggestPrice = price[i2]
            }
        }
        for (var i3 = 0; i3 < price.length; i3++) {
            if (biggestPrice == price[i3]) {
                arrSupId[counterArraySup] = parseInt(id[i3])
                arrSupName[counterArraySup] = nameProduct[i3]
                arrSupPrice[counterArraySup] = parseInt(price[i3])
                arrSupReview[counterArraySup] = parseInt(review[i3])
                counterArraySup++
                price[i3] = 0

            }
        }
    }
    for (var i = 0; i < arrSupId.length; i++) {
        console.log(arrSupId[i] + " | " + arrSupName[i] + " | " + arrSupPrice[i] + " | " + arrSupReview[i]);
    }
    id = arrSupId;
    nameProduct = arrSupName;
    price = arrSupPrice;
    review = arrSupReview;
};

function OrderByReview() {
    arrSupId = [];
    arrSupName = [];
    arrSupPrice = [];
    arrSupReview = [];
    counterArraySup = 0;
    var biggestReview = 0
    for (var i = 0; i < id.length; i++) {
        biggestReview = review[i]
        for (var i2 = 0; i2 < id.length; i2++) {
            if (biggestReview < review[i2]) {
                biggestReview = parseInt(review[i2]);
            }
        }
        for (var i3 = 0; i3 < id.length; i3++) {
            if (biggestReview == review[i3] && biggestReview != 0) {
                arrSupId[counterArraySup] = parseInt(id[i3]);
                arrSupName[counterArraySup] = nameProduct[i3];
                arrSupPrice[counterArraySup] = parseInt(price[i3]);
                arrSupReview[counterArraySup] = parseInt(review[i3]);
                counterArraySup++;
                review[i3] = 0;
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


}

function UpdatePrice() {
    var search = parseInt(prompt("Digite o ID do Produto que queira atualizar o Preço."))
    for (var i = 0; i < id.length; i++) {
        if (search == id[i]) {
            price[i] = parseInt(prompt("Digite o Preço."))
            console.log("Preço atualizado.")
        }
    }

}
// OrderById();
// OrderByPrice();
// OrderByReview();
UpdatePrice();




