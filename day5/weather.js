function fetchAPI(){
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/,delhiUK?KEY=SUWENMJDCG3P8Y7E9M4Y22GS4"
 fetch(url)
 .then((res)=>res.json())
 .then((data)=>renderUI(data))


}

function renderUI(){

    const root=document.getElementById("root");
    

}




renderUI();