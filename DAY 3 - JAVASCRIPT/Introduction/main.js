// operasi saldo

let saldoAwal = Number(prompt('Masukkan Jumlah Saldo Anda'))
let saldoTambahan = 3000
const saldoAkhir = saldoAwal + saldoTambahan

alert(`Saldo Awal anda sebesar ${saldoAwal} ditambah dengan kompensasi dari kami sebesar ${saldoTambahan} , Sehingga Saldo Anda Menjadi sebesar ${saldoAkhir}`)

// membuat hari

let hari = new Date().getDay()

const namaHari = ['Minggu' , 'Senin' ,'Selasa' , 'Rabu' , 'Kamis' , 'Jumat' , 'Sabtu']

console.log (`Hari ini adalah hari ${namaHari[hari]}` )

// cara paling  gampang

// let hari = new Date().toLocaleDateString('id-ID', {weekday: 'long'})

// console.log (`hari ini adalah ${hari}` )

// tes

// const namaHewan = ['kucing' , 'anjing' , 'babi' , 'ayam'] 
// for (let hewan = 0; hewan < namaHewan.length; hewan++){
//     console.log (namaHewan[hewan])
// }