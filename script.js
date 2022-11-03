// eCommerce
var id = [], nameProduct = [], price = [], review = [];
var idNumber = 1;
var arrCounter = 0, arrCounterShopCart = 0;
var arrSupId = [], arrSupName = [], arrSupPrice = [], arrSupReview = [];
var counterArraySup = 0
var shopCartProducts = [], shopCartQuantity = [], shopCartPrice = [];
var arrSupShopCartProducts = [], arrSupShopCartQuantity = [], arrSupShopCartPrice = [];
var product, quantity = 0;


var repeat = true;



function Registration() {
    var repeatRegistration = true
    while (repeatRegistration) {
        id[arrCounter] = idNumber;
        nameProduct[arrCounter] = prompt("Nome do produto:");
        price[arrCounter] = parseInt(prompt("Preço do produto:"));
        review[arrCounter] = parseInt(prompt("Avaliação 1-5:"));
        idNumber++;
        console.log("Produto Cadastrado.")
        console.log("ID:" + id[arrCounter] + " | " + " Nome: " + nameProduct[arrCounter] + " | " + "Preço: " + price[arrCounter] + " | " + " Avaliação: " + review[arrCounter]);
        arrCounter++;
        var stopRegistration = prompt("Deseja Cadastrar Mais Produtos? s/n");
        if (stopRegistration == "n" || stopRegistration == "N") {
            repeatRegistration = false;
        }
    }
    return id, nameProduct, price, review;
};

function SearchById() {
    var search = parseInt(prompt("Digite o ID do Produto."))
    for (var i = 0; i < id.length; i++) {
        if (search == id[i]) {
            console.log("ID:" + id[i] + " | " + " Nome: " + nameProduct[i] + " | " + "Preço: " + price[i] + " | " + " Avaliação: " + review[i]);
        };
    }
};

