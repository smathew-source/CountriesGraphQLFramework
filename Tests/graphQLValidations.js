function validateCountryExists(json){
  test("Country exists", function(){
    expect(json.data.country).to.not.equal(null);
  })
}

module.exports = {
  validateCountryExists
};