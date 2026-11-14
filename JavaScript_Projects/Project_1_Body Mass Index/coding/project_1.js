function output(){

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let name = document.getElementById("name").value;

    hUnit = document.getElementById("heightUnit").value;

    if (hUnit === "meter"){
        height = height;
    }
    else if(hUnit === "cm" )  {
        height = height/100;
    }
    else if(hUnit === "feet"){
        height = height*0.3048;
    }
    else if ( hUnit === "inch"){
        height = height*0.0254;
    }

    let BMI = (weight)/(height)**2

    // alert(`hello ${name} ! your BMI is ${BMI}`);
    let display_bmi = document.getElementById("display_bmi_result");
    display_bmi.innerHTML = `${BMI}`;



}


document.getElementById("pdSubmit").addEventListener("click",output)

// let display_bmi = document.getElementById("display_bmi");
// display_bmi.innerText(BMI);


function suggestion (){

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let name = document.getElementById("name").value;

    hUnit = document.getElementById("heightUnit").value;

    if (hUnit === "meter"){
        height = height;
    }
    else if(hUnit === "cm" )  {
        height = height/100;
    }
    else if(hUnit === "feet"){
        height = height*0.3048;
    }
    else if ( hUnit === "inch"){
        height = height*0.0254;
    }

    let BMI = (weight)/(height)**2


    let suggestion_text = document.getElementById("suggestion_text");
    if (BMI < 18){
        suggestion_text.innerHTML = ` 1. 🥗 Eat More Frequently
       >>Try 5–6 smaller meals a day instead of 2–3 big ones.<br>    
 2. 🥛 Choose Nutrient-Rich Foods<br>
 3. 🏋️‍♂️ Strength Training<br>
 4. 💧 Stay Hydrated 
       >> Aim for 7–9 hours of sleep. Lack of rest can hinder weight gain and recovery.  `;
    }
    else if(18 <= BMI && BMI < 24) {
        suggestion_text.innerHTML = `1.💧 Keep Hydrated<br>
2.🛏️ Get Quality Sleep<br>
3.🚫 Avoid Junk Food and Sugary Drinks`;
    }
    else if (BMI >= 24) {
        suggestion_text.innerHTML = `1.🏃‍♂️ Increase Physical Activity<br>
2.🥗 Adopt a Calorie-Deficit Diet<br>
3.🧘 Incorporate Strength & Flexibility Workouts<br>
4.🚱 Avoid Sugary Beverages`;
    }
    else {
        suggestion_text.innerHTML = "something went wrong";
    }


}


document.getElementById("pdSubmit").addEventListener("click",suggestion);
