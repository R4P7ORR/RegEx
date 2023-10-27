import './style.css'

function tryPayment(){
  const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
  const country = (document.getElementById("country") as HTMLInputElement).value;
  const city = (document.getElementById("city") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;
  const zipCode = (document.getElementById("zipCode") as HTMLInputElement).value;
  const cardNumber = (document.getElementById("cardNumber") as HTMLInputElement).value;
  const ccnCode = (document.getElementById("ccnCode") as HTMLInputElement).value;
  const nameOnCard = (document.getElementById("nameOnCard") as HTMLInputElement).value;
  let errorMessage = document.getElementById("errorMessage");

  document.getElementById("fullName")!.style.backgroundColor = "antiquewhite";
  document.getElementById("country")!.style.backgroundColor = "antiquewhite";
  document.getElementById("city")!.style.backgroundColor = "antiquewhite";
  document.getElementById("address")!.style.backgroundColor = "antiquewhite";
  document.getElementById("zipCode")!.style.backgroundColor = "antiquewhite";
  document.getElementById("cardNumber")!.style.backgroundColor = "antiquewhite";
  document.getElementById("ccnCode")!.style.backgroundColor = "antiquewhite";
  document.getElementById("nameOnCard")!.style.backgroundColor = "antiquewhite";
  
  let min1Letter = /^[a-zA-Z ]+$/;
  let validAddress = /[a-zA-Z ]+/;
  let validZip = /^[A-Z0-9 ]+$/gm;
  let cardCorrect = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
  let ccnCorrect = /^[0-9]{3}$/;
  let validCardName = /^[A-Za-z ]+$/gm;

  errorMessage!.style.color = "red";
  if(!min1Letter.test(fullName)){
    document.getElementById("fullName")!.style.backgroundColor = "rgb(255,180,180)";
    errorMessage!.textContent = "A teljes névnek minimum 1 betűnek kell lennie!";
  }else if(!min1Letter.test(country)){
    document.getElementById("country")!.style.backgroundColor = "rgb(255,180,180)";
    errorMessage!.textContent = "Az országnak minimum 1 betűnek kell lennie!";
  }else if(!min1Letter.test(city)){
    document.getElementById("city")!.style.backgroundColor = "rgb(255,180,180)";
    errorMessage!.textContent = "A városnak minimum 1 betűnek kell lennie!";
  }else if(!validAddress.test(address)){
    document.getElementById("address")!.style.backgroundColor = "rgb(255,180,180)";
    errorMessage!.textContent = "A címnek minimum 1 betűnek kell lennie!";
  }else if(!validZip.test(zipCode)){
    document.getElementById("zipCode")!.style.backgroundColor = "rgb(255,180,180)";
    errorMessage!.textContent = "Érvénytelen irányítószám!";
  }else if(!cardCorrect.test(cardNumber)){
    document.getElementById("cardNumber")!.style.backgroundColor = "rgb(255,180,180)";
    errorMessage!.textContent = "Érvénytelen kártyaszám!";
  }else if(!ccnCorrect.test(ccnCode)){
    document.getElementById("ccnCode")!.style.backgroundColor = "rgb(255,180,180)";
    errorMessage!.textContent = "Az ellenőrző kódnak 3 számnak kell lennie!";
  }else if(!validCardName.test(nameOnCard)){
    document.getElementById("nameOnCard")!.style.backgroundColor = "rgb(255,180,180)";
    errorMessage!.textContent = "Hibás kártyanév!";
  }else{
    errorMessage!.style.color = "green";
    errorMessage!.textContent = "Sikeres fizetés!";
  }
  
}


document.getElementById("btnPay")!.addEventListener("click", tryPayment);