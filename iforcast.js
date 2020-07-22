const request=require('request')
const iforcast=(add,call)=>{
    const url='http://api.weatherstack.com/current?access_key=c79688dec5122e96b2405c3a785fb83f&query='+encodeURIComponent(add)+'&units=m'
    request({url,json:true},(error,{body})=>{
      if(error){
          call('Unable to connect to Weather Service!',undefined) 
      }else if(body.error){
          call('Please provide a valid location',undefined)
      }else{
          call(undefined,`Temperature of
              ${body.request.query} is 
              ${body.current.temperature} degrees but it feels like ${body.current.feelslike} degrees. 
          `)
      }  
    })
}
module.exports=iforcast
//c79688dec5122e96b2405c3a785fb83f