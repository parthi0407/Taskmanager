$(document).ready(function () {

    $("#userForm").submit((event)=>{
        event.preventDefault();
        var name = $("#userName").val();
        var email = $("#email").val();
        var password = $("#password").val();
        if(name == ""){
            alert("Please enter name");
            return;
        }
        if(email == ""){
            alert("Please enter email");
            return;
        }
        if(password == ""){
            alert("Please enter password");
            return;
        }
        inputObj = {
            name,
            email,
            password
        }
        
        $.ajax({
            url: `/api/users`, 
            type: 'POST',
            data: inputObj, 
            success: ((data) => {
                console.log("Result::",data);
                alert("User saved successfully");
                location.href ="/users";
            }),
            error: ((err) => {
                console.log("error",error);
                
            })
        });
    })

});