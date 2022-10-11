function validate(){
    var Name = document.getElementById("name").value
    var errorMsg = document.getElementById("errorMsg")
    var Email = document.getElementById("email").value
    var male = document.getElementById("male").checked
    var female = document.getElementById("female").checked
    var location=document.getElementById("register_country").value
    var message=document.getElementById("message").value

    if(Name == ''){
        errorMsg.innerHTML = "*Name must be filled!*"
    }
    else if(Name.charCodeAt(0)<65 || Name.charCodeAt(0)>90){
        errorMsg.innerHTML = "*Name must start with capital letter!*"
    }
    else if(!angka(Name)){
        errorMsg.innerHTML = "*Name cannot contain number!*"
    }
    else if(!duakata(Name)){
        errorMsg.innerHTML = "*Only insert your nickname (1 word) with no space!*"
    }
    else if(Email == ''){
        errorMsg.innerHTML = "*Email must be filled!*"
    }
    else if(!Email.endsWith("@gmail.com")){
        errorMsg.innerHTML = "*Email must be ends with @gmail.com*"
    }
    else if(!male && !female){
        errorMsg.innerHTML="*Gender must be choosed!*"
    }
    else if(location==''){
        errorMsg.innerHTML="*Location must be selected!*"
    }
    else if(message==''){
        errorMsg.innerHTML="*Message must be filled!*"
    }
    else if(message.length > 550){
        errorMsg.innerHTML = "*Message cannot be more than 550 characters!*"
    }
    else{
        errorMsg.innerHTML = ""

        alert("Message Sent!")
        
    }
}

function angka(Name){
    var temp=0
    for(var i=0;i<Name.length;i++){
        if(Name.charCodeAt(i)>=48 && Name.charCodeAt(i) <=57){
            temp=1
        }
    }

    if(temp==1){
        return false
    }
    else{
        return true
    }
}

function duakata(Name){
    for(var i=0;i<Name.length;i++){
        if(Name.charCodeAt(i)==32){
            return false
        }
    }

    return true
}