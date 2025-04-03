const heroes = [
    { name: "Luke Skywalker", side: "Lumineux", planet: "Tatooine", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Avancé" },
    { name: "Darth Vader", side: "Obscur", planet: "Tatooine", species: "Humain", lightsaberColor: "Rouge", masteryOfForce: "Maîtrise totale" },
    { name: "Yoda", side: "Lumineux", planet: "Dagobah", species: "Yoda's Species", lightsaberColor: "Vert", masteryOfForce: "Légendaire" },
    { name: "Han Solo", side: "Lumineux", planet: "Corellia", species: "Humain", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "Leia Organa", side: "Lumineux", planet: "Alderaan", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Débutante" },
    { name: "Emperor Palpatine", side: "Obscur", planet: "Naboo", species: "Humain", lightsaberColor: "Rouge", masteryOfForce: "Maîtrise totale" },
    { name: "Chewbacca", side: "Lumineux", planet: "Kashyyyk", species: "Wookiee", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "Obi-Wan Kenobi", side: "Lumineux", planet: "Stewjon", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Avancé" },
    { name: "R2-D2", side: "Lumineux", planet: "Naboo", species: "Droid", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "C-3PO", side: "Lumineux", planet: "Tatooine", species: "Droid", lightsaberColor: "Aucun", masteryOfForce: "Aucun" }
    ];


function bleuLightsaber() {
    return heroes.find(hero => hero.side === "Lumineux" && hero.lightsaberColor === "Bleu" )
}
console.log(bleuLightsaber());


function Kenobi() {
    return heroes.findLast(hero => hero.name.includes("Kenobi"))	
}
console.log(Kenobi());

function legendaryDagobah() {
    return heroes.findIndex(hero => hero.masteryOfForce === "Légendaire" && hero.planet === "Dagobah")
}
console.log(legendaryDagobah());

function tatooine() {
    return heroes.findLastIndex(hero => hero.planet === "Tatooine" && hero.lightsaberColor === "Rouge")
}
console.log(tatooine());

function Yoda() {
    return heroes.find(hero => hero.name.includes("Yoda"))
}
console.log(Yoda());

function GreenLightsaber() {
    return heroes.findIndex(hero => hero.lightsaberColor === "Vert");
}
console.log(GreenLightsaber());

function wookiee() {
    return heroes.find(hero => hero.side !== "Lumineux" && hero.species === "Wookiee")
}
console.log(wookiee());

function solo() {
    return heroes.findLast(hero => hero.name.toLocaleLowerCase().includes("solo"))
}
console.log(solo());

function noPower() {
    return heroes.find(hero => hero.masteryOfForce === "Aucun")
}
console.log(noPower());

function moreThan10() {
    return heroes.find(hero => hero.name.length > 10)
} 
console.log(moreThan10());
