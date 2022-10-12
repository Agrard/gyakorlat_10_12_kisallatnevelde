document.addEventListener('DOMContentLoaded', () => {

    let kaloria = 0;

    document.getElementById('hamburger').addEventListener('click', () => {
        kaloria += 400;
        document.getElementById('bevittKaloria').textContent = kaloria;
    });

    document.getElementById('burgonya').addEventListener('click', () =>{
        kaloria += 350;
        document.getElementById('bevittKaloria').textContent = kaloria;
    });

    document.getElementById('csirke').addEventListener('click', () =>{
        kaloria += 450;
        document.getElementById('bevittKaloria').textContent = kaloria;
    });

    document.getElementById('unicum'),addEventListener('click', () => {
        kaloria += 250;
        document.getElementById('bevittKaloria').textContent = kaloria;
    });
   

    document.getElementById('vodka').addEventListener('click', () =>{
        kaloria += 300;
        document.getElementById('bevittKaloria').textContent = kaloria;
    });

    document.getElementById('almale').addEventListener('click', () =>{
        kaloria += 150;
        document.getElementById('bevittKaloria').textContent = kaloria;
    });
    


    document.getElementById('nullazas').addEventListener('click', () =>{
        kaloria = 0;
        document.getElementById('bevittKaloria').textContent = kaloria;
    });

    
});


