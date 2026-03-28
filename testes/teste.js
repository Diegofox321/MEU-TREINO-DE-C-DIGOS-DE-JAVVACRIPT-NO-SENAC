console.log("🧪 INICIANDO TESTES...\n");

// Importar funções do arquivo correto
const { countFrequency, removeDuplicates, removeDuplicatesBy } = require('../exercicios-senac/ex02remove-duplicados');

function assertEqual(a, b, message = '') {
  // Converter Map para objeto se necessário
  let aJson;
  if (a instanceof Map) {
    aJson = JSON.stringify(Object.fromEntries(a));
  } else {
    aJson = JSON.stringify(a);
  }
  const bJson = JSON.stringify(b);
  
  if (aJson !== bJson) {
    console.log(`❌ ${message} - FAILED`);
    console.log(`   Expected: ${bJson}`);
    console.log(`   Actual:   ${aJson}`);
    return false;
  }
  console.log(`✅ ${message} - PASSED`);
  return true;
}

let allPassed = true;

console.log("📌 Testando countFrequency...");

// Test countFrequency números
const freqResult = countFrequency([1, 2, 2, 3, 3, 3]);
allPassed &= assertEqual(freqResult, { '1': 1, '2': 2, '3': 3 }, 'countFrequency numeric');

// Test countFrequency strings
const freqResult2 = countFrequency(['a', 'b', 'a']);
allPassed &= assertEqual(freqResult2, { a: 2, b: 1 }, 'countFrequency strings');

console.log("\n📌 Testando removeDuplicates...");
allPassed &= assertEqual(removeDuplicates([1, 2, 2, 3, 3, 3]), [1, 2, 3], 'removeDuplicates numeric');
allPassed &= assertEqual(removeDuplicates(['a', 'a', 'b']), ['a', 'b'], 'removeDuplicates strings');

console.log("\n📌 Testando removeDuplicatesBy...");
const objects = [{ id: 1 }, { id: 1 }, { id: 2 }];
allPassed &= assertEqual(removeDuplicatesBy(objects, x => x.id), [{ id: 1 }, { id: 2 }], 'removeDuplicatesBy object key');

console.log("\n" + "=".repeat(50));
if (allPassed) {
  console.log("🎉 TODOS OS TESTES PASSARAM!");
} else {
  console.log("⚠️ ALGUNS TESTES FALHARAM!");
}
console.log("=".repeat(50));
