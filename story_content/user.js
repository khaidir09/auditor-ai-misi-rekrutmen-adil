function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EDwTcyHFjv":
        Script1();
        break;
      case "6ouRixivYBS":
        Script2();
        break;
      case "5qdQvbCmH3G":
        Script3();
        break;
      case "5cwdBAbWpKA":
        Script4();
        break;
      case "6lugCCYxO8H":
        Script5();
        break;
      case "5zRK1F1jKd5":
        Script6();
        break;
      case "6igEA1jtEDK":
        Script7();
        break;
      case "5u5CyRPHVqf":
        Script8();
        break;
      case "6CW3XRCo7nG":
        Script9();
        break;
      case "5dpNoRf3uHZ":
        Script10();
        break;
      case "6ihe4vNz4mA":
        Script11();
        break;
      case "63I5DGk3SFZ":
        Script12();
        break;
      case "6rC5KVqvltD":
        Script13();
        break;
      case "6IwzGjMkedd":
        Script14();
        break;
      case "67xQkq1K9Cp":
        Script15();
        break;
      case "6kt8YwcSF1g":
        Script16();
        break;
      case "61CdTseat3T":
        Script17();
        break;
      case "5x8KHBvuZdb":
        Script18();
        break;
      case "5lNmy3m5Ul2":
        Script19();
        break;
      case "5na5uJrFaLY":
        Script20();
        break;
      case "5Y5nzebiUdI":
        Script21();
        break;
      case "5cUGY9l1hxv":
        Script22();
        break;
      case "6i9PjHREhG9":
        Script23();
        break;
      case "6Dd9NCkYwTd":
        Script24();
        break;
      case "5qfktpPUKg0":
        Script25();
        break;
      case "5doI930gpht":
        Script26();
        break;
      case "6pXHZUMTQgU":
        Script27();
        break;
      case "5kWUccV3aFT":
        Script28();
        break;
      case "60KID7xbw6x":
        Script29();
        break;
      case "6Rd8ULTl1po":
        Script30();
        break;
      case "6PI1wq3E1Ei":
        Script31();
        break;
      case "6YGKfS9FBt0":
        Script32();
        break;
      case "6htfBNS6EUr":
        Script33();
        break;
      case "5cZxc1xDblt":
        Script34();
        break;
      case "64JuzhpOEal":
        Script35();
        break;
      case "6W7wklgOWOB":
        Script36();
        break;
      case "5UxU8cmNYZX":
        Script37();
        break;
      case "6gWTHO1x7Ai":
        Script38();
        break;
      case "64a7TlL9swQ":
        Script39();
        break;
      case "6Tf1WGFoI5n":
        Script40();
        break;
      case "6q0cnp3eQrH":
        Script41();
        break;
      case "6JGOarmQWs0":
        Script42();
        break;
      case "5lsMalQ8YEp":
        Script43();
        break;
      case "5fExZegbZNQ":
        Script44();
        break;
      case "6UV9nhdi1Un":
        Script45();
        break;
      case "5qY4CRZn2Q9":
        Script46();
        break;
      case "605NBTPAzey":
        Script47();
        break;
      case "6jJtsaursaA":
        Script48();
        break;
      case "5oZSIouxbIp":
        Script49();
        break;
      case "68qew0H12c6":
        Script50();
        break;
      case "5YYlQWA7SjP":
        Script51();
        break;
      case "6HvN1dDcJ7N":
        Script52();
        break;
      case "5aPU4xxRsH3":
        Script53();
        break;
      case "5aFbeaj0nxc":
        Script54();
        break;
      case "6hznrTNwWaI":
        Script55();
        break;
      case "5tKBxIfj7r2":
        Script56();
        break;
      case "67kpedZwAWM":
        Script57();
        break;
      case "6oVvK2mh9JE":
        Script58();
        break;
      case "6JjZb7T2Tkp":
        Script59();
        break;
      case "6rOgVjEyeu1":
        Script60();
        break;
      case "6AJLT2sOEgj":
        Script61();
        break;
      case "69ZVquCksOM":
        Script62();
        break;
      case "6846GFABoel":
        Script63();
        break;
      case "5wmvzeK91Rf":
        Script64();
        break;
      case "5XdokvwFZ63":
        Script65();
        break;
      case "6pbhrAMOQwK":
        Script66();
        break;
      case "5XVfzebXjHX":
        Script67();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script8()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script9()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script10()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script11()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script12()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script13()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script14()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script15()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script16()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script17()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05;
}
}

function Script18()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script19()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script20()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script21()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05;
}
}

function Script22()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script23()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05;
}
}

function Script24()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script25()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script26()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script27()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script28()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script29()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script30()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script31()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script32()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script33()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script34()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script35()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script36()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script37()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script38()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script39()
{
  // Mengambil objek audio berdasarkan ID yang sudah dibuat sebelumnya
var audio = document.getElementById('bgSong');

// Jika audio ditemukan, hentikan putarannya
if (audio !== null) {
    audio.pause();
    console.log("Backsound berhasil dihentikan pada slide ini.");
}
}

function Script40()
{
  var audio = document.getElementById('bgSong');

// Jika audio ada dan dalam kondisi berhenti, putar kembali
if (audio !== null && audio.paused) {
    audio.play();
    console.log("Backsound dilanjutkan kembali.");
}
}

function Script41()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script42()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script43()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script44()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script45()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script46()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script47()
{
  var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
    if (typeof iframes[i].contentWindow.downloadPDF === 'function') {
        iframes[i].contentWindow.downloadPDF();
        break;
    }
}
}

function Script48()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script49()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script50()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script51()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script52()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script53()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script54()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script55()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3;
}
}

function Script56()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script57()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script58()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script59()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script60()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script61()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script62()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.05; // Mengecil menjadi 5%
}
}

function Script63()
{
  var audio = document.getElementById('bgSong');
if (audio !== null) {
    audio.volume = 0.3; // Kembali ke volume awal (30%)
}
}

function Script64()
{
  // Membuat pendengar pesan
window.addEventListener("message", function(event) {
    // Cek apakah isi pesannya sesuai
    if (event.data === "GAME_COMPLETE") {
        var player = GetPlayer();
        player.SetVar("GameLevel1", true);
    }
}, false);
}

function Script65()
{
  // Membuat pendengar pesan
window.addEventListener("message", function(event) {
    // Cek apakah isi pesannya sesuai
    if (event.data === "GAME_COMPLETE_2") {
        var player = GetPlayer();
        player.SetVar("GameLevel2", true);
    }
}, false);
}

function Script66()
{
  // Membuat pendengar pesan
window.addEventListener("message", function(event) {
    // Cek apakah isi pesannya sesuai
    if (event.data === "GAME_COMPLETE_3") {
        var player = GetPlayer();
        player.SetVar("GameLevel3", true);
    }
}, false);
}

function Script67()
{
  // Mencari semua Web Object (iframe) di dalam slide
var iframes = document.getElementsByTagName('iframe');

// Melakukan iterasi untuk mencari iframe yang memiliki fungsi downloadPDF
for (var i = 0; i < iframes.length; i++) {
    if (typeof iframes[i].contentWindow.downloadPDF === 'function') {
        // Memanggil fungsi eksekusi PDF yang ada di dalam HTML Web Object
        iframes[i].contentWindow.downloadPDF();
        break; // Hentikan pencarian jika sudah ketemu
    }
}
}

