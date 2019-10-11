const  calcVolume = (length, breadth,height) => {
    return length * breadth * height
  }

  
  document.querySelector('#calculator').addEventListener('click', () => {
 
    const i = parseInt(document.querySelector('#length').value)
    const j = parseInt(document.querySelector('#breadth').value)
    const k = parseInt(document.querySelector("#height").value)
    const ans = `The volume of cuboid is ${calcVolume (i, j, k)}.`
    // name+" , the biggest String among three is " +biggest;
    //var ans = calcVolume (i, j, k);

    document.querySelector('#volumeOfCuboid').innerHTML = ans
  })
