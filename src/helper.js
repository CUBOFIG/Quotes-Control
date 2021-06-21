export function getDifference(year){
    return new Date().getFullYear() - year;
}

export function getMark(mark){
    let increment;

    switch(mark){
        case 'europeo':
            increment = 1.30;
            break;

        case 'americano':
            increment = 1.15;
            break;

        case 'asiatico':
            increment = 1.05;
            break;

        default:
            break;
    }

    return increment;
}

export function getPlan(plan){
    return(plan ==="basico") ?1.20:1.50;
}

export function viewUppercase(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
