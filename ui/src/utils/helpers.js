// This function takes an array of objects and returns a new array of objects based on a unique param
const uniq = (array, param) => {
    return array.filter((item, pos, array) => array.map(mapItem => mapItem[param]).indexOf(item[param]) === pos);
}

export { uniq };
