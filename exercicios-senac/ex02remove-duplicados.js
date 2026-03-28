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

/**
 * Remove duplicados usando uma função de chave personalizada
 * @param {Array} arr - Array de entrada
 * @param {Function} keyFn - Função que extrai a chave
 * @returns {Array} Array sem duplicados
 */
function removeDuplicatesBy(arr, keyFn) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected an Array.');
    }
    const seen = new Set();
    return arr.filter(item => {
        const key = keyFn(item);
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}

// Atualizar exports
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { countFrequency, removeDuplicates, removeDuplicatesBy };
}
