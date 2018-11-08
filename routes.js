
var locationData = require('./data');

module.exports = function(app){
app.get("/location/:name", function(req, res){
    console.log(req.params.name)
   var location = req.params.name
   
    
    for(var i = 0; i <= locationData.length; i++){
       
        if (locationData[i].name == location){
            console.log('inside if')
            res.json(locationData[i])
        }
    }
    



})

}
