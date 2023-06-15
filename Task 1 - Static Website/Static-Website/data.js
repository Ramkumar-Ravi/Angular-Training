data = {

    services:[

    {

        name: "Application Services",

        image: "images/application.png",

        features: ["Latest Technology", "Micro Service Architectiure"

         ,"Cloud Native","Test Driven Development"]

    },

    {

        name: "Testing Services",

        image: "images/applicationtesting.png",

        features: ["End to End Testing", "Performance Analysis"

         ,"Quality Assurance","Powerful tools"]

    },

    {

        name: "Infrastructure Services",

        image: "images/itinfra.png",

        features: ["Cloud Services", "Low Cost"

         ,"Premium Hardware","High Performance"]

    },

    {

        name: "Cloud Services",

        image: "images/cloud.png",

        features: ["Advanced Cloud Services", "Upgraded Security"

         ,"No Network Traffic","Top of the Industry"]

    }

]

}
function hideSlide()
{
    document.getElementById("down").style.display="inline"
    document.getElementById("up").style.display="none"
    document.getElementById("slide-area").style.display="none"
    //$('#slide-area').hide('slow');

}
function showSlide()
{
    document.getElementById("down").style.display="none"
    document.getElementById("up").style.display="inline"
    document.getElementById("slide-area").style.display="block"
    //$('#slide-area').show('slow');
    
}

let code =""
function featuremessage(feature){
    alert(feature)
}

for(let service of data.services){
    code+= "<div class='service-box'>"
    code+="<h3>"+service.name+"</h3>"
    code+="<img src='"+service.image+"'>"
    code+="<div class='features'> <ul>"
    for(let feature of service.features){
        code+="<li onclick="+'"'+"featuremessage("+"'"+feature+"'"+")"+'"'+">"
        code+=feature+"</li>"
    }
    code+="</ul></div></div>"
}

document.getElementById("services-wrapper").innerHTML=code