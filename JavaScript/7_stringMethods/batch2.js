let str = "hello world";
console.log(str);
let name = 'saijdeep';
console.log(name);
//string literals
let greet = `hello  ${name}`;
console.log(greet);
//multi line string
let str1 = `hello    
   world
        how are you today`;
console.log(str1);
//using string constructor
let str2 = new String("i am new string");
console.log(str2);

//indexing
console.log(name[0]);
console.log(name[1]);
console.log(name[7]);

//length method
console.log("the length of name is ",name.length);

//concatanation 
let firstName = "saijdeep";
let lastName = "kour";
name = firstName + " " + lastName;
console.log(name);

console.log(firstName.concat(" ",lastName));

//escape characters
name = "saijdeep \n kour";
console.log(name);
console.log("saijdeep \t kour");
console.log('saijdeep\'s bag');

//substring
name = "saijdeep kour";
firstName = name.substring(0,8);
console.log(firstName);
lastName = name.substring(9,13);
console.log(lastName);

console.log(name.slice(4,8));


//reinitilize
name = 'saijdeep';
name = "muzamil";
console.log(name);

name = 'SaijDeep';
console.log(name.toUpperCase());
console.log(name);
name = name.toLowerCase();
console.log(name);
name[0] = 'm';
console.log(name);