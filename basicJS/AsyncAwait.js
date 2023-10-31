// api
// 
const API_URL = "https://api.github.com/users/dilberhusainkhan";
//  "https:invalid.com"

async function handlePromise(){
    // fetch funtion return promise in the form of string
    // console.log(response);
    // The above response will convert into JSON and that also return promise so we use await
    try{
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        console.log(jsonData); 
    }
    catch(err){
        console.log(err);
    }

}

handlePromise();
handlePromise().catch(err=>console.log(err));