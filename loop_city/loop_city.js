// looper duper city grouper//

// 1st loop //
var count = 0;

for(var count = 0; count <= 100; count ++){
  console.log("talon can count to" + count);
}

// 2nd loop //
var animalcount = 0;

for(var animalcount = 0; animalcount <= 5; animalcount ++){
	console.log("there are" + animalcount + "many animals in Noah's arc");
}

// 3rd loop //
var partyanimals = ("bill", "tom", "john", "eric", "craig");

for(var i = 0; i <= 4; i++){
	console.log(partyanimals[2] + "WHAT ARE YOU DOING!?")
}

// 4th loop //
var weaponchest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var hero = {
	wizard : "Merlin",
	weapon : weaponchest[1],
	power : 30
}

function TheBattle(M){
	if(hero.weapon == "Sorcerer's Stone" && hero.wizard == "Merlin"){
		console.log(hero.wizard + " Shall slay the dragon with " + hero.weapon)
		console.log(hero.wizard + " is ready for war with the " + hero.weapon)
	}
}
