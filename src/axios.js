const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3")
const boton4 = document.getElementById("boton4")
let nsf = 'sfw'
console.log(boton2);
console.log(nsf);

 boton2.addEventListener("click", () => {
   if ((nsf = "sfw")) {
     nsf = "nsfw";
     categoria = "waifu"
     funcio();
   } else {
     nsf = "sfw";
   }
 });
 let categoria = 'waifu'
 boton3.addEventListener("click", () => {
   if ((nsf = "sfw")) {
     nsf = "nsfw";
     categoria= 'trap'
     funcio();
   } else {
     nsf = "sfw";
   }
 });

 boton4.addEventListener("click", () => {
  if ((nsf = "sfw")) {
    nsf = "nsfw";
    categoria= 'blowjob'
    funcio();
  } else {
    nsf = "sfw";
  }
});

const funcio = async () => {
  try {
    const result = await axios.post(
      `https://api.waifu.pics/many/${nsf}/${categoria}`,
      {
        params: {
          field: "excluded",
          Data: "String",
        },
        Headers: {
          "Content-Type": "application/json",
        },
      }
    );

    

    console.log(result);
    let imagen = "";
    let num = 0;
    result.data.files.forEach((element) => {
      num++;
      console.log(num);
      if (num <= 30) {
        imagen =
          imagen +
          `<div class="w-[300px] h-[auto] relative rounded-lg flex-col my-12 overflow-hidden group transition border-2 border-red-500 shadow-md mx-3">
           <div class="relative bg-auto ">
               <div class="w-full h-full bg-slate-800 group-hover:blur-[2px] ">
                   <img src="${result.data.files[num++]}" alt="">
               </div>
               <div class="absolute top-6 -right-11 group-hover:right-0 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
                       <button class="bg-red-600 p-4 rounded-md text-white"><svg class="i i-heart" viewBox="0 0 24 24"><path d="m12 21-8.8-8.3A5.6 5.6 0 1 1 12 6a5.6 5.6 0 1 1 8.9 6.6z"></path></svg></button>
                       <a href="${
                         result.data.files[num++]
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
