$(".btn").click(function(){
    window.contract.get_total_staked_balance({}).then(res => {
        console.log(res);
        if (res.length != 0) {

        } else {
            console.log('error');
        }
    });
})
$(".btn2").click(function(){
    // console.log(wallet.getAccountId())
    let user=wallet.getAccountId() == 'longxtx365.betanet'?"gdafg3rr.betanet":'longxtx365.betanet';
    console.log(user)
    window.contract.get_account_total_balance({"account_id": user}).then(res => {
        console.log(res);
        if (res.length != 0) {

        } else {
            console.log('error');
        }
    });
})
$(".btn3").click(function(){
    localStorage.setItem("cardinfo", '123');
    console.log(localStorage)
})
