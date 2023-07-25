const scriptURL = 'https://script.google.com/macros/s/AKfycbwPcG8V8twi3ef_yFA3ye3xGaXhKEnq3_P3Fr3CkAYEixiNf7P5G1uD-BhRiMQzYwg/exec';
const form = document.forms['submit-to-google-sheet'];
let msg = document.querySelector('#msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
        {
            msg.innerText = "Thank You for Subscribing!";
            setTimeout(function(){
                msg.innerText = "";
            }, 5000);
            form.reset();
        })
      .catch(error => console.error('Error!', error.message))
  })


