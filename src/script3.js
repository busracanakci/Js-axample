const kyt = document.querySelector('#kaydet');

kyt.addEventListener('click',btnclick);

function btnclick() {
    var ad=document.getElementById('isim').value;
    var soyad=document.getElementById('soyisim').value;
    var yas=document.getElementById('yas').value;
    var mail=document.getElementById('email').value;
    document.getElementById('f1').innerHTML = ad;
    document.getElementById('f2').innerHTML = soyad;
    document.getElementById('f3').innerHTML = yas;
    document.getElementById('f4').innerHTML = mail;
    if(ad == ""){
        alert("Ad alanı zorunludur!");
    }
    if(soyad==""){
        alert("Soyad alanı zorunludur!");
    }
    if(mail== "")
    {
        alert("Mail adresi zorunludur!");
    }

}



