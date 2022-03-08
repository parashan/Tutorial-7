function changeEditProfilePicture(src){
    const pp = document.getElementById('fullprofilePicture');
    pp.src = src
}
function previewPicture(evt){
    const [file] = evt.target.files;
    if(file){
        changeEditProfilePicture(URL.createObjectURL(file));
        // console.log(pp.src);
    }
};
async function submitEdit(evt){
    evt.preventDefault();
    const data = new FormData(evt.target);    
    try{
        const result = await fetch(`${api}/accounts/user/`, {
            method: 'PUT',
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
        fillData(json);
    }catch(err){
        window.location.replace('index');
    }
    
    
    
}