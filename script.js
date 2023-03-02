const characters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B",
    "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",'0','1','2','3','4',
    '5','6','7','8','9','@','$','&','*','%','_','-','/','|'
  ]
let numEl = document.getElementById("num-el")
const sliderEl = document.getElementById("slider-el")
const containerEl= document.getElementById("secondary")
let passwordLength = 8
function generatePassword(){
    let password = ""
    for (let i=0; i<passwordLength; i++){
        const randomIndex = Math.floor(Math.random()*characters.length)
        password += characters[randomIndex]
    }
    return password
}
function getGeneratePassword(){
    containerEl.innerHTML = `<input type="text" class="password" id="1" value="${generatePassword()}"
     onclick="copyToClipboard(1)" readonly>`
     containerEl.innerHTML += `<input type="text" class="password" id="2" value="${generatePassword()}"
     onclick="copyToClipboard(2)" readonly>`
}

sliderEl.addEventListener("input", function(){
    numEl.textContent = `${sliderEl.value}`
    passwordLength = sliderEl.value
})
function copyToClipboard(index) {
    const copyText = document.getElementById(index).value;
    navigator.clipboard.writeText(copyText).then(() => {
      // Alert the user that the action took place.
      // Nobody likes hidden stuff being done under the hood!
      alert("Copied to clipboard")
    })
  }
