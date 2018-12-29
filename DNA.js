class DNA {

    constructor(len) {
        this.phrase = this.initializePhrase(len);
        this.fitness = this.getFitness(targetPhrase);
    }

    initializePhrase(len) {
        let rString = '';
        let validChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
        for (let i = 0; i < len; i++) {
            rString += validChars[Math.floor(Math.random() * validChars.length)];
        }
        return rString
    }

    getFitness(targetPhrase) {
        let fitness = 0;
        for (let i = 0; i < this.phrase.length; i++) {
            if (targetPhrase[i] == this.phrase[i]) {
                fitness ++;
            }
        }
        return fitness;
    }

    crossover(other) {
        let child = "";
        for (let i = 0; i < this.phrase.length; i++) {
            let choice = Math.round(Math.random());
            if(choice) {
                child += this.phrase[i];
            }
            else {
                child += other.phrase[i];
            }
        }
        return child;
    }
}