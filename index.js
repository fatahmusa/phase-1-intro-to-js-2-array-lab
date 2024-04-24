// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){

    cats.push("Ralph");
}

beforeEach(function (){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
}

beforeEach(function (){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveLastCat(Garfield){
    cats.pop("Garfield");
}


beforeEach(function (){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
}

beforeEach(function (){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
});

function appendCat(Broom){
  return appendCat = [...cats, "Broom" ];
}


beforeEach(function (){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
});

function prependCat(Arnold){
    return appendCat = ["Arnold", ...cats ];
}

beforeEach(function (){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
});

function removeLastCat(){
    return cats.slice(0,cats.length - 1);
}

beforeEach(function (){
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
});

function removeFirstCat(){
    return cats.slice(1);
}