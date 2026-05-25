function validateStatus200(){
  test("Satus should be 200", function(){
    expect(res.getStatus()).to.equal(200);
  });
}

function validateNoErrors(json){
  test("No GraphQLErrors",function(){
    expect(json.errors).to.equal(undefined);
  } );
}

module.exports = {
  validateStatus200,
  validateNoErrors 
};