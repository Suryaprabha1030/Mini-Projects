// const clickDiv=document.querySelector(".sym1");
/*let SymbolChanged=0
let actionPerformed=0
clickDiv.addEventListener('click',()=>{
       if(!SymbolChanged & !actionPerformed){
        const addContent=document.querySelector('.btn1');
    addContent.insertAdjacentHTML('afterend',`<div class="btn2">  
    <p class="pans ">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,<br> anime, documentaries and more – on thousands of internet-connected devices.</p>
    <p class="pans2">You can watch as much as you want, whenever you want, without a single ad – all for one<br> low monthly price. There's always something new to discover, and<br> new TV shows and movies are added every week!</p>
    </div>`)
    clickDiv.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    actionPerformed=1
       }
    // if(!actionPerformed){
      // actionPerformed=1
      // var whole=documnet.querySelector("#wcontainer")
      // var elevanthChild=whole.children[10]

    
    }) 
    
  const clickdivd=document.querySelector(".fa-xmark");
  clickdivd.addEventListener('click',()=>{
    const addContent=document.querySelector('.btn1');
    addContent.removeAdjacentHTML('afterend',`<div class="btn2">  
    <p class="pans ">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,<br> anime, documentaries and more – on thousands of internet-connected devices.</p>
    <p class="pans2">You can watch as much as you want, whenever you want, without a single ad – all for one<br> low monthly price. There's always something new to discover, and<br> new TV shows and movies are added every week!</p>
    </div>`)

  })*/

const clickDiv=document.querySelector(".sym1");
clickDiv.addEventListener('click',() =>{
  const div=document.createElement("div")
  div.classList.add("btn2")
  div.innerHTML=`<p class="pans ">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,<br> anime, documentaries and more – on thousands of internet-connected devices.</p>
  <p class="pans2">You can watch as much as you want, whenever you want, without a single ad – all for one<br> low monthly price. There's always something new to discover, and<br> new TV shows and movies are added every week!</p>`
  const removediv=document.querySelector(".btn2")
  const firstDiv=document.querySelector(".q1");
  const btn=document.querySelector(".qustn");
  btn.insertAfter(div,firstDiv.nextSibling);

})







    
