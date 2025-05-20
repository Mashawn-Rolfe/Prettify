const JSONBefore = document.getElementById("JSONBefore"),
    JSONAfter = document.getElementById("JSONAfter");

function validateJSON(){
    try{
        if(JSONBefore.value == ""){
        JSONAfter.value = "Please enter JSON Value";
        return JSONAfter.value;
    }
    JSON.parse(JSONBefore.value);
    JSONAfter.value="Validation Complete. JSON is valid.";
    return true;
    }catch(e){
        JSONAfter.value=e;
    }    
}
function formatJSON(){
    if(validateJSON()){
        let parseJSON = JSON.parse(JSONBefore.value);
        let JSONFormatValue = JSON.stringify(parseJSON, null, 4);
        JSONAfter.value = JSONFormatValue;
    }
}
function compactJSON(){
    if(validateJSON()){
        let parseJSON = JSON.parse(JSONBefore.value);
        let JSONCompactValue = JSON.stringify(parseJSON);
        JSONAfter.value = JSONCompactValue;
    }
}