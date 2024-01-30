
const inp =document.querySelector('input');
const btn=document.querySelector('.btn');
const imgbox=document.querySelector('.container-main');
const form=document.querySelector('form');
const key = 'kVWuisRcEnMx0OixsSwYs4G7lxQ1e4YlaWjTsMnjMSsfqkPVgzBzN0vz'
const modal=document.querySelector('.box')
const imglink=document.querySelector('.imglink')




console.log(modal,imglink)

// console.log(inp)


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchval = inp.value.trim();
    searchPhoto(searchval);
});

async function searchPhoto(a) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${a}&client_id=SDWRu0G1chBHsRdM3VCj9RlcrbDHj9ii5I-V0Y_C-Z8`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',  // Corrected typo here
                Authorization: 'SDWRu0G1chBHsRdM3VCj9RlcrbDHj9ii5I-V0Y_C-Z8'  // Replace 'YOUR_API_KEY' with your actual API key
            }
        }
    );
    const data = await response.json();
    data.results.forEach(elem => {
        
        // console.log(elem)
        var box=document.createElement('div')
        box.classList.add('container')
        imgbox.appendChild(box)
        
        const contentBox=document.createElement('div')
        contentBox.classList.add('contentBox')
        box.appendChild(contentBox)
        console.log(box)



        const alt=document.createElement('p')
        alt.classList.add('content')
        alt.innerText=elem.alt_description
        // console.log(alt)
        contentBox.appendChild(alt)

        // console.log(contentBox)
        const image=document.createElement('img');
        image.classList.add('jsphotos')
        image.src=elem.urls.regular;
        box.appendChild(image)
        // console.log(image)

    
    });
   
    // const size=document.querySelectorAll('.jsphotos')
    const size=document.querySelectorAll('.jsphotos')
    const box =document.querySelectorAll('.container')

    size.forEach((elem)=>{
        elem.addEventListener('click',e=>{
        // elem.classList.toggle('size')
        modal.classList.add('togglecls')
        const imgsrc=elem.getAttribute('src')
        console.log()
        imglink.setAttribute('src',imgsrc)
    //    window.scrollTo(100,0)
        console.log(modal.scrollTop)

        })
     })
    
     modal.addEventListener('click',()=>{
        modal.classList.remove('togglecls')
     })
    // imgbox.addEventListener('click',(e)=>{
        
    //     size.classList.toggle('size')

       
        
    //     box.classList.toggle('size')    
        
       
    
    // })
}



// Extracting data as a JSON Object from the response