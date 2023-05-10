const btn=document.getElementById('btn');
const joke=document.getElementById('joke');

const apiKey="Q8pSoFTqC7tx54lTTFjMOg==Mp6mvOsSfJNS4u9p";


const option={
    method: 'GET',
    headers:{
        'X-Api-Key':apiKey
    },
}


const apiURL="https://api.api-ninjas.com/v1/jokes?limit=1";


async function generate(){

    try {
        joke.innerText='updating....'
    btn.disabled=true;
    btn.innerText='Loading.....'
    const response=await fetch(apiURL,option);
    const data=await response.json();
    btn.disabled=false;
    btn.innerText='TELL ME A JOKE'


 joke.innerHTML=data[0].joke
    
    } catch (error) {
        joke.innerText='error occured try again later...!'
        console.log(error);
        btn.disabled=false;
        btn.innerText='TELL ME A JOKE'
    }
    
}


btn.addEventListener('click', generate);