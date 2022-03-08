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
        const alert = make_alert(error);
        document.querySelector("#alert-box").append(alert);
        setTimeout(()=> {
            progressbar(alert);
            
        }, 1000)
        setTimeout(()=>{
            document.querySelector('#alert-box').innerHTML = ''
        }, 4000);
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
        const alert = make_alert(error);
        document.querySelector("#alert-box").append(alert);
        setTimeout(()=> {
            progressbar(alert);
            
        }, 1000)
        setTimeout(()=>{
            document.querySelector('#alert-box').innerHTML = ''
        }, 4000);
    }
}




