/*
TUGAS BESAR :
1. MEMBUAT PERHITUNGAN MATEMATIKA
    -luas lingkaran
    -luas segitiga
    -luas persegi panjang
    -luas jajargenjang
2. menghitung total gaji yang di dapat dalam satu bulan dengan input minimal:
    -nama Karyawan
    -gaji perhari
    -jumlah hari masuk kerja
*/
console.log ('=== PERHITUNGAN LUAS BANGUN DATAR MENGGUNAKAN ARROW FUNCTION ===');

// LUAS LINGKARAN
const luasLingkaran = (r) => Math.PI * r * r;
console.log(`Luas Lingkaran = ${luasLingkaran(7)}`)

// LUAS SEGITIGA
const luasSegitiga = (a, t) => 0.5 * a * t ;
console.log(`Luas Segitiga = ${luasSegitiga(10, 5)}`)

//LUAS PERSEGI PANJANG
const luasPersegiPanjang = (p, l) => p * l;
console.log(`Luas Persegi Panjang = ${luasPersegiPanjang(14, 20)}`)

//LUAS JAJAR GENJANG
const luasJajarGenjang = (a , t) => a * t;
console.log(`Luas Jajar Genjang = ${luasJajarGenjang(5 , 10)}`) 

console.log ('=== PERHITUNGAN LUAS BANGUN DATAR MENGGUNAKAN STANDAR FUNCTION ===');

//LINGKARAN
lingkaran (7)
function lingkaran(r) {
    console.log('lingkaran =', Math.PI * r * r, 'cm')
}

// SEGITIGA
segitiga(10, 5)
function segitiga(p , t){
    console.log('segitiga =',0.5 * p * t ,'cm')
}

//PERSEGI PANJANG
persegiPanjang (14,20)
function persegiPanjang(p , l){
    console.log('Persegi Panjang =', p * l , 'cm')
}

//JAJAR GENJANG
jajarGenjang (5, 10)
function jajarGenjang(a,t){
    console.log('Jajar Genjang =', a * t , 'cm')
}


// PERHITUNGAN GAJI KARYAWAN
console.log ('=== PERHITUNGAN GAJI KARYAWAN ===');


    const hitungGaji = (nama, gajiPerHari, hariKerja) => {
                
        let total = gajiPerHari * hariKerja;
        console.log (
            'Nama :', nama,
            ', Gaji Per Hari :', gajiPerHari,
            ', Hari Kerja :', hariKerja,
            ', Total Gaji Perbulan:',total
        )
    }

    let data = hitungGaji("faat", 150000, 24)

