const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3")
const boton4 = document.getElementById("boton4")
const boton5 = document.getElementById("boton5")
const boton6 = document.getElementById("boton6")
let nsf = 'waifu'
let gif = false;
 boton2.addEventListener("click", () => {
   if ((nsf = "waifu")) {
     nsf = "hentai";
     gif= false
     funcio();
   } else {
     nsf = "sfw";
   }
 });
 boton3.addEventListener("click", () => {
   if ((nsf = "waifu")) {
     nsf = "ass";
     gif= false
     funcio();
   } else {
     nsf = "sfw";
   }
 });
 boton4.addEventListener("click", () => {
  if ((nsf = "waifu")) {
    nsf = "milf";
    gif= false
    funcio();
  } else {
    nsf = "sfw";
  }
});
boton6.addEventListener("click", () => {
  if ((nsf = "waifu")) {
    nsf = "ero";
    gif= false
    funcio();
  } else {
    nsf = "sfw";
  }
});

boton5.addEventListener("click", () => {
  if ((nsf = "waifu")) {
    nsf = "hentai";
    gif = true;
    funcio();
  } else {
    nsf = "sfw";
    gif= false
  }
});

const funcio = async () => {
  try {
    const result = await axios.get(
      `https://api.waifu.im/search`,
      {
        params: {
          included_tags:`${nsf}`,
          many: true,
          gif: `${gif}`
          
        },
        
      }
    );

    

    console.log(result.data.images[0].url);
    let imagen = "";
    let num = 0;
    let imageurl = ''
    result.data.images.forEach((element) => {
      num++;
     
      console.log(num);
      if (num <= 30) {
        imageurl = result.data.images[num++].url
        imagen =
          imagen +
          `<div class="w-[300px] h-full relative rounded-lg flex-col my-12 overflow-hidden group transition border-2 border-red-500 shadow-md mx-3">
           <div class="relative bg-auto ">
               <div class="w-full h-full bg-slate-800 group-hover:blur-[2px] ">
                   <img src="${result.data.images[num++].url}" alt="">
               </div>
               <div class="absolute top-6 -right-11 group-hover:right-0 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
                       <button class="bg-red-600 p-4 rounded-md text-white"><svg class="i i-heart" viewBox="0 0 24 24"><path d="m12 21-8.8-8.3A5.6 5.6 0 1 1 12 6a5.6 5.6 0 1 1 8.9 6.6z"></path></svg></button>
                       <a href="${
                        imageurl
                       }" class="bg-fuchsia-50 p-4 rounded-md"><svg class="i i-upload" viewBox="0 0 24 24"><path d="m7 8 5-5 5 5m-5 7V3m10 12v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4"></path></svg></a>
                      
               </div>
           </div>
          
       </div>
       `;
      }
    })
    
    ;
    document.getElementById("contenedor").innerHTML = imagen;
  } catch (error) {
    console.log(error);
  }
};

funcio();
