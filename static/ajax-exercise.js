"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (response) => {
        $('#fortune-text').text(response);
    });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune)
// with jQuery
// $('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
    $.ajax({
        url: "/weather.json",
        data: JSON.stringify(formData),
        contentType: "application/json",
        success: (response) => {
            alert(response);
        }

    })
}
document.getElementById('get-fortune-button').addEventListener('submit', showFortune)
// with jQuery
// $("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.getElementById('order-form').addEventListener('submit', orderMelons)
// with jQuery
// $("#order-form").on('submit', orderMelons);


