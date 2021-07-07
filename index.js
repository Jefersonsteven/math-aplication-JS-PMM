// PROMEDIO

function calculateAverage (list) {
    /* let addList = 0;
    for (let i = 0; i < list.length; i++) {
        addLists += list[i];
    } */

    const addList = list.reduce(
        function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );

    const average = addList / list.length;
    return average;
};

// MEDIANA

function isEven(number) {
    if(number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculateMedian(list) {
    const orderedList = list.sort((num1, num2) => {return num1 - num2});
    const halfList = parseInt(list.length / 2);
    let median;

    if (isEven(list.length)) {
        const element1 = list[halfList];
        const element2 = list[halfList - 1];

        const averageElement1And2 = calculateAverage([
            element1,
            element2
        ]);

        median = averageElement1And2;
    } else {
        median = list[halfList];
    }

    return median;
}

// MODA


const list1 = [1, 3, 1, 3, 6, 5, 4, 7, 3, 4, 3];

const list1Count = {};

list1.map(function (element) {
    if (list1Count[element]) {
        list1Count[element] += 1;
    } else {
        list1Count[element] = 1;
    }
});

const list1Array = Object.entries(list1Count);
