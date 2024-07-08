function serchapp() {
    document.getElementById("navsid").style.display = "block"
}
function back() {
    document.getElementById("navsid").style.display = "none"
}

function userlist(){
    document.getElementById("pop1").style.display="block"
    topion1();
}
function topion(){
    document.getElementById("pop1").style.display="none"
}

function userlist1(){
  document.getElementById("pop2").style.display="block";
  topion();
}
function topion1(){
  document.getElementById("pop2").style.display="none"
}

function dataLoad1(){
  
  document.getElementById("dataload1");
}

function dataLoad3(){
  var dataload = document.getElementById("dataLoad3").value;
  if (dataload == "1") {
    window.location.href="index.html"
  }
  if (dataload == "2") {
    window.location.href="madsha.html"
  }
  if (dataload == "3") {
    window.location.href="school.html"
  }
  if (dataload == "4") {
    window.location.href="shop.html"
  }
  if (dataload == "5") {
    window.location.href="eidha.html"
  }
  if (dataload == "6") {
    window.location.href="km.html"
  }
} 

function dataLoad2(){
  var d2 = document.getElementById("dataload2").value;
  if (d2 === "1") {
   window.location.href="/procimpara/"
  }
  if (d2 === "2") {
    window.location.href="/moddipara"

  }
  if (d2 === "3") {
        window.location.href="/purbpara"

  }
  
}


window.addEventListener('load', () => {
  let deferredPrompt;


  const addToHomeBtn = document.getElementById('add-to-home-btn');

  
  addToHomeBtn.addEventListener('click', () => {
    
    if (deferredPrompt) {
      deferredPrompt.prompt();

      
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome == 'accepted') {
       
        } else {
      
        }
     
        deferredPrompt = null;
      });
    }
  });

 
  window.addEventListener('beforeinstallprompt', (event) => {
    
    event.preventDefault();
   
    deferredPrompt = event;
    
    addToHomeBtn.style.display = 'block';
  });
});


