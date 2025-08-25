

// BELAJAR FUNCTION

function tambahNama1(fullName){
    return fullName
}

console.log(tambahNama1('Muhammad Syafaat'))

// PENGIRIMAN DATA MENGGUNAKAN FUNCTION

function tambahNama(namaDepan , namaBelakang) {
    console.log (`Nama depan: ${namaDepan}`)
    console.log (`Nama belakang: ${namaBelakang}`)
}

tambahNama('Muhammad' , 'Syafaat')

//PENGIRIMAN DATA MENGGUNAKAN FUNCTION ARGUMENT

tambahNama2('Muhammad' , 'Syafaat')

function tambahNama2() {
    console.log (`Nama Belakang : ${arguments[1]}`)
    console.log (`Nama Depan : ${arguments[0]}`)
}

// PENGIRIMAN DATA MENGGUNAKAN FUNCTION LOOPING

function tambahNama3() {
    for (let i = 0; i < arguments.length; i++) {
        console.log (`Nama Lengkap Anda : ${arguments[i]}`)
    }
}

tambahNama3 ('Muhammad Syafaat' , 'Syafaat Muhammad' , 'Syafaat faat')

// MEMBUAT OPERASI MATEMATIKA MENGGUNAKAN FUNCTION

const sum = (x,y) => { 
    console.log (x/y)
}

sum(24,6)
