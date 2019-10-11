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

  const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'

// fetch information
const getJoke = async () => {
  try {
    const response = await fetch(jokeURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    const joke = obj.value.joke || 'No joke for you.'
    return joke
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithJoke = async (event) => {
  try {
    document.querySelector('#showjoke').innerHTML = ''
    const answer = await getJoke()
    document.querySelector('#showjoke').innerHTML = answer
  } catch (error) { console.error(error) }
}
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'JokeButton') { updateWithJoke(event) }
  })
