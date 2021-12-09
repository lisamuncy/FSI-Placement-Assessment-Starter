// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Lisa Muncy" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// access the button with id of 'add-gb'
const plusBtn = document.querySelector('#add-gb')
 // access the button with id of 'minus-gb'
const minusBtn = document.querySelector('#minus-gb')
const gbtotal = document.querySelector('#qty-gb')
const total = document.querySelector('#qty-total')
// access the button with id of 'add-cc'
const ccplusBtn = document.querySelector('#add-cc')
const ccminusBtn = document.querySelector('#minus-cc')
const cctotal = document.querySelector('#qty-cc')



// add event listener to the + button
plusBtn.addEventListener('click', function(){
    // add one to the when button is clicked
    gb++ 
    gbtotal.textContent=gb
total.textContent=gb+cc+sugar

})
// add event listener to the cc+ button
ccplusBtn.addEventListener('click', function(){
    // add one to the when button is clicked
    cc++ 
    cctotal.textContent=cc
    total.textContent=gb+cc+sugar
})
//add event listener to the - button
minusBtn.addEventListener('click', function(){ 
        // consol.log('minus-gb clicked')
    //Gingerbread--
    //Conditional statment: if quantity is greater than zero, subtract one from quantity
    if (gb > 0){
        gb--
     gbtotal.textContent=gb

    }total.textContent=gb+cc+sugar
})
//add event listener to the - button
ccminusBtn.addEventListener('click', function(){ 
    // consol.log('minus-cc clicked')
//Chocolate Chip--
//Conditional statment: if quantity is greater than zero, subtract one from quantity
if (cc > 0){
    cc--
 cctotal.textContent=cc 
 total.textContent=gb+cc+sugar
  
}
})




    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
           
           
                   
        
                        





// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


