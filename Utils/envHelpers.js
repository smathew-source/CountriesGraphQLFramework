function setCountryCode(code) {
    bru.setEnvVar("countryCode", code);
}

function getCountryCode() {
    return bru.getEnvVar("countryCode");
}

module.exports = {
    setCountryCode,
    getCountryCode
};