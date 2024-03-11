const input = document.querySelector(".display")

const btns = document.querySelectorAll('.btn');

// Step 2: Iterate over the NodeList and add event listener to each element
btns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Your event handling code here
        if (this.textContent == "AC") {
          input.textContent = "0"
        }
        else {
          if(input.textContent == "0"){
            input.textContent = this.textContent
          }
          else if (this.textContent == "=") {
            input.textContent = eval(input.textContent)
          }
          else {
            input.textContent += this.textContent 
          }
          console.log('btn clicked:', this.textContent)
        }
      
      }
        )
    });