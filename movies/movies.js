"use strict";



$("#submit-movie-rating").on("click", handleSubmit);
$("ul").on("click", "button", handleDelete);
function handleSubmit(evt) {
    evt.preventDefault();
    let title = $("#title-input").val();
    if(title.length < 2){
        return;
    }
    let rating = $("#rating-input").val();

    $("ul").append($(`<li>${title} ${rating} <button>Delete</button> </li>`));

    $("#title-input").val("");
    $("#rating-input").val("");
}

function handleDelete(evt) {
    evt.currentTarget.parentNode.remove();
}

