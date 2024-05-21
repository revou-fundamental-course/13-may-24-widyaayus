function hitung_luas(){
    var nilai_alas=parseFloat(document.getElementById('alas').value);
    var nilai_tinggi=parseFloat(document.getElementById('tinggi').value);
    var hasil_luas = 0.5 *nilai_alas*nilai_tinggi;
    document.getElementById("keterangan_luas").style.display='block';
    document.getElementById("keterangan_rumus").innerHTML = "L = 1/2 x a x t"
    document.getElementById("isi_variabel").innerHTML = "L = 1/2 x "+nilai_alas+" x "+nilai_tinggi;
    document.getElementById("keterangan_hasil_luas").innerHTML = "L = "+hasil_luas;
    console.log(hasil_luas);
}

function hitung_keliling(){
    var nilai_s1=parseFloat(document.getElementById('s1').value);
    var nilai_s2=parseFloat(document.getElementById('s2').value);
    var nilai_s3=parseFloat(document.getElementById('s3').value);
    var hasil_keliling = nilai_s1+nilai_s2 + nilai_s3;
    document.getElementById("keterangan_keliling").style.display='block';
    document.getElementById("keterangan_rumus").innerHTML = "K = S1 + S2 + S3"
    document.getElementById("isi_variabel_keliling").innerHTML = "K = "+nilai_s1+" + "+nilai_s2+" + "+nilai_s3;
    document.getElementById("keterangan_hasil_keliling").innerHTML = "K = "+hasil_keliling
    console.log(hasil_keliling);
}

function reset_luas() {
    document.getElementById('alas').value = ''
    document.getElementById('tinggi').value = ''
    document.getElementById("keterangan_luas").style.display='none';
}

function reset_keliling(){
    document.getElementById('s1').value = ''
    document.getElementById('s2').value = ''
    document.getElementById('s3').value = ''
    document.getElementById("keterangan_keliling").style.display='none';
}