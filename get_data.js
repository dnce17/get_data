let type = document.querySelector("#type");
let evolMethod = document.querySelector("#evol-method");

function getData(item) {
    // console.log(item.value); // returns e.g. STRING (emphasis on this) "pikachu"

    for (key in pokemon) {
        // console.log(pokemon[key].name); 
        if (pokemon[key].name == item.value) {
            console.log("Yes, it is the same.");
            type.value = pokemon[key].type;
            evolMethod.value = pokemon[key].howToEvolve;
        } else {
            
        }
    }
}