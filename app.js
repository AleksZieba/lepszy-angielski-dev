document.querySelector("h1").onload = event => {
  let iterations = 0;
  
  const interval = setInterval(() => { 
    event.target.innerText - event.target.innerText.split("")
      .map((letter, index) => {
        if(index < 1) {
          return event.target.dataset.value[index];
      }

        return letters[Math.floor(Math.random() * 26)])
    .join("");
      })
    if(iterations >= 9) clearInterval(interval); 

    iterations += 1; 
    }, 30;);  
  }