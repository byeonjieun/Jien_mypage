document.querySelector('.modifyBtn').addEventListener('click',()=>{
    const input=document.querySelector('.modifyNickname');
    const value=input.value;
    input.value='';
})

axios.post('/user/change',{
    name:value
})
.then((response)=>{
    location.reload();
})
.catch((error)=>{
    console.err(error);
})

