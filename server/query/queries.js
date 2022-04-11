const getTemperatura = "SELECT * FROM  public.dados";
const getTemperaturaCod = "SELECT * FROM dados WHERE cod = $1";
const checkClimaExists = "SELECT c FROM dados c WHERE c.clima = $1";
// const addTemperatura = 
//     "INSERT INTO dados (clima, temperatura, humidade) VALUES($1, $2, $3)";
const updtTemperatura = "UPDATE dados SET name = $1";

module.exports = {
    getTemperatura,
    getTemperaturaCod,
    checkClimaExists,
    updtTemperatura,
}