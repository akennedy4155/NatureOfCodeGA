# NatureOfCodeGA
Following along with the nature of code GA chapter

## Natural Selection
1. Heredity

    * Process by which children receive the properties of their parents

2. Variation

    * Variety of traits present in the population and a means to introduce variation

3. Selection

    * Mechanism by which some members have the opportunity to pass down traits and some do not
    * Survival of the fittest
    * Measured by fitness

## Creating a population

1. Create a population of N elements, each with randomly generated DNA

    * Each element has DNA

        * in the case of the random typing, the DNA is just a string of characters
    
    * Genotype

        * the data structure to store each object's properties

    * Phenotype
    
        * What are we using these variables to express

## Selection

1. Evaluate fitness

    * defined by a *fitness function*

        * numeric score to describe the fitness of a given member of the population

2. Create a mating pool

    * after the fitness is calculated for all members of the population, we select which members are fit to become parents

    * elitist method

        * which two members of the population scored the highest?

        * use this to create all the children for the next generation

    * probabilistic method

        * fitness score is related to the probability that the member has of reproducing in the next generation

        * higher fitness means higher chance of reproducing, but not guarenteed

        * normalize the scores:

            * this element's fitness / total fitness of the generation

## Reproduction
