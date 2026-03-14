let str = "saijdeep kour";
console.log(str.indexOf("kour"));
console.log(str.indexOf("z"));
console.log(str.includes('kour'));

//replace
console.log(str.replace("kour","dutta"));
console.log(str);
str = str.replace("kour", "dutta");
console.log(str);

let str1 = "A,B,C,D";
console.log(str1.replaceAll(","," "));

let fullName = "   saijdeep    ";
console.log(fullName.trimStart());
//trimEnd();
console.log(fullName);
fullName = fullName.trim();
console.log(fullName);

console.log(fullName.charAt(0));

//spliting
fullName = 'saijdeep kour dutta';
console.log(fullName.split(" "));
console.log(fullName);

console.log(fullName.startsWith("saijdeep"));
console.log(fullName.endsWith("saijdeep kour dutta"));

fullName = "saijdeep kour ";

console.log(fullName.repeat(3));

console.log(fullName.padEnd(20,"*")); //padStart


console.log(fullName.at(-2));

