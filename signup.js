


let input;
let input1;
let name;
let email;
let users;


function signup() {

    input = document.getElementById("input")
    name = input.value.trim()
    input1 = document.getElementById("input1")
    email = input1.value.trim()
    let nameStatus = false
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailStatus = false;

    if (name) {
        console.log("name")
        nameStatus = true
    } else {
        alert("please neter nam correctly")
    }

    input.value = ""



    if (email) {

        if (emailRegex.test(email)) {
            console.log(email)
            emailStatus = true
            input1.value = ""
            saveData(name,email)
        } else {
            alert("Enter Email coorectly")
        }

    }


}


let saveData = (num,email) => {
    console.log("save function")

     users = localStorage.getItem("users")
    if (users) {
        users = JSON.parse(users)
    } else {
         users = []
    }


    let obj = {
        name: num, 
        email:email
    }

    users.push(obj)
    localStorage.setItem("users",JSON.stringify(users))
    moveToLogin()

}  


let moveToLogin = ()=> {
    console.log("moving")
    window.location.assign("login.html")
}




