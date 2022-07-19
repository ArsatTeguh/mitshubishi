
const eksekusi = function (result) {
let tujuan = document.getElementById('tujuan')
tujuan.innerHTML = `<h3 class="text-angsuran mt-5">Angsuran Anda / Bulan : </h3>
<h1 class="text-harga mt-4"> Rp. ${result}</h1>
<p class="p-angsuran mt-4">Nb : Harga yang telah dijumlahkan tidaklah semata - mata mengikat, Namun Harga akhir Angsuran dapat berbeda sesuai Deler yang anda kunjungi</p>
<div class="container" style="z-index: 9;">
</div>`

}
    
const Pinjaman = () => {
var harga = document.getElementById('harga').value;
var uangmuka = document.getElementById('uangmuka').value
let tahun = document.getElementById('tahun').value;

//============ TOTAL PINJAMAN ==================
parseInt( harga = harga.replace(/[,.!a-zA-Z]/gi,""))
parseInt( uangmuka = uangmuka.replace(/[,.!A-Za-z]/gi,""))
if(harga !== "" && uangmuka !==  ""){
    
    var input = harga - uangmuka
}else{
    return swal({
        title: "Format Salah!",
        text: "Pastikan Hanya Angka Yang Anda Masukan",
        icon: "warning",
        button: "Coba Lagi",
      });
}

//=========== TOTAL Angsuran =====================
let hasil = input / tahun
let bulat=  Math.floor( hasil)
let angusran = String(bulat)
konver(angusran)

}

const konver = function (input) {
// rupiah =====================
var panjangInput = input.length
var angkaTersisa = panjangInput % 3;
var angkaSisa = '';
    if(angkaTersisa == 0){
        angkaSisa=3
    }else{
        angkaSisa=angkaTersisa
    }
var formatuang = String( input).substr(angkaSisa)
var panjangformat = formatuang.length / 3; 
var tigadigit =''
    for(i=0; i < panjangformat;i++){
        tigadigit="." + formatuang.substr(-3) + tigadigit
        var sisanilai = formatuang.length-3;
        formatuang = formatuang.substr(0,sisanilai);
    }
var hasil = String( input).substr(0,angkaSisa)
var result = hasil + tigadigit

eksekusi(result)
}





