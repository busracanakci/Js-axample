const kyt = document.querySelector('#kaydet');

kyt.addEventListener('click',btnclick);

function btnclick() {
    var ad=document.getElementById('isim').value;
    var soyad=document.getElementById('soyisim').value;
    var yas=document.getElementById('yas').value;
    var mail=document.getElementById('email').value;
    document.getElementById('form1').innerHTML = ad +" "+soyad +" "+ yas+" "+ mail;
 
}



