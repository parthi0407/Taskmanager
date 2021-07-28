$(document).ready(function () {

    $("#taskForm").submit((event)=>{
        
        event.preventDefault();
        var description = $("#description").val();
        var completion = $("#completion").val();
        
        if(description == ""){
            alert("Please enter description");
            return;
        }
        if(completion == ""){
            alert("Please enter ");
            return;
        }
        
        inputObj = {
            description,
            completion
        }
        
        $.ajax({
            url: `/api/tasks`, 
            type: 'POST',
            data: inputObj, 
            success: ((data) => {
                console.log("Result::",data);
                alert("Task saved successfully");
                location.href ="/tasks";
            }),
            error: ((err) => {
                console.log("error",err);
                
            })
        });
    })

});