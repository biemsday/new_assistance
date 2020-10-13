const services = require ('../services.js')

var check_button = document.getElementsByClassName('submit-button')
var input = document.getElementById('login_instagram')
check_button.onclick(services.get_user_followers(input.value))