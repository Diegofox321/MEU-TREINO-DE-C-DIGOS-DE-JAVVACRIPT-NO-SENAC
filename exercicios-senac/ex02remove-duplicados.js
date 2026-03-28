/**
 * Conta a frequência de cada elemento em um array
 * @param {Array} arr - Array de entrada
 * @returns {Map} Mapa com a contagem
 */
function countFrequency(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected an Array.');
    }
    const frequencyMap = new Map();

    for (const item of arr) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }

    return frequencyMap;
}

/**
 * Remove valores duplicados mantendo a ordem
 * @param {Array} arr - Array de entrada
 * @returns {Array} Array sem duplicados
 */
function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected an Array.');
    }
    return [...new Set(arr)];
}

// Testes
const testArray = [1, 2, 2, 3, 3, 3];

console.log("=== Contagem de Frequência (Map) ===");
console.log(countFrequency(testArray));

console.log("\n=== Remoção de Duplicados ===");
console.log(removeDuplicates(testArray));
