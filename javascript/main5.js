// SELFWORK FUNZIONI 4

// function isPalindrome(str) {
    
//     let cleanedStr = str.replace(/\W/g, "").toLowerCase();
    
    
//     let reversedStr = cleanedStr.split("").reverse().join("");
    
//     return cleanedStr == reversedStr;
// }


// let input = "i topi non avevano nipoti";
// console.log(isPalindrome(input)); 

// spiegazione esercizio SELFWORK FUNZIONI 4
// function controlString(stringa){
//     stringa = stringa.replace(/\W/g, "");
    
//     let reversed = stringa.split("").reverse().join("");

//     if(stringa == reversed){
//         return true
//     }else{
//         return false
//     }
    
// }

// console.log(controlString('i topi non avevano nipoti'));


// SELFWORK ARRAY 1

// ordine decrescente

// let numbers = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

// let dec = numbers.sort((a, b)=> b - a);

// console.log(dec);

// ordine crescente

// let num = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

// let cre = num.sort((a, b)=> a - b);

// console.log(cre);



// SELFWORK ARRAY 2

function calcolaMediaEValori(array) {
    
    let somma = array.reduce((acc, val) => acc + val, 0);
    
    
    let media = somma / array.length;
    
   
    let valoriMinori = array.filter((val) => val < media);
    
    
    let countMinori = valoriMinori.length;
    let countMaggiori = array.filter((val) => val > media).length;
    
    
    console.log(`Media = ${media.toFixed(1)}`);
    console.log(`Valori minori della media = ${valoriMinori}`);
    console.log(`Numero di valori minori della media = ${countMinori}`);
    console.log(`Numero di valori maggiori della media = ${countMaggiori}`);
}


let a = [3, 5, 10, 2, 8];
calcolaMediaEValori(a);





