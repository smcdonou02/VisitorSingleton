var CarVisitor = function(){
    this.visit = function(car){
        if(car.seats > 2){
            console.log('this is clearly a car for old people');
        }else{
            console.log('My bet is this car has at least 2 cylinders');
        }
    }
}

var TruckVisitor = function(){
    this.visit = function(truckVar){
        if(truckVar.towPackage){
            console.log('we need to buy a boat');
        }
    }
}

var MonsterTruckVisitor = function(){
    this.visit = function(monsterTruckVar){
        if(monsterTruckVar.looksLikeDragon){
            console.log('that is a badass monster truck');
        }
        else{
            console.log('loser');
        }
    }
}

var carVariable = function(){
    var seats = 3;
    var doors = 4;
    this.accept = function(visitorObject){
        visitorObject.visit(this);
    }
}

var truckVariable = function(){
    var towPackage = 2;
    var doors = 2;
    this.accept = function(visitorObject){
        visitorObject.visit(this);
    }
}

var monsterTruckVariable = function(){
    var looksLikeDragon = true;
    var doors = 1.5;
    this.accept = function(visitorObject){
        visitorObject.visit(this);
    }
}

var myCar = new carVariable();
myCar.seats = 2;
myCar.accept(new CarVisitor);

var myMonsterTruck = new monsterTruckVariable();
myMonsterTruck.looksLikeDragon = false;
myMonsterTruck.accept(new MonsterTruckVisitor());

var myCar2 = new carVariable();
myCar2.seats = 2;
myCar2.accept(new MonsterTruckVisitor());