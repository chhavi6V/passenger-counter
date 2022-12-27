let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count=0


function increment() {
    count += 1
    countEl.textContent =count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    let countstr = count + " - "
    
    saveEl.textContent += countstr 
    countEl.textContent = 0
    count = 0
}

