// Constants
let mutationRate = 0.01;
let fRate = 2;
let targetPhrase = "to be or not to be that is the question";
let popSize = 100;

let population = [];
let normalizedFitnessValues = [];
let pElements = [];
let targetElement;


function setup () {
    createCanvas(0,0);
    frameRate(fRate);
    targetElement = createP(['Target: ' + targetPhrase]);
    createPopulation();
    let matingPool = selection();
    reproduction(matingPool);
}

function draw() {

}

function generateNormalizedFitnessValues (pop) {
    let totalFitness = 0;
    let fitnessValues = [];
    pop.forEach(element => {
        totalFitness += element.fitness;
    });
    pop.forEach(element => {
        fitnessValues.push(element.fitness / totalFitness);
    });
    return fitnessValues;
}

function createPopulation () {
    // generate paragraph elements for phenotype and generate the random population
    for(let i = 0; i < popSize; i++) {
        let member = new DNA(targetPhrase.length);
        population.push(member);
        pElements.push(createP([member.phrase]));
    }
}

function selection () {
    // evaluate fitness
    normalizedFitnessValues = generateNormalizedFitnessValues(population);
    for(let i = 0; i < pElements.length; i++) {
        pElements[i].html(" " + normalizedFitnessValues[i], true);
    }

    // create mating pool
    let matingPool = [];
    for (let i = 0; i < population.length; i++){
        let fitness = Math.floor(normalizedFitnessValues[i] * 1000);
        for (let j = 0; j < fitness; j++) {
            matingPool.push(population[i]);
        }
    }
    return matingPool;

}

function reproduction(pool) {
    // pick two distinct parents
    let parentA = pool[Math.floor(Math.random() * pool.length)];
    let parentB = pool[Math.floor(Math.random() * pool.length)];
    while (parentB == parentA) {
        parentB = pool[Math.floor(Math.random() * pool.length)];
    }
    let child = parentA.crossover(parentB);
}