**
 * Count the occurrences of items in an array and return a frequency map.
 * @param {Array<unknown>} arr - Input array.
 * @returns {Record<string, number>} Frequency map.
 */
function countFrequency(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected an Array.');
    }
    const frequencyMap = {};

    for (const item of arr) {
        const key = String(item);
        frequencyMap[key] = (frequencyMap[key] ?? 0) + 1;
    }

    return frequencyMap;
}

/**
 * Remove duplicate values from an array while preserving order.
 * @param {Array<unknown>} arr - Input array.
 * @returns {Array<unknown>} Array with duplicates removed.
 */
function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Expected an Array.');
    }
    return [...new Set(arr)];
}

console.log(countFrequency([1, 2, 2, 3, 3, 3]));
console.log(removeDuplicates([1, 2, 2, 3, 3, 3]));
