const statFiller = (points, slots) => {

    let slotArray = new Array(slots)
    for (let i = 0; i < slots; i++) {
        let current = Math.floor(Math.random() * slots)
        if (typeof slotArray[current] == 'undefined') {
            slotArray[current] = 0
        }
        if (slotArray[current] == 3) {
            i--
        } else {

            slotArray[current]++
        }
    }
    return slotArray
}

const priorityPicker = () => {
    let priority = [1, 2, 3]
    let currentIndex = priority.length, randomIndex;


    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [priority[currentIndex], priority[randomIndex]] = [
            priority[randomIndex], priority[currentIndex]];
    }

    return priority;
}

