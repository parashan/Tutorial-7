var userData = {}
function changeEditProfilePicture(src){
    // Grab the element with id fullprofilePicture 
    // and change its src attribute
}
function previewPicture(evt){
    const [file] = evt.target.files;
    if(file){
        changeEditProfilePicture(URL.createObjectURL(file));
    }
};
async function submitEdit(evt){
    evt.preventDefault();
    const data = new FormData(evt.target);
    for (const [key, value] of Object.entries(userData)) {
        if(data.get(key) === value){
            data.delete(key);
        }
    }
    try{
        const result = await fetch(`${api}/accounts/user/`, {
            method: 'PATCH',
            body: data
        });
        if(!result.ok){
            throw new Error(result.statusText);
        }
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

window.onload = async () => {
    try{
        const result = await getUserInfo()
        if(!result.ok){
            throw new Error(result.statusText);
        }
        const json = await result.json();
        userData = json;
        fillData(json);
        document.querySelector('#edit_profile').onsubmit=submitEdit
    }catch(err){
        window.location.replace('index');
    }
    
    
    
}