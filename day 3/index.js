var text1 = prompt("Enter the Frist Name :");
document.write(text1);

var text2 = prompt("Enter the Last Name :");
document.write(text2);

var text = text1 + text2;

//document.write(text1 + text2);

document.write("<br>The name of len :" + text.length);

document.write("<br>" + text.toUpperCase());

document.write(text.slice(2));
