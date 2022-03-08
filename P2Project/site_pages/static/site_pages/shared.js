const api = "http://localhost:8000";
const make_alert = (alert_msg, type="danger") => {
    
    return document.createRange().createContextualFragment(`<div class="fade show alert-dismissable alert alert-${type}">
${alert_msg}
<div class="progress">
  <div id="progress-alert" class="progress-bar bg-${type} w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
</div>`)
}
// https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
async function logout() {
    
    try{
        const result = await fetch(`${api}/accounts/logout/`, {
            method: 'POST',
        });
        if(!result.ok){
            throw new Error(result.statusText);
        }
        // window.location.replace('login');
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
function loadNavbar(json){
    const pp = document.getElementById('profilePicture');
    pp.src = json.photo
    const welcome = document.getElementById('welcome-navbar');
    welcome.innerHTML = `Welcome ${json.username}`;
    const signout = document.getElementById('signout');
    signout.innerHTML = "Sign out";
    signout.onclick=logout;
    
}
function loadNavbarGuest(){
    const welcome = document.getElementById('welcome-navbar');
    welcome.innerHTML = "Welcome Guest";
    const signout = document.getElementById('signout');
    signout.innerHTML = "Log in";
    signout.href='login';
    
}
function fillData(json){
    
    changeEditProfilePicture(json.photo);
    loadNavbar(json);
    document.querySelector('#inputUser').value = json.username;
    document.querySelector('#inputemail').value = json.email;
    document.querySelector('#inputfname').value = json.first_name;
    document.querySelector('#inputlname').value = json.last_name;
}
function activateTypeWriter(dataText){

    //array with texts to type in typewriter
    // if(!document.querySelector(".typewriter")) return;
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
        // add next character to h1
        document.querySelector(".typewriter").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        
        // wait for a while and call this function again for next character
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (dataText[i] == null){
            setTimeout(function() {
            StartTextAnimation(0);
            }, 1000);
            return;
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function(){
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
        });
        }
    }
    // start the text animation
    StartTextAnimation(0);
    
}
function progressbar(element, progress=100){
    if(progress === 0)
        return;
    const newprog = progress-25;
    document.querySelectorAll("#progress-alert").forEach((ele)=>{
        ele.classList.remove(`w-${progress}`);
        ele.classList.add(`w-${newprog}`)
    })
    setTimeout(() => {
        progressbar(element, newprog)
    }, 1000)
    
}


async function getUserInfo() {
    try{
        const result = await fetch(`${api}/accounts/user/`, {
            method: 'GET',
        });
        if(!result.ok){
            throw new Error(result.statusText);
        }
        return result;
    }catch(err){
        const alert = make_alert("Please login for more functionality", "info");
        document.querySelector("#alert-box").append(alert);
        setTimeout(()=> {
            progressbar(alert);
            
        }, 1000)
        setTimeout(()=>{
            document.querySelector('#alert-box').innerHTML = ''
        }, 4000);
    }
    
    
}

