# -LT-11_Konversi_String_Dan_Number

JavaScript memiliki beberapa cara untuk mengubah tipe data string ke tipe data number atau sebaliknya. Berikut adalah beberapa cara yang dapat digunakan:

>  Menggunakan function parseInt() untuk mengubah string ke integer (angka bulat). Contoh:
 
 
    let x = "10";
    let y = parseInt(x);
    console.log(typeof y); // output: "number"


>  Menggunakan function parseFloat() untuk mengubah string ke float (angka pecahan). Contoh:


    let x = "10.5";
    let y = parseFloat(x);
    console.log(typeof y); // output: "number"


>  Menggunakan function Number() untuk mengubah string ke number. Contoh:


    let x = "10";
    let y = Number(x);
    console.log(typeof y); // output: "number"


>  Menggunakan operator unary plus (+) untuk mengubah string ke number. Contoh:


    let x = "10";
    let y = +x;
    console.log(typeof y); // output: "number"

Untuk mengubah number ke string, Anda dapat menggunakan function toString() atau menggunakan operator string concatenation ('' +). Contoh:

    let x = 10;
    let y = x.toString();
    console.log(typeof y); // output: "string"

    let z = '' + x;
    console.log(typeof z); // output: "string"


Saat mengubah tipe data string ke number, ada beberapa hal yang perlu diperhatikan. Pertama, function parseInt() dan parseFloat() hanya akan mengubah string ke number jika string tersebut merupakan representasi dari sebuah angka yang valid. Jika string tersebut tidak dapat dikonversi ke number, maka kedua function tersebut akan mengembalikan NaN (Not a Number). Contoh:

    console.log(parseInt("10")); // output: 10
    console.log(parseInt("10.5")); // output: 10
    console.log(parseInt("hello")); // output: NaN

    console.log(parseFloat("10")); // output: 10
    console.log(parseFloat("10.5")); // output: 10.5
    console.log(parseFloat("hello")); // output: NaN

Kedua, function parseInt() akan mengabaikan bagian pecahan dari string jika string tersebut merupakan representasi dari sebuah angka pecahan. Jika Anda ingin mengubah string yang merupakan representasi dari sebuah angka pecahan menjadi tipe data number, maka Anda harus menggunakan function parseFloat() atau operator unary plus (+). Contoh:

    console.log(parseInt("10.5")); // output: 10
    console.log(parseFloat("10.5")); // output: 10.5
    console.log(+"10.5"); // output: 10.5

Ketiga, function Number() dan operator unary plus (+) akan mengembalikan NaN jika string yang dikonversi tidak merupakan representasi dari sebuah angka yang valid. Contoh:

    console.log(Number("hello")); // output: NaN
    console.log(+"hello"); // output: NaN

Keempat, function parseInt() dan parseFloat() menerima parameter kedua yang merupakan basis angka untuk konversi string ke number. Basis angka yang sering digunakan adalah 10 (desimal) dan 16 (heksadesimal). Contoh:

    console.log(parseInt("10", 10)); // output: 10
    console.log(parseInt("10", 16)); // output: 16
    console.log(parseInt("10", 2)); // output: 2

    console.log(parseFloat("10.5", 10)); // output: 10.5
    console.log(parseFloat("10.5", 16)); // output: 16.3125
    console.log(parseFloat("10.5", 2)); // output: 2.015625

Kelima, saat mengubah tipe data number ke string, Anda juga perlu memperhatikan bagaimana Anda ingin menampilkan angka tersebut. Function toString() menerima parameter opional yang merupakan basis angka untuk konversi number ke string. Basis angka yang sering digunakan adalah 10 (desimal), 16 (heksadesimal), dan 2 (biner). Contoh:

    console.log((10).toString(10)); // output: "10"
    console.log((10).toString(16)); // output: "a"
    console.log((10).toString(2)); // output: "1010"



