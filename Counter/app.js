// set initial count
let count = 0;

// select elements
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// loop through each button (we have three, decrease, reset, increase)
btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const styles = event.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--
        }
        else if(styles.contains('increase')) {
            count++
        }
        else {
            count = 0
        }

        //  Change colors depending on count value (pos, 0, neg)
        if(count > 0) {
            value.style.color = "#32cd32"
        }
        
        if (count < 0) {
            value.style.color = "#8b0000"
        }

        if (count == 0) {
            value.style.color = "#222"
        }

        // output the value, as the count
        value.textContent = count;
    });
});