// Login
function logIn(event)
{
    // event.preventDefault();
    const inputNumber = document.getElementById('input-number');
    const inputPin = document.getElementById('input-pin');

    const number = parseInt(inputNumber.value);
    const pin = parseInt(inputPin.value);

    if((!isNaN(number) && inputNumber.value.length === 11) && (!isNaN(pin) && inputPin.value.length === 4))
    {
        const login = document.getElementById('login-section');
        const home = document.getElementById('home-section');
        login.classList.add('hidden');
        home.classList.remove('hidden');
    }
    else
    {
        alert("Please enter a valid number!");
    }
}