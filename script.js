
function invoke(){
//Creating a  Variable.
let pin = 1111;
const ussd = "*919#";
let balance = 10000;
const ussdInput = document.getElementById("ussdInput").value;


//if USSD is correct
while (ussdInput === ussd) {
    let id = Number(prompt("Welcome to UBA USSD Service\n1>Airtime-Self\n2>Airtime-Others\n3>Trsf-UBA\n4>Trsf-Other Banks\n5>Check Balance\n6>Exit"));

    // Option1 Airtime-self
    switch (true) {
        case (id === 1):
            let airtimeAmountSelf = Number(prompt("Enter amount: "))
            balCheck(airtimeAmountSelf, balance)
            balance -= airtimeAmountSelf;
            alert(`#${airtimeAmountSelf}.00 has been sent to your Number.`)
            break;
        // Option2 Airtime-Others
        case (id === 2):
            let airtimeAmountOthers = Number(prompt("Enter amount: "));
            balCheck(airtimeAmountOthers, balance)
            balance -= airtimeAmountOthers;
            let airtimeNumber = Number(prompt("Enter Phone Number: "));
            alert(`#${airtimeAmountOthers}.00 has been sent to +234${airtimeNumber}`);
            break;
        // Option3 Trsf-UBA
        case (id === 3):
            // Pin Check
            let pinCheck = Number(prompt("Enter you pin to confirm transaction"));
            if (pinCheck === pin) {
                let accountNumber = Number(prompt("Enter Recepient account number please: "));
                let amountSelf = Number(prompt("Enter amount: "))
                balCheck(amountSelf, balance)
                balance -= amountSelf;
                alert(`#${amountSelf}.00 was just Transfered to ${accountNumber}`)
            }
            else {
                alert("You have entered an invalid pin")
            }
            break;

        // Option4 Trsf-Others
        case (id === 4):
            // Pin Check
            let pinCheck2 = Number(prompt("Enter you pin to confirm transaction"));
            if (pinCheck2 === pin) {
                let accountNumber = Number(prompt("Please enter the bank account number or name of the beneficiary: "));
                let bankSelect = Number(prompt("Select the beneficiary bank\n1>Access\n2>First Bank\n3>Union"));
                let amountOthers = Number(prompt("Enter amount: "));
                balCheck(amountOthers, balance)
                balance -= amountOthers;
                alert(`#${amountOthers} was just Transfered to ${accountNumber}`)
            }
            else {
                alert("You have entered an invalid pin")
            }
            break;
        // Option5 Check-balance
        case (id === 5):
            alert(`On your Main Account, You have ${balance}.00`)
            break;
        // Option6 Exit
        case (id === 6):
            let exit = +(confirm(`Confirm If you want to Exit`))
                break;
            break;
        default:
            alert("Incorrect entry, please select from the options ")
            break;
    }




if (id ===6){
    break;
}
}
// let result = document.querySelector("#result");
// if( ussdInput != pin){
// result.innerHTML="ERROR....WRONG USSD";
}
//Function to check if Amount Entered is Sufficient
function balCheck(amount, cBalance) {
    while (amount > cBalance) {
        alert("Insufficient Fund , Try Lesser Amount");
        amount = Number(prompt("Enter amount: "));
    }
}
