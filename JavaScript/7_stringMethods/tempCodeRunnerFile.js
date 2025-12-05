password = "Khwaja$1"
regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&!]).{8,}$/;
console.log(regex.test(password))