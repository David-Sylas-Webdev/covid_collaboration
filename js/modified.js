const getCountry = function(){
    
    return new Promise((resolve, reject)=>{

        let req = new XMLHttpRequest();

        req.overrideMimeType("application/json");

        req.open('GET', 'https://ipapi.co/json/', true);

        req.onload  = function() {

            if(this.status === 200){



            resolve([JSON.parse(req.responseText).country_name, JSON.parse(req.responseText).country_code.toLowerCase()]);

        }

        else{
            reject(new Error("Country was not obtained..."));
        }

        };
         
        req.send(null);

    });
};

getCountry()
            .then(function(array){
                return array;
            })
            .then(

                function(array){

                        let xhr = new XMLHttpRequest();
               
                        let result, totalCases, recovered, deaths, updateDate,  obtained, flag;
               
                        xhr.withCredentials = true;
               
                        xhr.open("GET", "https://covid-193.p.rapidapi.com/statistics",true);
               
                        xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
               
                        xhr.setRequestHeader("x-rapidapi-key", "d83b8be19emsh87b08ffd205652fp183ee4jsn6365020be2aa");
               
                        xhr.send(null);   
                        
                        xhr.onload = function(){
               
                           if(this.status = 200){
                               obtained  = JSON.parse(this.responseText);
               
                               console.log(obtained);
               
                           for(let i=0; i<obtained.results; i++){
               
                                if(array[0] == obtained.response[i].country){
               
                                   result = obtained.response[i];
               
                                   console.log(obtained.response[i]);
               
                                   totalCases  = document.querySelector(".cases h1");
                                   
                                   totalCases.innerHTML = result.cases.active;
                                   
                                   recovered  = document.querySelector(".recovered h1");
                                   
                                   recovered.innerHTML = result.cases.recovered;
                                   
                                   deaths = document.querySelector(".deaths h1");
                                   
                                   deaths.innerHTML = result.deaths.total;

                                   flag = document.querySelector("#flag-img");
                                   flag.setAttribute("src", `https://www.countryflags.io/${array[1]}/flat/${32}.png`)
                                                  
                                }
                               
                             }
                       
                           }
               
                           else if (this.status == 403){
                             throw new Error("Update resource is restricted...");
                           }
               
                           else if(this.status == 404){
                              throw new Error("Update resource is not found...");
                           }
               
                        }
                  
                     
               
                    }
               
               

            )
            .catch(function(error){
                console.log(error.message);
            });