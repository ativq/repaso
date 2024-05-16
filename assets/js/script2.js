

const getDigimones = async() => {

    return new Promise(( resolve , reject )=> {
        fetch("https://digimon-api.vercel.app/api/digimon")
             .then((digimones)=> {
                 if(!digimones.ok){
                    throw new error("Error");
                 }
                 return digimones.json();
             })
             .then((data)=> {
                resolve(data);

             })
             .catch((error)=> {
                reject(error);
             })
    })

}

getDigimones()
    .then((digimones)=> {
        digimones.map((digimon)=> {
            console.log(digimon);
        })
    })
    .catch((error)=> {
        console.error(`El error es: ${error}`);
    })