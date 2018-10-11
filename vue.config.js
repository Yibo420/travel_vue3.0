const mockdata = require('./mock/index.json');

module.exports={
    devServer: {
        port:8080,
        before(app){
            app.get('/indexjson',(req,res,next)=>{
                res.json(mockdata);
            })
        },
        proxy:{
            '/api':{
                target:'http://localhost:8080',
            }
        }

    }
}
