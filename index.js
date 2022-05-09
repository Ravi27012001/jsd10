console.log("working....")
// objects are collecting of properties and methods
// create an object

let mobile = {
    brand : "samsung",
    weight : 200,
    isWorking:true,
    11: "Android Version",
    displayInfo: function(){
        console.log(`the brand of mobile is ${mobile.brand} and the weight is ${mobile.weight} which is in the working condition of ${mobile.isWorking} also with android version of ${mobile[11]}`);
    }

}
console.log(mobile);
console.log(mobile.displayInfo());
mobile.camera = "32px";
delete mobile.isWorking;
console.log(mobile);


// ---------------------------second way to create object
let mobile1 = {};
mobile1.brand = "oneplus";
mobile1.weight= 190;
mobile1.AndroidVersion =11;
mobile1["camera"]= "32px";
console.log(mobile1);

// -------------------third way
function Mobile (brand,weight,camera){
    this.brand = brand;
    this.weight = weight;
    this.camera = camera;
    }

    let apple = new Mobile ("Apple","180","13px")
    let samsung = new Mobile ("Samsung","210","22px")

    console.log(apple);
    console.log(samsung);
    console.log(apple.brand);

    console.log(Object.keys(apple));
    console.log(Object.values(apple));

    for (const [key,value] of Object.entries(apple) ){
        console.log(key,value);
    }


    // this keyword
    // in an object this refers to an object
    // in a function ,this refers to the parents object,
    value = 23;
    console.log(value);
    console.log(this);

    let arr1 = [1,2,3,4];
    let arr2 = [5,6,7,8];
    console.log(arr1.concat(arr2));
    let arr3 = [...arr1,...arr2];
    console.log(arr3);

