//1 Display number in textbox
function displayNum(num){
    console.log(num);
    result.value+=num;
}

//2 clear text box
function clearBox(){
    result.value="";
}

//3 evaluate expression
function evaluateExpression(){
    exp=result.value;
    output=eval(exp);
    result.value=output;
}

//4 Remove last item from text box
function removeLast(){
    currentexp=result.value;
    result.value=currentexp.slice(0,-1);
}