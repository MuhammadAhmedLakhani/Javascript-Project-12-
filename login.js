
emailStatus = false;
nameStatus = false;
function register() {

    let input = document.getElementById("input")
    let name = input.value.trim()
    let input1 = document.getElementById("input1")
    let email = input1.value.trim()
    let nameStatus = false
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailStatus = false;

    if (name) {
        console.log("name")
        nameStatus = true
        input.value = ""
    } else {
        alert("please neter nam correctly")
    }

    input.value = ""

 

    if (email) {

        if (emailRegex.test(email)) {
            console.log(email,"email")
            emailStatus = true
            input1.value = ""
            authenticate(email,name)
        } else {
            alert("Enter Email coorectly")
        }

    }





}



let authenticate = (uemail,uname) => {
    console.log("authenticate")
  
    let users = JSON.parse(localStorage.getItem("users"))



    for(var user of users) {

        if(user.email === uemail && user.name === uname){
            console.log("if running Autrnticate sucess")
            emailStatus = true
            nameStatus = true   
            break

        }else if(user.email !== uemail && user.name === uname){
           
            emailStatus = false
            nameStatus = true
            break
        }else if(user.name !== uname && user.email === uemail){
            console.log("2 else if")
            nameStatus = false
            emailStatus = true
            break
        }
        else{
            console.log("Both are incorrect")
        } 
    }
    
    
    
    if(emailStatus && nameStatus){
        console.log("if runninbg")
        window.location.assign("whether.html")


    }else if(emailStatus === true && nameStatus === false ){
        console.log("status else if 1")
        alert("Name is incorrect")

        
    }else if(emailStatus === false && nameStatus === true ){
        console.log("status else if 2")
        alert("Email is incorrect")
    }else{
        console.log("status else block")
        alert("Both credentials incorrect")
    }


}