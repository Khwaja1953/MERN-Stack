s = "hello world";
l = s.length
console.log(s.substring(l-3));

function len(s){
    count = 0
    for (i in s){
        count++
    }
    console.log("The length is ",count)

}
len("khwaja")

s = "hello world";
index = s.indexOf(" ")
s1 = s.slice(0,5);
s2 = s.slice(6)
console.log(s1,s2)
s = s1.toUpperCase() +" " + s2.toLowerCase();
console.log(s)

s = "hi hello world";
console.log(s.startsWith("hi hello"))
console.log(s.endsWith("hello"))
console.log(s.includes("ll"))
console.log(s.split("hello"))

s = "tik@gmail.com"
if (s.includes("@") && s.includes(".")){
    console.log("this is valid email")
}
else{
    console.log("This is not valid email")
}

s = "hello world how are you world"
console.log(s.includes("world"))
console.log(s.indexOf("world"))
console.log(s.match(/world/))

date = "12-Nov-2025"
console.log(date.replace("-","/"))
console.log(date.replace(/-/g,"/"))

s = "hello world world"
console.log(s.search("w"))
console.log(s.search(/hi/))

s= "hello world how,are/you";
console.log(s.split(" "));
console.log(s.split(/[ ,/]/))


//regex
s = "hello world"
regex = /world/
console.log(regex.test(s));
s = "Hello world 123"
console.log(/\d/.test(s))
console.log(/\d/.test("123"))
console.log(/\D/.test(" 123"))
console.log(/\w/.test("hello@world"))
console.log(/\W/.test("Helloworld"))
console.log(/\s/.test("hello world"))
console.log(/\S/.test("    %"))

//quantifiers
console.log(/\d+/.test("hello 1"));
console.log(/\d*/.test("hello world"))
console.log(/\d?/.test("hello "))
console.log(/\d{10}/.test("hello 1234567890"))
console.log(/\d{2,4}/.test("helo 123"))

//anchors
console.log(/^\d/.test("1hello 123"))
console.log(/\d$/.test("hello 123 how are you456"))
console.log(/[^\W$]/.test("@hello world#"))
console.log(/\d{10}/.test("1234567t890123"))
console.log(/\d{4,7}/.test("12345674647"))

//check this string starts with letter and ends with number and can include anything in between
userName = 'Muzamil@123'
console.log(/^[A-Za-z].*\d$/.test(userName))

//check the email is it valid rules are it musht contain some characters then @ then characters then. then domain like com
email = "s.dk3@kd.fku"
regex = /^[\w.-]+@[\w.-]+\.\w+$/
console.log(regex.test(email))

//password checking must contain special character number uppercase lowercase and length >8
password = "Khwaja$1"
regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&!]).{8,}$/;
console.log(regex.test(password))
