const form=document.querySelector('form')
const button=document.querySelector('#button')
const city=document.querySelector('#city')
const msg1=document.querySelector('#msg-1')
const msg2=document.querySelector('#msg-2')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc=city.value
    msg1.textContent='LOADING...'
    msg2.textContent=''
    fetch('/weather?address='+encodeURIComponent(loc)).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                msg1.textContent=data.error
            }else{
                // console.log(data.val)
                msg1.textContent=data.forcast
                msg2.textContent=''
            }
        })
    })
})