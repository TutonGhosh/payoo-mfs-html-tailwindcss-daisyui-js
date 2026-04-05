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
        alert("Invalid Number and Pin!");
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
// Add Money Function
function addMoneyBtn()
{
    const mainBalance = document.getElementById('main-balance');
    const inputAccNumber = document.getElementById('input-acc-number');
    const inputAmount = document.getElementById('input-amount');
    const inputPin = document.getElementById('input-pin');

    let balance = parseInt(mainBalance.innerText.replace('$', ''));
    const accNumber = parseInt(inputAccNumber.value);
    const amount = parseInt(inputAmount.value);
    const pin = parseInt(inputPin.value);


    if((!isNaN(accNumber) && inputAccNumber.value.length === 11) && (!isNaN(pin) && inputPin.value.length === 4))
    {
        balance += amount;
        mainBalance.innerText = '$' + balance;
        localStorage.setItem('mainBalance', balance);
        window.location.href = './payment_successful.html';
    }
    else
    {
        alert("Invalid Input");
    }
}

// Back to Home
function backToHome(mainBalance)
{

    window.location.href = "./home.html"
}