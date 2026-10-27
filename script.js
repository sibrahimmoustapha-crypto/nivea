// ============================================================
// CHECKPOINT : FONDEMENTS DE JAVASCRIPT - PROJET 1 (EDABIT)
// Étudiant : Moustapha Ibrahim
// ============================================================

// 1. Convertir les minutes en secondes
function convert(minutes) {
    return minutes * 60;
}

// 2. Retourner le nombre suivant à partir d'un entier
function addition(num) {
    return num + 1;
}

// 3. Calculer la surface d'un triangle
function triArea(base, height) {
    return (base * height) / 2;
}

// 4. Convertir les heures en secondes
function howManySeconds(hours) {
    return hours * 3600;
}

// 5. Trouver le plus grand nombre dans un tableau
function findLargestNum(arr) {
    return Math.max(...arr);
}

// 6. Inverser un tableau
function reverseArr(arr) {
    return arr.reverse();
}

// 7. Vérifier si un nombre est pair
function isEven(num) {
    return num % 2 === 0;
}

// 8. Compter les voyelles dans une chaîne de caractères
function countVowels(str) {
    const matches = str.match(/[aeiouy]/gi);
    return matches ? matches.length : 0;
}


// ============================================================
// TESTS DES FONCTIONS (CONSOLES)
// ============================================================
console.log("5 minutes en secondes :", convert(5)); // 300
console.log("Nombre suivant de 7 :", addition(7)); // 8
console.log("Surface triangle (base 5, hauteur 3) :", triArea(5, 3)); // 7.5
console.log("Plus grand nombre de [4, 9, 2, 15] :", findLargestNum([4, 9, 2, 15])); // 15
console.log("Nombre de voyelles dans 'JavaScript' :", countVowels("JavaScript")); // 3