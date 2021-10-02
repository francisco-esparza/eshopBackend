const validate = (request) =>  ( request != "" && request != null && request != undefined )

const isNumber = (request) => {
    const data = parseInt(request);
    return (typeof data === "number" && !isNaN(data));
}

module.exports = {
    validate,
    isNumber 
}