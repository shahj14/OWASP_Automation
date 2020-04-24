var skill = +document.getElementById("likelihood_skill").value;
var motive = +document.getElementById("likelihood_motive").value;
var opportunity = +document.getElementById("likelihood_opportunity").value;
var size = +document.getElementById("likelihood_size").value;
var discovery = +document.getElementById("likelihood_discovery").value;
var awareness = +document.getElementById("likelihood_awareness").value;

var confidentiality = +document.getElementById("impact_confidentiality").value;
var integrity = +document.getElementById("impact_integrity").value;
var availability = +document.getElementById("impact_availability").value;
var fin_damage = +document.getElementById("impact_financialdamage").value;


var software = document.getElementById("soft-1").value;

var versions = ["No Upgrade","","","","",""];
var impacts = [0,0,0,0,0,0];
var impact_count = 0;

document.getElementById("s-1-input-1").addEventListener('change', (event) => {
    document.getElementById("v1").textContent = `${event.target.value}`;
    versions[1] = `${event.target.value}`;
});
document.getElementById("s-1-input-2").addEventListener('change', (event) => {
    document.getElementById("v2").textContent = `${event.target.value}`;
    versions[2] = `${event.target.value}`;
});    
document.getElementById("s-1-input-3").addEventListener('change', (event) => {
    document.getElementById("v3").textContent = `${event.target.value}`;
    versions[3] = `${event.target.value}`;
});    
document.getElementById("s-1-input-4").addEventListener('change', (event) => {
    document.getElementById("v4").textContent = `${event.target.value}`;
    versions[4] = `${event.target.value}`;
});    
document.getElementById("s-1-input-5").addEventListener('change', (event) => {
    document.getElementById("v5").textContent = `${event.target.value}`;
    versions[5] = `${event.target.value}`;
});

document.getElementById("s-1-impact-1").addEventListener('change', (event) => {
    impacts[1] = +`${event.target.value}`;
});
document.getElementById("s-1-impact-2").addEventListener('change', (event) => {
    impacts[2] = +`${event.target.value}`;
});
document.getElementById("s-1-impact-3").addEventListener('change', (event) => {
    impacts[3] = +`${event.target.value}`;
});
document.getElementById("s-1-impact-4").addEventListener('change', (event) => {
    impacts[4] = +`${event.target.value}`;
});
document.getElementById("s-1-impact-5").addEventListener('change', (event) => {
    impacts[5] = +`${event.target.value}`;
});

