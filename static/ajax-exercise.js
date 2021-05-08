"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // TODO: get the fortune and show it in the #fortune-text div

    $.get('/fortune', (response) => {
    //     $('#fortune-text').text(response);
    // })
        document.getElementById("fortune-text").innerHTML = response
    })
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);
// with jQuery
// $('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    // TODO: request weather with that URL and show the forecast in #weather-info

    evt.preventDefault();
    let url = "/weather.json";
    let formData = { zipcode: $("#zipcode-field").val() };
    $.get(url, formData, (response) => {
        $("#weather-info").text(response.forecast)
    })
}
    
document.getElementById('weather-form').addEventListener('submit', showWeather);
// with jQuery
// $("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    // TODO: show the result message after your form
    const formInputs = {
        melon_type: $("#melon-type-field").val(),
        qty: $("#qty-field").val()
    };

    $.ajax({
        url:"/order-melons.json",
        data: JSON.stringify(formInputs),
        contentType: "application/json",
        // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
        success: (response) => {
            if (response.code === 'OK') {
                $("#order-status").text(response.msg);
            } else{
                $("#order-status").addClass("order-error");
                $("#order-status").text(response.msg);
            }
        },
        method: "POST",
    })
}

document.getElementById('order-form').addEventListener('submit', orderMelons);
// with jQuery
// $("#order-form").on('submit', orderMelons);



// PART FURTHER STUDY: SHOW DOG IMAGE

function showDogImage(evt) {
    evt.preventDefault();
    fetch ("https://dog.ceo/api/breeds/image/random")
        .then ( (response) => response.json() ) //what is the .json() doing? is it the jscript version of python's jsonify?
        .then ( (result) => { //what is result? is it interchangable with response? or is it the result of the previous .then?
            const { message : imageUrl } = result;
            const dogImage = document.createElement("img");
            dogImage.setAttribute("src", imageUrl);
            document.querySelector("#dog-image").append(dogImage);
        })
}


document.querySelector('#get-dog-image-button').addEventListener('click', showDogImage);
