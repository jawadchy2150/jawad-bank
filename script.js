//login button event handler

const loginBtn= document.getElementById("login"); 
loginBtn.addEventListener('click', function() {
    const loginAreaDiv= document.getElementById("login-area");
    loginAreaDiv.style.display = "none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display= "block";
})


//deposit button event handler

const depositBtn= document.getElementById("btnDeposit");
depositBtn.addEventListener('click', function() {
    const depositAmount= document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    const currentDeposit= document.getElementById("currentDeposit").innerText;
    const currentDepositNumber= parseFloat(currentDeposit);
    const totalDeposit= currentDepositNumber + depositNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalance= parseFloat(document.getElementById("currentBalance").innerText);
    const totalBalance= depositNumber + currentBalance;
    document.getElementById("currentBalance").innerText= totalBalance;
})

//withdraw button event handler

const withdrawBtn= document.getElementById("btnWithdraw");
withdrawBtn.addEventListener('click', function() {
    const withdrawnAmount= document.getElementById("withdrawAmount").value;
    const withdrawnNumber= parseFloat(withdrawnAmount);
    const currentWithdrawAmount= document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber= parseFloat(currentWithdrawAmount);
    const totalWithdraw= withdrawnNumber + currentWithdrawNumber;
    document.getElementById("currentWithdraw").innerText= totalWithdraw;

    const currentBalance= parseFloat(document.getElementById("currentBalance").innerText);
    const totalBalance= currentBalance - withdrawnNumber;
    document.getElementById("currentBalance").innerText= totalBalance;

})