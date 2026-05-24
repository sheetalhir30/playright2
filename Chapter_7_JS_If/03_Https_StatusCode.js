function httpsStatusCode(statuscode){
    let message = "";
    if(statuscode === 200 && statuscode <300){
        message ="success";
    }
    else if(statuscode>=300 && statuscode<400)
    {
        message = "redirection";
    }
    elseif(statuscode>=400 && statuscode<500)
    {
    message= "client error";

    } 
    
else if(statuscode>=500 && statuscode<600)
{
    message = "server error";
}
}