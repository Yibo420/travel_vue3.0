const mockdata = require('./mock/index.json');
const cityjson = require('./mock/city.json');
const detailjson = require('./mock/detail.json');

module.exports={
    devServer: {
        port:8080,
        before(app){
            app.get('/indexjson',(req,res,next)=>{
                res.json(mockdata);
            })
            app.get('/cityjson',(req,res,next)=>{
                res.json(cityjson);
            })
            app.get('/detailjson',(req,res,next)=>{
                res.json(detailjson);
            })
        },
        proxy:{
            '/api':{
                target:'http://localhost:8080',
            }
        }

    }
}
