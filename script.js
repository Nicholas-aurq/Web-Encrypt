async function mainEvent(){
    console.log("main event has started")
    const upload = document.getElementById('myfile')
    const link = document.getElementById('link')
    let objectURL;

    upload.addEventListener('change', function() {
        link.style.display = "flex";
        const file = this.files[0];
        objectURL = URL.createObjectURL(file);

        link.download = file.name;
        link.href = objectURL;
        
    });
    

    //file.addEventListener('submit', async(submitEvent) => {
    //const results = await file;
    //print(results)

//});
    
}
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
document.addEventListener("DOMContentLoaded", async () => mainEvent());