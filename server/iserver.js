const request = require("request");
const express=require('express')
const hbs=require('hbs')
const iforcast=require('../iforcast')
const path=require('path')
const {dirname}=require('path')
// console.log(__dirname)
const viewPath=path.join(__dirname,'../itemplate/views')
const partialsPath=path.join(__dirname,'../itemplate/partials')
// console.log(partialsPath)
const app=express()
const port=process.env.Port||3000
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)
const pathTODir=path.join(__dirname,'../public')
// console.log(pathTODir)
app.use(express.static(pathTODir))
app.get('',(req,res)=>{
    res.render('ifront',{
        name:'Shivam Chauhan'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({error:'You Must Provide the Location!!'})
    }
    const add=req.query.address
    iforcast(add,(error,val)=>{
        if(error){
         return res.send({error})
        }
        res.send({forcast:val,
        location:add})
    })
})
app.listen(port,()=>{
    console.log(`server is up and running on port:${port}`)
})