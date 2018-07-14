var age = 18;
var canDrive;
var canVote;
var canRentCar;

if (age > 16){
    canDrive = true;

    if(age > 25){
        canRentCar = true;
    }else {
        canRentCar = false;
    }
}

console.log(canDrive, canRentCar);