


//identify variables
var carObject={};
var car=[];

function validateForm()
{
    // identify variables
    const firstName = document.infoForm.firstName.value;
    const lastName = document.infoForm.lastName.value;
    const email = document.infoForm.email.value;
    const phone= document.infoForm.phone.value;
    const address = document.infoForm.address.value;
    const city =document.infoForm.city.value;
    const post = document.infoForm.pCode.value;
    const province = document.infoForm.province.value;
    const make = document.infoForm.make.value;
    const model = document.infoForm.model.value;
    const year = document.infoForm.year.value;
    const a= document.getElementById("vehicleInfo");
    

    var firstNameErr = lastNameErr = addressErr = cityErr = addressErr =phoneErr= postErr= provinceErr =emailErr=makeErr=modelErr=yearErr=true;

    if (firstName=="")
    {
        firstNameError.innerHTML="Required an input";
    }else
    {
        firstNameError.innerHTML="";
        firstNameErr = false;
    }

    if (lastName=="")
    {
        lastNameError.innerHTML="Required an input";
    }else
    {
        lastNameError.innerHTML="";
        lastNameErr = false;
    }

    let emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "")
    {
        emailError.innerHTML = "Required an input";
    }else if (email != "" && emailRule.test(email) === false)
    {
        emailError.innerHTML = "Invalid input";
    }else{
        emailError.innerHTML = "";
        emailErr = false;
    }
    let phoneRule = /^((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;
    if (phone == "")
    {
        phoneError.innerHTML = "Required an input";
    }else if (phone != "" && phoneRule.test(phone) === false)
    {
        phoneError.innerHTML = "Invalid. Please enter e.g 123-123-1234 or (123)-1123-1234";
    }else{
        phoneError.innerHTML = "";
        phoneErr = false;
    }
    
    let addressRule = /^\d+\d*\S+(?:\s+\S+){2,}$/;

    if (address == "")
    {
        addressError.innerHTML = "Required an input";
    }else if (address != "" && addressRule.test(address) === false)
    {
        addressError.innerHTML = "Invalid. Please start with number and at least two strings after and have spaces in between";
    }else{
        addressError.innerHTML = "";
        addressErr = false;
    }
    
    let cityRule = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (city == "")
    {
        cityError.innerHTML = "Required an input";
    }else if (city != "" && cityRule.test(city) === false)
    {
        cityError.innerHTML = "Invalid input";
    }else{
        cityError.innerHTML = "";
        cityErr = false;
    }
    
    let postCodeRule = /^\d[A-Za-z]\d\s[A-Za-z]\d[A-Za-z]$/;
    
    if (post == "")
    {
        pCodeError.innerHTML = "Required an input";
    }else if (post != "" && postCodeRule.test(post) === false)
    {
        pCodeError.innerHTML = "Invalid. Please enter e.g 9X9 X9X, X->letters, 9->digts";
    }else{
        pCodeError.innerHTML = "";
        postErr = false;
    }
    
    if (province =="")
    {
        provinceError.innerHTML="Required an input";
    }else
    {
        provinceError.innerHTML="";
        provinceErr = false;
    }

    if (make =="")
    {
        makeError.innerHTML="Required an input";
    }else
    {
        makeError.innerHTML="";
        makeErr = false;
    }

    if (model =="")
    {
        modelError.innerHTML="Required an input";
    }else
    {
        modelError.innerHTML="";
        modelErr = false;
    }
    let yearRule =/^(19|20)\d{2}$/;
    if (year =="")
    {
        yearError.innerHTML = "Required an input";
    }else if ( yearRule.test(year) === false)
    {
        yearError.innerHTML = "Invalid. Year start with 19 or 20";
    }else{
        yearError.innerHTML = "";
        yearErr = false;
    }

    if ( (firstNameErr|| lastNameErr || addressErr || cityErr || addressErr || phoneErr|| postErr|| provinceErr ||emailErr||makeErr||modelErr||yearErr)==true)
    {
        return false;
    }
    else{

        //display output
        displayInfo.style.display = "inline-block";
        nameOutput.innerHTML = firstName.toUpperCase() + " " + lastName.toUpperCase();
        emailOutput.innerHTML = email.toUpperCase();
        phoneOutput.innerHTML = phone;
        addressOutput.innerHTML = address.toUpperCase();
        cityOutput.innerHTML = city.toUpperCase();
        pCodeOutput.innerHTML = post.toUpperCase();
        provinceOutput.innerHTML = province.toUpperCase();
        vehicleInfo.innerHTML = year.toUpperCase()+" "+make.toUpperCase()+ " " + model.toUpperCase();
        a.setAttribute("href","https://www.jdpower.com/cars/"+year+"/"+make+"/"+model);


        carObject ={
            Seller:firstName +" "+lastName,
            Email:email,
            Phone:phone,
            Address:address,
            city:city,
            PostCode:post,
            Province:province,
            Vehicle:year.toUpperCase()+" "+make.toUpperCase()+ " " + model.toUpperCase()
        };
       
         car.push(carObject);
        //store in the local storage
        let car_serialized = JSON.stringify(car);
        localStorage.setItem("items",car_serialized);
        //key++;
    }
    
}

// retrieved from local storage
function view(){
    
    var car_deserialized = JSON.parse(localStorage.getItem("items"));
for (let i=0; i < car_deserialized.length; i++)
{
    lsOutput.innerHTML+=`<table>`+
    `<tr><td>Seller's name:</td>`+`<td>`+car_deserialized[i].Seller+`</td></tr>`+
    `<tr><td>Email:</td>`+`<td>`+car_deserialized[i].Email+`</td></tr>`+
    `<tr><td>Phone:</td>`+`<td>`+car_deserialized[i].Phone+`</td></tr>`+
    `<tr><td>Address:</td>`+`<td>`+car_deserialized[i].Address+`</td></tr>`+
    `<tr><td>City:</td>`+`<td>`+car_deserialized[i].City+`</td></tr>`+
    `<tr><td>Post code:</td>`+`<td>`+car_deserialized[i].PostCode+`</td></tr>`+
    `<tr><td>Province:</td>`+`<td>`+car_deserialized[i].Province+`</td></tr>`+
    `<tr><td>Vehicle's year, make, model:</td>`+`<td>`+car_deserialized[i].Vehicle+`</td></tr>`+
    `</table><br/>`;
}
}


