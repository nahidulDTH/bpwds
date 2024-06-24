function serchapp() {
    document.getElementById("navsid").style.display = "block"
}
function back() {
    document.getElementById("navsid").style.display = "none"
}

function userlist(){
    document.getElementById("pop1").style.display="block"
}
function topion(){
    document.getElementById("pop1").style.display="none"
}


function dataLoad1(){
  document.getElementById("dataload1");
}
function dataLoad2(){
  var d2 = document.getElementById("dataload2").value;
  if (d2 === "1") {
   window.location.href="porcimpara"
  }
  if (d2 === "2") {
    window.location.href="moddipara"

  }
  if (d2 === "3") {
        window.location.href="purbpara"

  }
  
}