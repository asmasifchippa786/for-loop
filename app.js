document.write("<h1>For Loop </h1><hr>");

for(var i=1 ; i<=5 ; i++){
    document.write("<h1>Hello<h1>")
};

document.write("<hr>");

for(var i=1 ; i<=10 ; i++){
    document.write("<h1>" + i + "</h1>")
};

document.write("<hr>");

var input = prompt("Enter a Number To Print its Multiplication table")

var input1 = prompt("Enter Length Of Multiplication table")

document.write("<h1>Multiplication Table Of " + input + "</h1>")

document.write("<h1>Lenght " + input1 + "</h1><br>")

for(var i=0 ; i<=input1 ; i++){
    document.write("<h1>" + input + " x " + i + " = " + i*input + "</h1>")
}

document.write("<hr>");

var mobile = ["Nokia" , "Sumsung" , "Apple" , "Sony" , "Huawei"];

for (var i=0 ; i<mobile.length ; i++){
    document.write("<h1>" + mobile[i] + "</h1>")
};

document.write("<hr>");

var fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawbery"]

for (var i=0 ; i<fruits.length ; i++){
    document.write("<h1>" + fruits[i] + "</h1>")
};

document.write("<br>");

for (var j=0 ; j<mobile.length ; j++){
    document.write("<h1>Element At Index" + j +" is " +fruits[j]+ "</h1>")
};

document.write("<hr>");

var input2 = prompt("Enter Number Of Items")

var array = []

document.write("<h1>Number of item: " + input2 + "<br>Items:</h1><br>")

for (var i=0 ; i<input2 ; i++){
    var input3 = prompt("Enter Value For Index " + i)
    array.push(input3)
    document.write("<h1>" + array[i] + "</h1>")
}

document.write("<hr>");

document.write("<h1> Counting: </h1>");

var number1 = []

for (var i=1 ; i<=15 ; i++){
    number1.push(i)
}

document.write("<h1>" + number1 +"</h1>")

var number2 = []

for(var i=10 ; i>=1 ; i--){
     number2.push(i)
 }
 
document.write("<h1> Reverse Counting: </h1>");

document.write("<h1>" + number2 +"</h1>")

var number3 = []

for (var i=1 ; i<=20 ; i++){
    if(i%2 == 0){
        number3.push(i)
    }
}

document.write("<h1> Even Counting: </h1>");

document.write("<h1>" + number3 +"</h1>")

var number4 = []

for (var i=1 ; i<=20 ; i++){
    if(i%2 != 0){
        number4.push(i)
    }
}

document.write("<h1> Odd Counting: </h1>");

document.write("<h1>" + number4 +"</h1>")

var number5 = []

 for (var i=1 ; i<=20 ; i++){
     if(i%2 == 0){
         number5.push(i+"k")
     }
 }

document.write("<h1> Serise: </h1>");

document.write("<h1>" + number5 +"</h1><hr>")


let array1 = [24, 53, 78, 91, 12]
let max= array1[0]
for(let i=0;i<array1.length;i++){
    if(array1[i]>max){
    max= array1[i]
    }
}
let array2= [24, 53, 78, 91, 12]
let min=array2[0]
for(let i = 0 ;i<array2.length;i++){
    if(min>array2[i]){
    min= array2[i]
    }
}

document.write('<h1>array item ' + array1 + '</h1>')

document.write('<h1>The largest element in array is ' + max + '</h1>')

document.write('<h1>The Smallest value is ' + min +'</h1><hr>')

 var multiples = []

 for (var i=5 ; i<=100 ; i++){
    if(i%5==0){
        multiples.push(i)
    }
}
document.write('<h1>' + multiples + '</h1><hr>')

var students = ["Ali", "Sami", "Taha", "Inam"];

var scores = [58, 73, 89, 90];

document.write('<h1><table border="2px"><tr><td>Students</td><td>Scores</td><tr>')

for (var i=0 ; i<students.length ; i++){
        document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>")
}

document.write("</table></h1><hr>")

var food = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

var userInput = prompt("Enter a snack :")

var flag = false;

for(var i=0;i<food.length; i++){

    if(userInput === food[i]){
       flag = true;
       userInput = food[i];
       var index = i;
    }
  
}

if(flag==true){

    document.write('<h1>' + userInput + " is avaible at insdex " + index + " in our bakery</h1>" )

}

else{

    document.write('<h1>' + userInput + " is not avaible at in our bakery</h1>" )

}

document.write("<hr>")

var list = [12, 45, 3, 22, 34, 50];
var input4 = +prompt("Enter End number ")
for (i=0;i<list.length;i++)
{
    if(input4 === i)
    break;
   document.write('<h1>' + list[i] + '</h1>') 
}

document.write("<hr>")

var mixarray = [ [1,2,3] , [4,5,6] , [7,8,9] ]

for(var i=0 ; i<mixarray.length ; i++){

        document.write('<h1>' + mixarray[i] + '</h1>')
    
}

document.write("<hr>")

var number7 = +prompt("Enter a Number")

var number8 = []

for(i=number7 ; i>=0 ; i-=0.5){
    number8.push(i)
}

document.write("<h1>" + number8 + "</h1><hr>")

for(i=0 ; i<=20 ; i++){
    if(i%2==0){
        document.write('<h1>' + i + " is even </h1>")
    }
    else if(i%2!=0){
        document.write('<h1>' + i + " is odd </h1>")
    }
}

document.write("<hr>")

document.write("<h1>The Product Of The Odd Integers Fromm 1 to 7  is "  + 1*3*5*7 + " </h1><hr>")

var rows = 5

var rows1 = 7

var col = 5

for(var i=1; i<=rows1; i++){
    for(var j=7; j>=i; j--){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")
for(var i=1;i<=rows; i++){
    for(var j=1; j<=col; j++){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")

for(var i=1; i<=rows; i++){
    for(var j=1; j<=i; j++){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<hr>")
for(var i=1; i<=rows; i++){
    for(var j=5; j>=i; j--){
        document.write("*")
    }
    document.write("<br>")
}