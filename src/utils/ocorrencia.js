function getOcorrencia(array, value) {
    var count = 0;
    array.forEach((item) => (item.id === value && count++));
    return count;
};

export default getOcorrencia;