function SearchByName() {
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
            if (smallestNumber == id[i3] && smallestNumber != 0) {
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
        console.log("ID:" + arrSupId[i] + " | " + " Nome: " + arrSupName[i] + " | " + "Preço: " + arrSupPrice[i] + " | " + " Avaliação: " + arrSupReview[i]);
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
    for (var i = 0; i < id.length; i++) {
        biggestPrice = price[i];
        for (var i2 = 0; i2 < id.length; i2++) {
            if (biggestPrice < price[i2]) {
                biggestPrice = price[i2]
            }
        }
        for (var i3 = 0; i3 < id.length; i3++) {
            if (biggestPrice == price[i3] && biggestPrice != 0) {
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
        console.log("ID:" + arrSupId[i] + " | " + " Nome: " + arrSupName[i] + " | " + "Preço: " + arrSupPrice[i] + " | " + " Avaliação: " + arrSupReview[i]);
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
        var counter4 = 0

        for (var i3 = 0; i3 < id.length; i3++) {
            if (biggestReview == review[i3] && counter4 == 0) {
                arrSupId[counterArraySup] = parseInt(id[i3]);
                arrSupName[counterArraySup] = nameProduct[i3];
                arrSupPrice[counterArraySup] = parseInt(price[i3]);
                arrSupReview[counterArraySup] = parseInt(review[i3]);
                counterArraySup++;
                counter4++;
                review[i3] = 0;
            }
        }

    }

    for (var i = 0; i < arrSupId.length; i++) {
        console.log("ID:" + arrSupId[i] + " | " + " Nome: " + arrSupName[i] + " | " + "Preço: " + arrSupPrice[i] + " | " + " Avaliação: " + arrSupReview[i]);
    }
    id = arrSupId
    nameProduct = arrSupName
    price = arrSupPrice
    review = arrSupReview


};

function UpdatePrice() {
    var search = parseInt(prompt("Digite o ID do Produto que queira atualizar o Preço."))
    for (var i = 0; i < id.length; i++) {
        if (search == id[i]) {
            price[i] = parseInt(prompt("Digite o Preço."))
            console.log("Preço atualizado.")
        }
    }

};

function DeleteProduct() {
    arrSupId = [];
    arrSupName = [];
    arrSupPrice = [];
    arrSupReview = [];

    counterArraySup = 0
    var search = parseInt(prompt("Digite o ID do Produto que deseja EXCLUIR."))
    for (var i = 0; i < id.length; i++) {
        if (search == id[i] && i < id.length - 1) {
            arrSupId[counterArraySup] = parseInt(id[i + 1]);
            arrSupName[counterArraySup] = nameProduct[i + 1];
            arrSupPrice[counterArraySup] = parseInt(price[i + 1]);
            arrSupReview[counterArraySup] = parseInt(review[i + 1]);
            arrCounter = arrCounter - 1;
            counterArraySup++
            i++;
        } else if (search == id[i] && i == id.length - 1) {

        }
        else {
            arrSupId[counterArraySup] = parseInt(id[i]);
            arrSupName[counterArraySup] = nameProduct[i];
            arrSupPrice[counterArraySup] = parseInt(price[i]);
            arrSupReview[counterArraySup] = parseInt(review[i]);
            counterArraySup++
        }
    }
    console.log("Produto deletado com sucesso.")
    id = arrSupId;
    nameProduct = arrSupName;
    price = arrSupPrice;
    review = arrSupReview;

};

function Options() {
    console.log("eCommerce Vinicius Victor;");
    var options = parseInt(prompt("Digite 1 - Cadastrar um Produto | 2 - Procurar por ID | 3 - Procurar por Nome | 4 - Ordenar por ID | 5 - Ordenar por Preço | 6 - Ordenar por Avaliação | 7 - Atualizar Preço | 8 - Deletar Produto | 9 - Encerrar Programa"))
    if (options == 1) {
        console.clear();
        Registration();
    } else if (options == 2) {
        console.clear();
        SearchById();
    } else if (options == 3) {
        console.clear();
        SearchByName();
    } else if (options == 4) {
        console.clear();
        OrderById();
    } else if (options == 5) {
        console.clear();
        OrderByPrice();
    } else if (options == 6) {
        console.clear();
        OrderByReview();
    } else if (options == 7) {
        console.clear();
        UpdatePrice();
    } else if (options == 8) {
        console.clear();
        DeleteProduct();
    } else if (options == 9) {
        repeat = false;
    } else if (options == 10) {
        product = prompt("Qual Produto deseja adicionar ao Carrinho?")
        quantity = parseInt(prompt("Quantidade:"))
        CartAdd(product, quantity);
    } else if (options == 11) {
        product = prompt("Qual Produto deseja Remover do Carrinho?")
        quantity = parseInt(prompt("Quantidade:"))
        CartDelete(product, quantity);
    }

    return repeat;
};

function CartAdd(product, quantity) {
    var counterRepeat = shopCartProducts.length + 1
    var counter = 0
    for (var i = 0; i < id.length; i++) {
        if (product == nameProduct[i]) {
            for (var i2 = 0; i2 < counterRepeat; i2++) {
                if (nameProduct[i] == shopCartProducts[i2]) {
                    shopCartProducts[i2] = nameProduct[i];
                    shopCartQuantity[i2] = shopCartQuantity[i2] + quantity;
                    shopCartPrice[i2] = shopCartPrice[i2] + (price[i] * quantity);
                    counter++;
                }
            }
            if (counter == 0) {
                shopCartProducts[arrCounterShopCart] = nameProduct[i];
                shopCartQuantity[arrCounterShopCart] = quantity;
                shopCartPrice[arrCounterShopCart] = price[i] * quantity;
                arrCounterShopCart++;
                counter++;
            }
        };
    };
    console.log("Produto Adicionado No Carrinho.");
    return shopCartProducts, shopCartQuantity, shopCartPrice;
}

function CartDelete(product, quantity) {
    arrSupShopCartPrice = [];
    arrSupShopCartProducts = [];
    arrSupShopCartQuantity = [];
    counterArraySup = 0
    for (var i = 0; i < nameProduct.length; i++) {
        if (product == nameProduct[i]) {
            for (var i2 = 0; i2 < shopCartProducts.length; i2++) {
                if (product == shopCartProducts[i2]) {
                    shopCartQuantity[i2] = shopCartQuantity[i2] - quantity;
                    shopCartPrice[i2] = shopCartPrice[i2] - (price[i] * quantity);
                }
            }
        }
    }
    for (var i3 = 0; i3 < shopCartProducts.length; i3++) {
        if (shopCartQuantity[i3] >= 1) {
            arrSupShopCartProducts[counterArraySup] = shopCartProducts[i3];
            arrSupShopCartQuantity[counterArraySup] = shopCartQuantity[i3];
            arrSupShopCartPrice[counterArraySup] = shopCartPrice[i3];
            counterArraySup++;
        }
    }
    console.log("Quantidade/Produto Removida com Sucesso.")
    shopCartProducts = arrSupShopCartProducts;
    shopCartQuantity = arrSupShopCartQuantity;
    shopCartPrice = arrSupShopCartPrice;

    return shopCartProducts, shopCartQuantity, shopCartPrice;
}




while (repeat) {
    Options();
}
console.log(shopCartProducts);
console.log(shopCartQuantity);
console.log(shopCartPrice);







