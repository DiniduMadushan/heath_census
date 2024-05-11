const addPatientButton=document.getElementById("addPatient");
const report=document.getElementById("report");
const btnSearch=document.getElementById("btnSearch");
const patients=[];

function addPatient(){
    const name=document.getElementById('name').value;
    const gender=document.querySelector('input[name="gender"]:checked');
    const age=document.getElementById('age').value;
    const condition=document.getElementById('condition').value;

    if(name && gender && condition){
        patients.push({name,gender:gender.value,age,condition});
        resetForm();
        generateReport();
    }

}

function resetForm(){
    document.getElementById('name').value="";
    document.querySelector('input[name="gender"]:checked').checked=false;
    document.getElementById("age").value="";
    document.getElementById("condition").value="";
}

function generateReport(){
    const numPatients=patients.length;
    const conditionCount={
        Diabetes:0,
        Thyroid:0,
        "High Blood Pressure":0,
    };

    const genderConditionCount={
        Male:{
            Diabetes:0,
            Thyroid:0,
            "High Blood Pressure":0,
        },
        female:{
            Diabetes:0,
            Thyroid:0,
            "High Blood Pressure":0,
        },
    };

    for(const patient of patients){
        conditionCount[patient.condition]++;
        genderConditionCount[patient.gender][patient.condition]++;
    }

    report.innerHTML+=`<br>Gender-Based Condition:</br>`;
    for(const gender in genderConditionCount){
        report.innerHTML+=`${gender}:<br>`;
        for(const condition in genderConditionCount[gender]){
            report.innerHTML+=`&nbsp;&nbsp;${condition}:${genderConditionCount[gender][condition]}<br>`;
        }
    }


}

addPatientButton.addEventListener("click",addPatient);