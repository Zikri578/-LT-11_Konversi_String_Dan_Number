// Belum Konversi String Ke Number
const angka1 = "2";
const angka2 = 1;
const jumlah = angka1 + angka2;
document.writeln("<br>");
document.writeln("===========================================================");
document.writeln("<br>");
document.writeln("<b>Manampilkan Output Dengan File Terpisah Sebelum Konversi String Ke Number</b>");
document.writeln(`<p> <b>Hasilnya : </b>${jumlah} </p>`);
document.writeln("===========================================================");
document.writeln("<br>");

// Konversi String Ke Number
let penjumlahan = 45;
let perkalian = 23;
let sisabagi = penjumlahan + perkalian;
let pembagian = penjumlahan.toString() + perkalian.toString();
document.writeln("<br>");
document.writeln("===========================================================");
document.writeln("<br>");
document.writeln("<b>Menampilkan Output Dengan File Terpisah Setelah Konversi Number Ke String</b>");
document.writeln(`<p> Result : ${sisabagi}</p>`);
document.writeln(`<p> Result : ${pembagian}</p>`);
document.writeln("===========================================================");
document.writeln("<br>");

// Operasi NaN
const value1 = Number("Salah");
const value2 = 100;
const value3 = value1 + value2;
document.writeln("<br>");
document.writeln("===========================================================");
document.writeln("<br>");
document.writeln("<b>Menampilkan Output Dengan File Terpisah Untuk Operasi NaN</b>");
document.writeln("<br>");
document.writeln(`<p> Output : ${value3} </p>`);
document.writeln("===========================================================");
document.writeln("<br>");


// Operasi isNaN
document.writeln("<br>");
document.writeln("===========================================================");
document.writeln("<br>");
document.writeln("<b>Menampilkan Output Dengan File Terpisah Untuk Operasi isNaN</b>");
document.writeln("<br>");
document.writeln(`<p> Output : ${isNaN(value1)} </p>`);
document.writeln(`<p> Output : ${isNaN(value2)}</p`);
document.writeln("===========================================================");
document.writeln("<br>");

