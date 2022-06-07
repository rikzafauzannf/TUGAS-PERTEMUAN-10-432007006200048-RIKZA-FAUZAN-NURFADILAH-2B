$(document).ready(function(){
var nomor = 0;
  $("#Simpan").click(function(){
    var NIK,Nama,Tempat,tanggal,jeniskelamin,goldarah,Alamat,RT,RW,keldes,kec,agama,SP,Pekerjaan,KN,BH;
    NIK           = $("#NIK").val();
    Nama          = $("#Nama").val();
    Tempat        = $("#Tempat").val();
    tanggal       = $("#tanggal").val();
    jeniskelamin  = $("#jeniskelamin").val();
    goldarah      = $("#goldarah").val();
    Alamat        = $("#Alamat").val();
    RT            = $("#RT").val();
    RW            = $("#RW").val();
    keldes        = $("#keldes").val();
    kec           = $("#kec").val();
    agama         = $("#agama").val();
    SP            = $("#SP").val();
    Pekerjaan     = $("#Pekerjaan").val();
    KN            = $("#KN").val();
    BH            = $("#BH").val();

    document.getElementById('tampilNIK').innerHTML=NIK;
    document.getElementById('tampilNama').innerHTML=Nama;
    document.getElementById('tampilTempat').innerHTML=Tempat;
    document.getElementById('tampilTanggal').innerHTML=tanggal;
    document.getElementById('tampilJK').innerHTML=jeniskelamin;
    document.getElementById('tampilGD').innerHTML=goldarah;
    document.getElementById('tampilAlamat').innerHTML=Alamat;
    document.getElementById('tampilRT').innerHTML=RT;
    document.getElementById('tampilRW').innerHTML=RW;
    document.getElementById('tampilKEL').innerHTML=keldes;
    document.getElementById('tampilKEC').innerHTML=kec;
    document.getElementById('tampilAgama').innerHTML=agama;
    document.getElementById('tampilSP').innerHTML=SP;
    document.getElementById('tampilPJ').innerHTML=Pekerjaan;
    document.getElementById('tampilKN').innerHTML=KN;
    document.getElementById('tampilBH').innerHTML=BH;

    nomor++;
    $("#hasil").append("<tr><td>"+nomor+"</td><td>"+NIK+"</td><td>"+Nama+"</td><td>"+Tempat+" , "+tanggal+"</td><td>"+jeniskelamin+"</td><td>"+Alamat+"</td><td>"+RT+" / "+RW+"</td><td>"+keldes+"</td><td>"+kec+"</td><td>"+agama+"</td><td>"+SP+"</td><td>"+Pekerjaan+"</td><td>"+KN+"</td><td>"+BH+"</td></tr>")
  });
  $("#Isi").click(function(){
    $("#NIK").val("");
    $("#Nama").val("");
    $("#Tempat").val("");
    $("#tanggal").val("");
    $("#jeniskelamin").val("");
    $("#goldarah").val("");
    $("#Alamat").val("");
    $("#RT").val("");
    $("#RW").val("");
    $("#keldes").val("");
    $("#kec").val("");
    $("#agama").val("");
    $("#SP").val("");
    $("#Pekerjaan").val("");
    $("#KN").val("");
    $("#BH").val("Seumur Hidup");
  });
  $("#baru").click(function(){
    nomor =0;
    $("#hasil").val("");
  });
  $("#print").click(function(){
    $("#kiri").hide();
    $("#kanan").hide();
    window.print();
  });
});
