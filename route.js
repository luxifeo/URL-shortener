
module.exports = function(app, db) {

  app.get("/",function(req, res) {
      res.sendFile(__dirname+'/views/index.html');
    });

  app.get('/new',function(req, res) {
      res.send( {
        err: "Error: You need to add a proper url"
      });

    });

};