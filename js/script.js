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
            return;
        }
        
    const data = {
        name: "Add Money",
        bill: amount,
        date: new Date().toLocaleString()
    }
    transactionData.push(data);
    
    localStorage.setItem('transactionData', JSON.stringify(transactionData));
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
            return;
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
        return;
    }

    const data = {
        name: "Cash Out",
        bill: amount,
        date: new Date().toLocaleString()
    }
    transactionData.push(data);
    localStorage.setItem('transactionData', JSON.stringify(transactionData));
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
            return;
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
        return;
    }

    const data = {
        name: "Transfer Money",
        bill: amount,
        date: new Date().toLocaleString()
    }
    transactionData.push(data);
    localStorage.setItem('transactionData', JSON.stringify(transactionData));
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
    let amount = 0;

    if(coupon === 'payoo100' || coupon === 'payoo200')
    {
        if(coupon === 'payoo100')
        {
            amount = 100;
            balance += 100;
            mainBalance.innerHTML = '$' + balance;
            window.localStorage.setItem('mainBalance', balance);
            window.location.href = "./transaction_successful.html";
        }
        else if(coupon === 'payoo200')
        {
            amount = 200;
            balance += 200;
            mainBalance.innerHTML = '$' + balance;
            window.localStorage.setItem('mainBalance', balance);
            window.location.href = "./transaction_successful.html";
        }
    }
    else
    {
        alert("Wrong Coupon!");
        return
    }

    const data = {
        name: "Get Bonus",
        bill: amount,
        date: new Date().toLocaleString()
    }
    transactionData.push(data);
    localStorage.setItem('transactionData', JSON.stringify(transactionData));
}

// Pay Bill Page
function payBill()
{
    window.location.href = "./paybill.html"
}
// Pay Bill Function
function payBillBtn()
{
    const mainBalance = document.getElementById('main-balance');
    const inputBillerAccountNumber = document.getElementById('input-biller-acc-number');
    const inputAmount = document.getElementById('input-amount');
    const inputPin = document.getElementById('input-pin');

    let balance = parseInt(mainBalance.innerText.replace('$', ''));
    const billerAccountNumber = parseInt(inputBillerAccountNumber.value);
    const amount = parseInt(inputAmount.value);
    const pin = parseInt(inputPin.value);

    if((!isNaN(billerAccountNumber) && inputBillerAccountNumber.value.length === 11) && (!isNaN(pin) && inputPin.value.length === 4))
    {
        if(balance < amount)
        {
            alert("Insufficient balance!");
            return;
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
        return;
    }

    const data = {
        name: "Pay Bill",
        bill: amount,
        date: new Date().toLocaleString()
    }
    transactionData.push(data);
    localStorage.setItem('transactionData', JSON.stringify(transactionData));
}

// Transaction Data
const transactionData = JSON.parse(localStorage.getItem('transactionData')) || [];
// Transaction History Page
function transactionHistory()
{
    window.location.href = "./transactionhistory.html"
}
// Load Transaction Page
function loadTransaction()
{
    const transactionContainer = document.getElementById('transaction-container');
    for(const data of transactionData)
    {
        const div = document.createElement('div');
        if(data.name === 'Add Money' || data.name === "Get Bonus")
        {
            div.innerHTML = `
            <div class="flex justify-between items-center bg-[#FFFFFF] p-2 px-3 rounded-lg">
                <div class="flex gap-3">
                    <div class="bg-[#f4f5f7] rounded-full p-3">
                        <img class="h-[20px]" src="assets/opt-5.png" alt="">
                    </div>
                    <div>
                        <h1 class="text-base font-semibold text-gray-700">${data.name} <span class="text-green-400 ml-3">+${data.bill}</span></h1>
                        <p class="text-xs font-medium text-blue-500">${data.date}</p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>       
            `
        }
        else
        {
            div.innerHTML = `
            <div class="flex justify-between items-center bg-[#FFFFFF] p-2 px-3 rounded-lg">
                <div class="flex gap-3">
                    <div class="bg-[#f4f5f7] rounded-full p-3">
                        <img class="h-[20px]" src="assets/opt-5.png" alt="">
                    </div>
                    <div>
                        <h1 class="text-base font-semibold text-gray-700">${data.name} <span class="text-red-400 ml-3">-${data.bill}</span></h1>
                        <p class="text-xs font-medium text-blue-500">${data.date}</p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>       
            `
        }
        transactionContainer.appendChild(div);
        document.getElementById('history-display').style.display = 'none';
    }
}
// Back to Home
function backToHome(mainBalance)
{
    window.location.href = "./home.html"
}