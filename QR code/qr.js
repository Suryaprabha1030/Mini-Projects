const form=document.querySelector('#frm');
const output=document.querySelector('.output');
const qrCodeElement=document.querySelector('#qrcode');
const spin=document.querySelector('#loding');
const btnsave=document.querySelector('#btnsave');

 function generateQRCode(e){
  e.preventDefault();
   const url=document.querySelector('#url').value;
   const size=document.querySelector('#select').value;
   const dark=document.querySelector('#darkclr').value;
   const white=document.querySelector('#whiteclr').value;
   
   if(url===""){
    alert('enter your link');
   }else{
     spin.style.display='flex';
     
     setTimeout(()=>{
      spin.style.display='none';
      qrCodeElement.innerHTML="";

      const qrCode=new QRCode('qrcode',{
        text:url,
         width:size,
         height:size,
        colordark:dark,
        colorlight:white,
        correctLevel : QRCode.CorrectLevel.H


      });
     },1000)
    imgDownload();
   }
 }
form.addEventListener('submit',generateQRCode)

function imgDownload(){
  const imgSrc=qrCodeElement.querySelector('img').src;
  btnsave.href=imgSrc;
}

btnsave.addEventListener('click',()=>{
  setTimeout(()=>{
    btnsave.download='qrcode';
  },50)
})