//sebelum
class kendaraan {
    var totalroda = 0;
var kecepatanperjam = 0;
}

class mobil extends kendaraan {
    void berjalan(){
    tambahkecepatan(10);
}
tambahkecepatan(var kecepatanbaru) {
    kecepatanperjam = kecepatanperjam + kecepatanbaru;
     }
}

void main() {
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillambat = new mobil();
    mobillambat.berjalan();
}

//sesudah
class kendaraan {
    var totalRoda = 0;
var kecepatanPerJam = 0;
}

class mobil extends kendaraan {
    void berjalan(){
    tambahKecepatan(10);
}
tambahKecepatan(var kecepatanBaru) {
    kecepatanPerJam = kecepatanPerJam + kecepatanBaru;
     }
}

void main() {
    mobilCepat = new mobil();
    mobilCepat.berjalan();
    mobilCepat.berjalan();
    mobilCepat.berjalan();

    mobilLambat = new mobil();
    mobilLambat.berjalan();
}