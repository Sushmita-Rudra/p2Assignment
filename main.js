/*const  calcVolume = (length, breadth,height) => {
    return length * breadth * height
  }*/

  
  document.querySelector('#calculator').addEventListener('click', volume)
 
  function volume(){
    const i = parseInt(document.getElementById("length").value)
    const j = parseInt(document.getElementById("breadth").value)
    const k = parseInt(document.getElementById("height").value)
    const ans = i*j*k;
    
    //var ans = calcVolume (i, j, k);

    document.querySelector('#volume').innerHTML = ans;
  }

  function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("storage").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } 
  }

