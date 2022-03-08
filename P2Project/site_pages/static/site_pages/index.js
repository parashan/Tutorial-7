
window.onload = async () => {
    activateTypeWriter(["Foods", "Experiences"]);
    try{
        const result = await getUserInfo()
        if(!result.ok){
            throw new Error(result.statusText);
        }
        const json = await result.json();
        loadNavbar(json);
    }catch(err){
        loadNavbarGuest();
    }

    
    
    
}