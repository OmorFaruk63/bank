let btnadd = document.getElementById('deposit-btn')
let addinput = document.getElementById('deposit-input')
let deposit = document.getElementById('deposit-amount')
let balance = document.getElementById('balance-amount')
let wridrowInput = document.getElementById('withdraw-input')
let btnWidrow = document.getElementById('withdraw-btn')
let writhdrow = document.getElementById('withdraw-amount')
btnadd.addEventListener('click', function () {
    let a = add(addinput.value, deposit.innerHTML)
    let b = addBalance(addinput.value, balance.innerHTML)
    deposit.innerHTML = a
    balance.innerHTML = b
})
function add(input, deposit) {
    let money = parseFloat(input)
    let depositMoney = parseFloat(deposit)
    return money + depositMoney
}
function addBalance(input, balance) {
    let money = parseFloat(input)
    let balanceMoney = parseFloat(balance)
    addinput.value = '';
    return money + balanceMoney
}
btnWidrow.addEventListener('click', function () {
    let s = subBalance(wridrowInput.value, balance.innerHTML, writhdrow.innerHTML)
    balance.innerHTML = s
})
function subBalance(input, balance, widrow) {
    let a = parseFloat(input)
    let c = parseFloat(widrow)
    writhdrow.innerHTML = a + c
    let b = parseFloat(balance)
    wridrowInput.value = ''
    return b - a
}
