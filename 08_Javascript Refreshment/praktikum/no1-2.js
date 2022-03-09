//nomer 1
var a = 5;
let b = 'kampus merdeka';
const nama = 'Budi';
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = 'indonesia';

    return console.log('perkenalkan nama saya ' + nama + ' nomor urut ' + a + ' sekarang sedang mengikuti ' + b + ' berasal dari ' + asal);
}

terdaftar = true;
if (terdaftar === true) {
    console.log(nama + ' terdaftar sebagai kegiatan kampus merdeka');
}

a = b;
const budi = lengkap_arr.filter((budi2) => budi2 === 'budi');
console.log('array = ' + nama);
console.log('a adalah = ' + a);
console.log('b adalah = ' + b);
perkenalan();

//nomer 2
//  a. jelaskan kenapa baris 21, 22, 23 tidak dapat tampil.
//      jawab: karena variabel terdaftar false sedangkan baris 21 variabel terdaftar adalah true.
//  b. jelaskan kenapa deklarasi pada barus 26 menyebabkan error.
//      jawab: karena variabel const nilainya tidak dapat diubah apabila telah di deklarasikan
//  c. dengan melakukan comment pada baris ke 26, apakah baris 28 dapat dieksekusi? jelaskan.
//      jawab: tidak, karena variabel asal berada di dalam fungsi perkenalan dan hanya dapat digunakan apabila menggunakan fungsi tersebut.