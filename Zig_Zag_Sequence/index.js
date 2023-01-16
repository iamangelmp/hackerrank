function processData(input) {
    //Enter your code here
    let chain = formatArray(input)
    const sortedElements = generateZigZagSequence(chain.length, chain)
    
    //return(sortedElements)
    console.log(sortedElements)
} 

function formatArray(input){
    let array = Array.from(input).slice(4)
    let sortArray = []
    
    array.forEach((num)=>{
        if(num !== ' ' || num == 'undefined'){
            sortArray.push(Number(num))
        }
    })
    
    return sortArray.sort((a,b)=> a - b );
}

function generateZigZagSequence(arr_len,arr){
    let new_arr = [];
    arr.sort(function(a,b){return a-b});
    for(let i=0;i<Math.floor(arr_len/2);i++){
        new_arr.push(arr[i]);
    }
    for(let i=arr_len-1;i>=Math.floor(arr_len/2);i--){
        new_arr.push(arr[i]);
    }
    return new_arr.join(' ').trim()
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   //processData(_input);
   processData(_input+'');
});
