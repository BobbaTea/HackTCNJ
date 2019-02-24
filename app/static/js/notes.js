// document.getElementById('note-text').onkeydown = function (e) {
//     console.log("hello");
//     if (e.keyCode == 13) {
//         if (document.getElementById('note-text').innerText == "") {
//             var temp = new Date().toLocaleTimeString();
//             document.getElementsByClassName('notes-list') += "   <div class='container-fluid'><div class='row'><span class='new badge left-align' data-badge-caption=''>" + temp + "</span><p class='ml-3 right-align ' style='text-align: justify'>" + document.getElementById('note-text').innerText + "</p></div></div>"
//         }
//     }
// };

// function runn(){
//     var temp = new Date().toLocaleTimeString();
//     document.getElementsByClassName('notes-list') += "   <div class='container-fluid'><div class='row'><span class='new badge left-align' data-badge-caption=''>" + temp + "</span><p class='ml-3 right-align ' style='text-align: justify'>" + document.getElementById('note-text').innerText + "</p></div></div>"
//     console.log("asdfasd")

// }
var input = document.getElementsByClassName("note-text")[0];

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        var temp = new Date().toLocaleTimeString();
        document.getElementById('notes-list').innerHTML += "   <div class='container-fluid'><div class='row'><span class='new badge left-align' data-badge-caption=''>" + temp + "</span><p class='ml-3 right-align ' style='text-align: justify; word-wrap: break-word'>" + document.getElementsByClassName('note-text')[0].value + "</p></div></div>"
        console.log(document.getElementsByClassName("note-text")[0])
    }
});