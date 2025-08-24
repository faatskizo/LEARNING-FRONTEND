// MAIN ARRAY ARRAY

// CARA MAPPING HATI DALAM ARRAY
const arrayKamu = ['🧡' , '🤍', '💛' ,'💚' , '💙']

const hatiJingga = arrayKamu[0]
const hatiPutih = arrayKamu[1]
const hatiKuning = arrayKamu[2]
const hatiHijau = arrayKamu[3]
const hatiBiru = arrayKamu[4]

console.log (`Hati jingga adalah ${hatiJingga}`);
console.log (`Hati Putih adalah ${hatiPutih}`);
console.log (`Hati Kuning adalah ${hatiKuning}`);
console.log (`Hati Hijau adalah ${hatiHijau}`);
console.log (`Hati Biru adalah ${hatiBiru}`);

// CARA MENCARI DAN MENGETAHUI INDEX DARI MAKANAN DALAM ARRAY

const arraySaya = ['🍕' , '🍔', '🍟' ,'🌭' , '🍿']

const kentangGoreng = arraySaya.includes('🍟') 
const hotDog = arraySaya.includes('🌭')

if (kentangGoreng) {
    const posisiKentangGoreng = arraySaya.indexOf('🍟') 
    const indexSebelum = posisiKentangGoreng - 1
    const indexSesudah = posisiKentangGoreng + 1
    const sebelum = arraySaya[indexSebelum]
    const sesudah = arraySaya[indexSesudah]
    console.log (posisiKentangGoreng)
    console.log (`posisi sebelum dari makanan adalah ${sebelum}`)
    console.log (`posisi sesudah dari makanan adalah ${sesudah} `)
}
else {
    console.log (`gada dalam array`)
}

if (hotDog){
    const posisiHotDog = arraySaya.indexOf('🌭')
    const awal = arraySaya.shift('🌭')
    const akhir = arraySaya.pop('🌭')
    console.log(`posisi index Hotdog adalah ${posisiHotDog}`)
    console.log(`posisi awal makanan dalam arraySaya adalah ${awal}`)
    console.log(`posisi akhir makanan dalam arraySaya adalah ${akhir}`)
}

// CARA MENGCOPY SEBUAH ARRAY TANPA HARUS MENGUBAH ORIGINAL ARRAY NYA

const arrayKita = [ '😎' , '😍' , '😘' , '🥰' ,'😗' ] // Original array
const arrayKitaKW = arrayKita.slice() // Duplicate

arrayKitaKW[1] = '🎈'

console.log ({arrayKita})
console.log ({arrayKitaKW})

// CARA MENGAMBIL MACAM MACAM TIPE DATA DALAM SEBUAH ARRAY 

const arrayTipeData = ['🎭' , 'string' , {
    mobil: function() 
        { console.log('ini mobil') }
    } , 
    ['kucing' , 'anjing']] // MACAM MACAM TIPE DATA DALAM ARRAY

console.log (arrayTipeData.length) // MENGETAHUI PANJANG ARRAY
console.log (arrayTipeData[3][1]) // MULTI ARRAY
arrayTipeData[2].mobil() // FUNCTION DALAM ARRAY

// MANTAPP

// CARA MERGE SEBUAH ARRAY DARI ARRAY MINUMAN & ARRAY MAKANAN

const arrayMakanan = ['🍖','🍗','🥩','🥟','🥠']
const arrayMinuman = ['🍼','🥛','☕','🍵','🍷']

const arrayMerge = arrayMakanan.concat(arrayMinuman) // MERGE ARRAY
console.log (arrayMerge)

arrayMerge.map((value , index) => console.log(value, index))

// ARRAY DATA MENGGUNAKAN .map , .sort , filter

const data = [
    {
        name: 'Muhammad Syafaat',
        stack: 'Javascript',
        age: '18'
    },
    {
        name: 'Muhammad Ridho',
        stack: 'Python',
        age: '17'
    },
    {
        name: 'Izul',
        stack: 'C#',
        age: '16'
    },
]

data.map((value , index) => 
    console.log(value.name , value.stack) 
) // MAP

data.sort((a, b) => b.age - a.age).map((value) => console.log(value)) // SORT

data.filter((x) => x.age > 17).map((value) => console.log(value.name , value.age)) // FILTER

// NOTED : Untuk Memunculkan angka yang sama dengan 17 maka gunakan "=" , 
//         Untuk memunculkan angka yang kurang dari 17 maka gunakan "<"
//         Untuk memunculkan angka yang lebih dari 17 maka gunakan ">"


// JIKA DI COMBINE MAKA :
data.sort((a, b) => a.age - b.age)
.filter((x) => x.age >= 16)
.map((value) => console.log(value.name , value.age))

// END