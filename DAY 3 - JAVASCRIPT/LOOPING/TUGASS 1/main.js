// 
console.log(`=== PERULANGAN ===`)

// FOR
const x = [5,8,12];
let tambah = 0;
for (let i = 0; i < x.length; i++) {
    console.log (`data x ke -`, i)
}


// ini cara ngitung angka dalam array
    x.forEach(n => tambah += n);
    console.log("Total nilai adalah 24 karena 5 + 8 + 12 = ",tambah);


    
// WHILE    
const y = [2,5,12];
let i = 0;
while (i < y.length) {
    console.log (`data y ke -`, i);
    i++;
}

const hasil = y.reduce((accumulator,value) =>{
    return accumulator + value;
}, 0);
console.log("Total nilai adalah 19 karena 3 + 5 + 12 = ",hasil);

// DO WHILE
const z =  [3, 5, 12];
let i1 = 0;
do{
    console.log("data z ke - ",i1);
    i1++;
}while(i1 < z.length);

// ini cara ngitung angka dalam array
const hasil2 = z.reduce((accumulator,value) =>{
    return accumulator + value;
}, 0);

console.log("Total nilai adalah 20 karena 3 + 5 + 12 = ",hasil2);