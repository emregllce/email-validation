let email = prompt("enter your mail address")

let email_1 = email.split("@")[0]
let email_2 = email.split("@")[1]

if(email.split("@").length == 2 && (email_2[email_2.length-4] == "." | email_2[email_2.length-3] == ".")) {
    console.log("valid mail address")
}
else console.log("invalid mail address")

