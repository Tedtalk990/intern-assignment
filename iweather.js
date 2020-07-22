// const igeocode=require('./igeocode')
const iforcast=require('./iforcast')
const Location=process.argv[2]
iforcast(Location,(error,{locationC,locationR,temp,humid}={})=>{
if(error){
    return console.log('Error:',error)
}
console.log(Location)
console.log(locationC)
console.log(locationR)
console.log(temp)
console.log(humid)
})
