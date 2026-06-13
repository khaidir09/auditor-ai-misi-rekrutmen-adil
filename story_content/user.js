function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aCqbKnnPrd":
        Script1();
        break;
      case "6SV9g3RLwYM":
        Script2();
        break;
      case "6JwhFCbVMeD":
        Script3();
        break;
      case "5f4LpvGDq7z":
        Script4();
        break;
      case "5aQD4pbqQ9z":
        Script5();
        break;
      case "5XFVcyzq4Bu":
        Script6();
        break;
      case "6bbnjpscODy":
        Script7();
        break;
      case "63mhVmre2xp":
        Script8();
        break;
      case "5YDZ5z3I6pZ":
        Script9();
        break;
      case "5wpgezEJkve":
        Script10();
        break;
      case "6OkQhv7vnKc":
        Script11();
        break;
      case "67n0SnKRKmy":
        Script12();
        break;
      case "5lXsORMRtEw":
        Script13();
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
  // Mengambil objek audio berdasarkan ID yang sudah dibuat sebelumnya
var audio = document.getElementById('bgSong');

// Jika audio ditemukan, hentikan putarannya
if (audio !== null) {
    audio.pause();
    console.log("Backsound berhasil dihentikan pada slide ini.");
}
}

function Script8()
{
  var audio = document.getElementById('bgSong');

// Jika audio ada dan dalam kondisi berhenti, putar kembali
if (audio !== null && audio.paused) {
    audio.play();
    console.log("Backsound dilanjutkan kembali.");
}
}

function Script9()
{
  var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
    if (typeof iframes[i].contentWindow.downloadPDF === 'function') {
        iframes[i].contentWindow.downloadPDF();
        break;
    }
}
}

function Script10()
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

function Script11()
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

function Script12()
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

function Script13()
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

