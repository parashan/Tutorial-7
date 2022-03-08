window.onload = function(){

}
async function submitLogin(event){
    event.preventDefault();
    const data = new FormData(event.target);
    // const value = Object.fromEntries(data.entries());
    
    try{
        const result = await fetch(`${api}/accounts/login/`, {
            method: 'POST',
            body: data
        });
        if(!result.ok){
            throw new Error(result.statusText);
        }
        window.location.replace('index');
    }catch(error){
        
    }

    
}

window.onload=function(){
    
}

async function submitRegister(event){
    event.preventDefault();
    const data = new FormData(event.target);
    try{
        const result  = await fetch(`${api}/accounts/register/`, {
            method: 'POST',
            body: data
        });
        if(!result.ok){
            throw new Error(result.statusText);
        }
        window.location.replace('login');
    }catch(error){
        
    }
}




