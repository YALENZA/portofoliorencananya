const nama = "Yalenza Aemly";
let usia = 30;

let biodata = document.getElementById('biodata');

function generateBiodata(){
    let generasi;

    if(usia < 2){
        generasi = "generasi bayi";
    } 
    else if(usia > 2 && usia < 10){
        generasi = "generasi balita dan anak-anak";
    } 
    else if(usia > 10 && usia < 18){
        generasi = "generasi remaja";
    } 
    else if(usia > 18 && usia < 40){
        generasi = "generasi dewasa";
    } 
    else {
        generasi = "anda sudah jadi bangkai";
    }
    
    return biodata.innerHTML = generasi; 
}
console.log(nama);
console.log(usia);
generateBiodata();