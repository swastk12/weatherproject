const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name")
const temp_real_val = document.getElementById("temp_real_val")
const temp_status = document.getElementById("temp_status")

const datahide = document.querySelector(".middle_layer")
datahide.classList.add("data_hide")

const getinfo = async(event)=>{
    event.preventDefault();
 let cityval=cityName.value
     
    if(cityval === ""){
        city_name.innerText = `plzz write the name before search `;
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=e3f96d609239222b25f542fa2378a8e7&units=metric`
            const resp = await fetch(url);
            const data = await resp.json()
            const arrdata =  [data];
            console.log(arrdata)
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText= arrdata[0].main.temp;
          const tempStatus=arrdata[0].weather[0].main;
  

       
            if(tempStatus == "Clear"){
                 temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempStatus == "Clouds"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #dfe4ea;'></i>"; 
            } else if(tempStatus == "Rain"){
              temp_status.innerHTML = 
               "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else {
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6;'> </i>";
            }
            
            datahide.classList.remove("data_hide")
      
        }catch{
            city_name.innerText = ` plzz  enter the city name properly `;
            datahide.classList.add("data_hide")

    }
       
    }

}
submitBtn.addEventListener('click', getinfo);