s = "muzamil";
console.log(s.charAt(0))
l = s.length
console.log(s[parseInt(l/2)]);
substr = s.substring(0,3)
console.log(substr)
console.log(s.slice(0,3))
s = "khwaja muzamil";
console.log(s.slice(7))

s = "khawja";
console.log(s.toUpperCase());
console.log(s)
console.log(s.toLowerCase());
console.log(s)

console.log(s.indexOf('j'))
console.log(s.indexOf('a'));

s = "Hello world world";
console.log(s.replace(/world/g,"class"))
console.log(s);
console.log(s.replace("H","T"))

s = "   muzamil    "
s = s.trim();
console.log(s)