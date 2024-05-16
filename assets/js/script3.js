

const getDigimones = async() => {

    try{
        const response = await fetch("https://digimon-api.vercel.app/api/digimon")

        const data = await response.json();

        return data;

    }catch(error){
        console.log(`El error es: ${error}`)
    }
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