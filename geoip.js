// http://api.ipapi.com/5.145.227.148?access_key=6248620991f2f88b241e253fb9f5bcb6

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let city,
        today = new Date(),
        newDate = today.setDate(new Date().getDate() + 90);
    console.log(newDate.getUTCHours());
    // document.cookie = "name=value; domain=wh77.ru; path=/; expires=" + date.toUTCString();

    fetch('http://api.ipapi.com/check?access_key=6248620991f2f88b241e253fb9f5bcb6&format=1')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response  
                response.json().then(function (data) {
                    city = data.city;

                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
});