document.getElementById("submit").addEventListener("click", function(){
    skill = +document.getElementById("likelihood_skill").value;
    motive = +document.getElementById("likelihood_motive").value;
    opportunity = +document.getElementById("likelihood_opportunity").value;
    size = +document.getElementById("likelihood_size").value;
    discovery = +document.getElementById("likelihood_discovery").value;
    awareness = +document.getElementById("likelihood_awareness").value;
    
    confidentiality = +document.getElementById("impact_confidentiality").value;
    integrity = +document.getElementById("impact_integrity").value;
    availability = +document.getElementById("impact_availability").value;
    fin_damage = +document.getElementById("impact_financialdamage").value;

    likelihood = (skill + motive + opportunity + size + discovery + awareness)/6;
    impact = (confidentiality + integrity + availability + fin_damage) / 4;

    var a1 = document.getElementById("a1").checked
    var a2 = document.getElementById("a2").checked
    var a3 = document.getElementById("a3").checked
    var a4 = document.getElementById("a4").checked
    var a5 = document.getElementById("a5").checked

    var b1 = document.getElementById("b1").checked
    var b2 = document.getElementById("b2").checked
    var b3 = document.getElementById("b3").checked
    var b4 = document.getElementById("b4").checked
    var b5 = document.getElementById("b5").checked

    var c1 = document.getElementById("c1").checked
    var c2 = document.getElementById("c2").checked
    var c3 = document.getElementById("c3").checked
    var c4 = document.getElementById("c4").checked
    var c5 = document.getElementById("c5").checked

    var d1 = document.getElementById("d1").checked
    var d2 = document.getElementById("d2").checked
    var d3 = document.getElementById("d3").checked
    var d4 = document.getElementById("d4").checked
    var d5 = document.getElementById("d5").checked

    var e1 = document.getElementById("e1").checked
    var e2 = document.getElementById("e2").checked
    var e3 = document.getElementById("e3").checked
    var e4 = document.getElementById("e4").checked
    var e5 = document.getElementById("e5").checked
    
    var f1 = document.getElementById("f1").checked
    var f2 = document.getElementById("f2").checked
    var f3 = document.getElementById("f3").checked
    var f4 = document.getElementById("f4").checked
    var f5 = document.getElementById("f5").checked
    //software metrics for each version
    adj_impact = [
        (impact*4 + impacts[0])/5,
        (impact*4 + impacts[1])/5,
        (impact*4 + impacts[2])/5,
        (impact*4 + impacts[3])/5,
        (impact*4 + impacts[4])/5,
        (impact*4 + impacts[5])/5
    ]

    ratings = [
        +document.getElementById("vul1").value,
        +document.getElementById("vul2").value,
        +document.getElementById("vul3").value,
        +document.getElementById("vul4").value,
        +document.getElementById("vul5").value
    ]

    adj_likelihood = [
        ((a1*ratings[0] + a2*ratings[1] + a3*ratings[2] + a4*ratings[3] + a5*ratings[4])/5 + likelihood*6)/7,
        ((b1*ratings[0] + b2*ratings[1] + b3*ratings[2] + b4*ratings[3] + b5*ratings[4])/5 + likelihood*6)/7,
        ((c1*ratings[0] + c2*ratings[1] + c3*ratings[2] + c4*ratings[3] + c5*ratings[4])/5 + likelihood*6)/7,
        ((d1*ratings[0] + d2*ratings[1] + d3*ratings[2] + d4*ratings[3] + d5*ratings[4])/5 + likelihood*6)/7,
        ((e1*ratings[0] + e2*ratings[1] + e3*ratings[2] + e4*ratings[3] + e5*ratings[4])/5 + likelihood*6)/7,
        ((f1*ratings[0] + f2*ratings[1] + f3*ratings[2] + f4*ratings[3] + f5*ratings[4])/5 + likelihood*6)/7,
    ]
    var l_lev;
    var i_lev;
    for(var i = 0; i < 6; i++){
        if (versions[i] != ""){
            document.getElementById(`r${i+1}`).textContent = versions[i];
            document.getElementById(`l${i+1}`).textContent = adj_likelihood[i];
            document.getElementById(`i${i+1}`).textContent = adj_impact[i];
            console.log(adj_likelihood[i]);
            if(adj_likelihood[i] < 3){
                l_lev = "Low";
                document.getElementById(`l${i+1}`).style.backgroundColor="lightgreen";
            }else if (adj_likelihood[i] < 6){
                l_lev = "Medium";
                document.getElementById(`l${i+1}`).style.backgroundColor="khaki";
            }else{
                l_lev = "High";
                document.getElementById(`l${i+1}`).style.backgroundColor="lightcoral";
            }
            if(adj_impact[i] < 3){
                i_lev = "Low";
                document.getElementById(`i${i+1}`).style.backgroundColor="lightgreen";
            }else if (adj_impact[i] < 6){
                i_lev = "Medium";
                document.getElementById(`i${i+1}`).style.backgroundColor="khaki";
            }else{
                i_lev = "High";
                document.getElementById(`i${i+1}`).style.backgroundColor="lightcoral";
            }

            if((i_lev=="Low" && l_lev=="Medium" )|| (i_lev=="Medium" && l_lev=="Low")){
                document.getElementById(`risk${i+1}`).textContent = "Low";
            }else if((i_lev=="Medium" && l_lev=="Medium") || (i_lev=="High" && l_lev=="Low") || (i_lev=="Low" && l_lev=="High")){
                document.getElementById(`risk${i+1}`).textContent = "Medium";
            }else if((i_lev=="High" && l_lev=="Medium") || (i_lev=="Medium" && l_lev=="High")){
                document.getElementById(`risk${i+1}`).textContent = "High";
            }else if(i_lev=="High" && l_lev=="High"){
                document.getElementById(`risk${i+1}`).textContent = "Critical";
            }else{
                document.getElementById(`risk${i+1}`).textContent = "Note";
            }
        }
    }
});

