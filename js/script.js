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
    const selectBank = document.querySelector('select');

    let balance = parseInt(mainBalance.innerText.replace('$', ''));
    const accNumber = parseInt(inputAccNumber.value);
    const amount = parseInt(inputAmount.value);
    const pin = parseInt(inputPin.value);

    if((selectBank.value !== 'Select A Bank') && (!isNaN(accNumber) && inputAccNumber.value.length === 11) && (!isNaN(pin) && inputPin.value.length === 4))
    {
        balance += amount;
        mainBalance.innerText = '$' + balance;
        localStorage.setItem('mainBalance', balance);
        window.location.href = './transaction_successful.html';
    }
    else
    {
        alert("Invalid Input");
    }
}

// Cash Out Page
function cashOut() 
{
    window.location.href = "./cashout.html";
}
// Cash Out Function
function cashOutBtn()
{
    const mainBalance = document.getElementById('main-balance');
    const inputAgentNumber = document.getElementById('input-agent-number');
    const inputAmount = document.getElementById('input-amount');
    const inputPin = document.getElementById('input-pin');

    let balance = parseInt(mainBalance.innerText.replace('$', ''));
    const agentNumber = parseInt(inputAgentNumber.value);
    const amount = parseInt(inputAmount.value);
    const pin = parseInt(inputPin.value);

    if((!isNaN(agentNumber) && inputAgentNumber.value.length === 11) && (!isNaN(pin) && inputPin.value.length === 4))
    {
        if(balance < amount)
        {
            alert("Insufficient balance!");
        }
        else
        {
            balance -= amount;
            mainBalance.innerHTML = '$' + balance;
            window.localStorage.setItem('mainBalance', balance);
            window.location.href = "./transaction_successful.html";
        }
    }
    else
    {
        alert("Invalid Input");
    }
}

// Transfer Money Page
function transferMoney()
{
    window.location.href = "./transfermoney.html"
}
// Transfer Money Function
function transferMoneyBtn()
{
    const mainBalance = document.getElementById('main-balance');
    const inputAccountNumber = document.getElementById('input-account-number');
    const inputAmount = document.getElementById('input-amount');
    const inputPin = document.getElementById('input-pin');

    let balance = parseInt(mainBalance.innerText.replace('$', ''));
    const accountNumber = parseInt(inputAccountNumber.value);
    const amount = parseInt(inputAmount.value);
    const pin = parseInt(inputPin.value);

    if((!isNaN(accountNumber) && inputAccountNumber.value.length === 11) && (!isNaN(pin) && inputPin.value.length === 4))
    {
        if(balance < amount)
        {
            alert("Insufficient balance!");
        }
        else
        {
            balance -= amount;
            mainBalance.innerHTML = '$' + balance;
            window.localStorage.setItem('mainBalance', balance);
            window.location.href = "./transaction_successful.html";
        }
    }
    else
    {
        alert("Invalid Input");
    }
}

// Get Bonus Page
function getBonus()
{
    window.location.href = "./getbonus.html";
}
// Get Bonus Function
function getBonusBtn()
{
    const mainBalance = document.getElementById('main-balance');
    const inputCoupon = document.getElementById('input-coupon');
    const coupon = inputCoupon.value

    let balance = parseInt(mainBalance.innerText.replace('$', ''));

    if(coupon === 'payoo100' || coupon === 'payoo200')
    {
        if(coupon === 'payoo100')
        {
            balance += 100;
            mainBalance.innerHTML = '$' + balance;
            window.localStorage.setItem('mainBalance', balance);
            window.location.href = "./transaction_successful.html";
        }
        else if(coupon === 'payoo200')
        {
            balance += 200;
            mainBalance.innerHTML = '$' + balance;
            window.localStorage.setItem('mainBalance', balance);
            window.location.href = "./transaction_successful.html";
        }
    }
    else
    {
        alert("Wrong Coupon!");
    }
}

// Back to Home
function backToHome(mainBalance)
{
    window.location.href = "./home.html"
}