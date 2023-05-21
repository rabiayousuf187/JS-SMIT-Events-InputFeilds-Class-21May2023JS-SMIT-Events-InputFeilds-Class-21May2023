// Chapter 49 Reading field values
console.log("Chapter 49 Reading field values");

function inpFeild(){
    console.log("on Focus");
    document.getElementById('email').style.border = "3px solid red";

}

function outFeild(){
    console.log("on Blur");
    document.getElementById('email').style.border = "1px solid black";

}

function submit(name,email,age,country){
    
    let nameVal = document.getElementById('name').value;
    let emailVal = document.getElementById('email').value;
    let ageVal = document.getElementById('age').value;
    let countryVal = document.getElementById('country').value;
    


    if(nameVal === "" && emailVal === "" && ageVal === "" && countryVal === "")
   {
    alert("Some Feild left Empty");
    console.log("Some Feild left Empty");
    }
    else{
        alert("Date Submitted");
        console.log("Date Submitted");
        console.log(nameVa, emailVal, ageVal, countryVal);

    }

}