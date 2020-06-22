let country, goodie, totalCases,recovered,deaths, updateDate;
var req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', 'https://ipapi.co/json/', true);
req.onload  = function() {
   if(this.status ==200){
    country = JSON.parse(req.responseText).country_name;
   }
};

req.send(null);


let xhr = new XMLHttpRequest();

xhr.withCredentials = true;
xhr.open("GET", "https://covid-193.p.rapidapi.com/statistics");

xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");

xhr.setRequestHeader("x-rapidapi-key", "d83b8be19emsh87b08ffd205652fp183ee4jsn6365020be2aa");

xhr.send(null);

xhr.onload = function(){
    if(this.status = 200){
        let quest  = JSON.parse(this.responseText);
      
      for(let i=0; i<quest.results; i++){
         if(country == quest.response[i].country){
            goodie = quest.response[i];
            console.log(goodie);
         
            totalCases  = document.getElementById("total-cases");
            totalCases.innerHTML = "Total Cases: "+goodie.cases.active;
            recovered  = document.getElementById("recovered");
            recovered.innerHTML = "Recovered: "+goodie.cases.recovered;
            deaths = document.getElementById("deaths");
            deaths.innerHTML = "Deaths: "+goodie.deaths.total;
            updateDate = document.getElementById("update-date");
            updateDate.innerHTML = goodie.time;


         }
      }

    }

    else{
        console.log("check the stuff out, yo");
    }
}

