//function handleSelect(event) {
  //  event.preventDefault();
 //   const selection = document.getElementById("q1").value;
 // }
  
 // window.addEventListener("load", function() {
  //  document.getElementById("select-form").addEventListener("submit", handleSelect);
 // });




 function getValue(){
    
    let input1 = document.getElementById("q1");
    let input2 = document.getElementById("q2");
    let input3 = document.getElementById("q3");
    let input4 = document.getElementById("q4");
    let input5 = document.getElementById("q5");
    let result = document.getElementById("result");

    let userInput1 = document.getElementById("q1").value;
    let str1 = userInput1.toString();

    let userInput2 = document.getElementById("q2").value;
    let str2 = userInput2.toString();

    let userInput3 = document.getElementById("q3").value;
    let str3 = userInput3.toString();

    let userInput4 = document.getElementById("q4").value;
    let str4 = userInput4.toString();

    let userInput5 = document.getElementById("q5").value;
    let str5 = userInput5.toString();


    
if (str1 == "no"){
    result.innerHTML = ("Reconsider Learning to Code.")
} else if (str1+str2+str3+str4+str5 == "yesyesyesyesyes") {
    result.innerHTML = ("C#")
} else if (str1+str2+str3+str4+str5 == "yesyesyesyesno") {
    result.innerHTML = ("JavaScript")
} else if (str1+str2+str3+str4+str5 == "yesyesyesnoyes") {
    result.innerHTML = ("Python")
} else if (str1+str2+str3+str4+str5 == "yesyesnoyesyes") {
    result.innerHTML = ("Python")
} else if (str1+str2+str3+str4+str5 == "yesnoyesyesyes") {
    result.innerHTML = ("C#")
} else if (str1+str2+str3+str4+str5 == "yesyesyesnono") {
    result.innerHTML = ("JavaScript")
} else if (str1+str2+str3+str4+str5 == "yesyesnoyesno") {
    result.innerHTML = ("Python")
} else if (str1+str2+str3+str4+str5 == "yesnoyesyesno") {
    result.innerHTML = ("JavaScript")
} else if (str1+str2+str3+str4+str5 == "yesnoyesnoyes") {
    result.innerHTML = ("JavaScript")
} else if (str1+str2+str3+str4+str5 == "yesnonoyesyes") {
    result.innerHTML = ("Python")
} else if (str1+str2+str3+str4+str5 == "yesnonoyesno") {
    result.innerHTML = ("C#")
} else if (str1+str2+str3+str4+str5 == "yesnononoyes") {
    result.innerHTML = ("C#")
} else if (str1+str2+str3+str4+str5 == "yesnononono") {
    result.innerHTML = ("Find out what you would like to program first.")
}
}
 

 