// Login Page
function logIn(event)
{
    // event.preventDefault();
    const inputNumber = document.getElementById('input-number');
    const inputPin = document.getElementById('input-pin');

    const number = parseInt(inputNumber.value);
    const pin = parseInt(inputPin.value);

    if((!isNaN(number) && inputNumber.value.length === 11) && (!isNaN(pin) && inputPin.value.length === 4))
    {
        window.location.href = "./home.html"
    }
    else
    {
        alert("Please enter a valid number and pin!");
    }
}

// Logout
function logOut()
{
    window.location.href = "./index.html";
}

// Add Money Page
function addMoney()
{
    window.location.href = "./addmoney.html"
}