var socket = io();

$(()=>{
    $("#send").click(() =>{
        var searched = {search: $("#searched").val().trim().toString()};
        console.log(searched);
        $("#meteoriteInfo").append(`<p> ${searched.search}</p>`);
        searchData(searched);
    })
})

socket.on('requests');

function searchData(searched){
    $.post('http://127.0.0.1:3000/', searched)
}