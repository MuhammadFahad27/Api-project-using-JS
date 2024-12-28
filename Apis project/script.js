
let data ;
let response ;
let search = document.querySelector(".btn") ;
let img1 = document.querySelector(".inner-div") ;
let err = document.querySelector(".error") ;
let c = document.querySelector(".cut") ;
let c2 = document.querySelector(".err1") ;





async function f1(country) {


    
    try {

        
       
        let url = `https://restcountries.com/v3.1/name/${country}`;
        response = await fetch(url)
        data = await response.json() ;
        console.log(data);
       
       
        img1.style.backgroundRepeat = "no-repeat";
            
        document.querySelector(".capital").innerText = `Capital : ${data[0].capital[0]}`;
        document.querySelector(".area").innerText = `Area : ${data[0].area}`;
        document.querySelector(".population").innerText = `Total Population : ${data[0].population}`;
        document.querySelector(".con").innerText = `Continent : ${data[0].continents}`;
        img1.style.backgroundImage = `url(${data[0].flags.png})`;
 
        
       
        
    } catch (error) {
        
        console.log(error)
        console.log("error .....");
        
    }
}



       
search.addEventListener
("click",function(){


    
  
    let input = document.querySelector(".inp").value.trim() ;

    if (input=="") {
        console.log("empty output....")
        err.style.display="block" ;
        c.style.display="block" ;
        c.style.marginLeft="120px";
        c.style.marginTop = "10px";
    }
    else{

        f1(input) ;
        document.querySelector(".content").style.display="block"
        console.log("my input : ",input)
    }
    
})

c.addEventListener
("click",function(){

    c2.style.display="none"
})




