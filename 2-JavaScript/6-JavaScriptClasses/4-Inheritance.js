
class Furniture {

    furnitureName = "Some String Value";
    quantity = 0;
    price = 0;

    constructor(furnitureNameToAssign, priceToAssign) {
        // let constructedProperty
        console.log("Furniture was created")
        this.furnitureName = furnitureNameToAssign;
        this.price = priceToAssign;
        // constructedPropeaarty = constructedPropertyValue;
    }

    adjustQuantity(quantityToAdd) {
        this.quantity += quantityToAdd;
    }

}

class Chair extends Furniture {
    canSit = true;

}

class Table extends Furniture {
    canSit = false;

}

// MyFirstClass.someStringProperty

let myRecliner = new Chair("Recliner", 300);
let myDiningRoomTable = new Table("Dining Room", 500);


// console.log(myClassInstance.someStringProperty);

// myClassInstance.someStringProperty = "A new value";

myRecliner.adjustQuantity(7);

console.log(myRecliner.furnitureName);
console.log(myRecliner.canSit);
console.log(myRecliner.price);
console.log(myRecliner.quantity);

console.log(myDiningRoomTable.furnitureName);
console.log(myDiningRoomTable.canSit);
console.log(myDiningRoomTable.price);
console.log(myDiningRoomTable.quantity);
