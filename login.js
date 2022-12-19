
 let getmail= JSON.parse(localStorage.getItem("signup"))

document.getElementById("#form").addEventListener("submit",function(event){
        event.preventDefault()
    
        let obj={
            email:form.email.value,
            pass:form.pass.value,
        }
       // console.log(obj);
    
       
    
        console.log(getmail.email);
        getmail.forEach(function(e){
            if(obj.email==e.email){
                if(obj.pass==e.pass){
                    alert("Login Sucessfull");
                }
                else{
                    alert("wrong password")
                }
            }
            else{
                alert("invalid email id")
            }
        })
    })