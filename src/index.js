// const cargardatos = async () => {
//   try {
//      const datos = await fetch("https://api.waifu.im/search?included_tags=maid")
//      const respuesta = await datos.json();
//      let imagen = ''
//      respuesta.images.forEach(element => {
//         imagen = imagen + `<div class="w-[300px] h-[400px] relative rounded-lg flex-col my-12 overflow-hidden group transition border-2 border-red-500 shadow-md">
//         <div class="relative bg-auto ">
//             <div class="w-full h-full bg-slate-800 group-hover:blur-[2px] ">
//                 <img src="${respuesta.images[0].url}" alt="">
//             </div>
//             <div class="absolute top-6 -right-11 group-hover:right-0 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     <button class="bg-red-600 p-4 rounded-md text-white">()</button>
//                     <button class="bg-fuchsia-50 p-4 rounded-md">()</button>
                   
//             </div>
//         </div>
       
//     </div>`
//      });
//      document.getElementById('contenedor').innerHTML = imagen;
//    } catch (error) {}
//  };

//  cargardatos();
const boton = document.getElementById('boton1');
const body = document.getElementById('body')

boton.addEventListener('click', () =>{
    body.classList.toggle('bg-white');
})
