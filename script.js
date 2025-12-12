console.log('Before binding event');

// bind
let txtInput = document.querySelector('#txtInput');
let btnReplaceAll = document.querySelector('#btnReplaceAll');
let txtOutput = document.querySelector('#txtOutput');
 
let txtInput2 = document.querySelector('#txtInput2');
let btnCounter = document.querySelector('#btnCounter');
let txtOutput2 = document.querySelector('#txtOutput2');

btnCounter.addEventListener('click', function () {
    let str = txtInput2.value.trim();  // Remove leading & trailing spaces
    let count = str.length;            // Count characters
    txtOutput2.innerText = count;      // Display output
    console.log(count);
});


// event
btnReplaceAll.addEventListener('click',function(){
    let str = txtInput.value;
    let result = str.replaceAll(" ", "");
    txtOutput.innerText = result;
    console.log(result);


}); 
