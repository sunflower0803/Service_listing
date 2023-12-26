
// const baseUrl = "https://cms.istad.co";
//   $(function(){
//     console.log(window.location.href)
//     let url=window.location.href.split('?')
//     let id=url[1].substr(3,url[1].length-3) //cut and get only id
//     view(id)
//   })
//   function view(id)
//   {
//       $.ajax({
//         url:https://cms.istad.co/api/ost-templates/${id}?populate=%2A,
//         method:"GET",
//         success:function(res)
//         {
//           const template=res.data.attributes
//           const imageUrl = baseUrl +template.thumbnail.data.attributes.formats.thumbnail.url;
//           $('#showing').append(`
//                <div class="max-w-xl group rounded-lg">
//       <div class="relative overflow-hidden flex justify-start items" id="show">
//         <img class="max-w-xl w-[1000px]  rounded-lg" src="${imageUrl}" alt="">
//         <div class="absolute h-full w-full backdrop-blur-sm bg-white/20 cursor-pointer flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
//           <a href="${template.livePreviewUrl}" class="bg-blue-700 rounded-lg text-white py-2 px-5" target="_blank">Preview</a>
//         </div>
//       </div>
//   </div>
//   <div class="border-solid border-[1px] md:mt-[10px] border-blue-600 rounded-lg xl:mr-[124px] lg:mr-[100px] max-sm:mt-[50px] flex mx-auto sm:mt-10 ">
//     <div class="lg:p-[50px] md:p-[20px] sm:p-[50px] max-sm:p-[50px]">
//     <p class="text-center text-blue-600 text-[30px] mt-[-20px] mb-[40px] font-bold">ឥតគិតថ្លៃ</p>
//     <p class="text-[15px] leading-9"><span><i class="fa-solid fa-check"></i></span>Quality checked by ZEIKKI Team</p>
//     <p class="text-[16px] leading-9"><span><i class="fa-solid fa-check"></i></span>6 months technical support</p>
//     <p class="text-[16px] leading-9"><span><i class="fa-solid fa-check"></i></span>Life time free updates</p>
//     <div class="text-center">
//         <br>
//         <a href="${template.gitUrl}" target="_blank" class="bg-blue-700 text-white text-[12px] font-bold px-[14px] py-[10px] rounded-[10px] hover:bg-black hover:text-white">ទាញយកគំរូ</a>
//     </div>
//     <br>
//     <div>
//         <p class="text-center text-[16px]">Updated: 1 month ago</p>
//     </div>
//   </div>
// </div>
//           `)
//       }})
//   }


//   const baseUrl1 = "https://cms.istad.co";
// let productAPI1 = "https://cms.istad.co/api/ost-templates?pagination%5BpageSize%5D=12&populate=%2A";
// let card1 = document.querySelector("#template");
// let templates1 = [];
// console.log(templates1)
// function renderTemplates1(templatesToRender) {
//   templatesToRender.forEach((template) => {
//    const imageUrl =baseUrl1+template.attributes.thumbnail.data.attributes.formats.thumbnail.url;
//     const templateId = template.id;
//     card1.innerHTML += `
//                         <div class="group w-[366px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
//                       <div
//                         class="bg-blue-700 px-[14px] py-[10px] absolute end-0 buttom-0 mt-[200px] me-2 z-50  rounded-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300">
//                         <a href="${template.attributes.livePreviewUrl}" class="text-white  text-[16px]" target="_blank">Preview</a>
//                       </div>
//                       <a onclick="gotodetail(${templateId})">
//                         <img
//                           src="${imageUrl}"
//                           alt="Product" class="h-[247px] w-[366px] object-cover rounded-t-xl" />
//                         <div class="p-5" id="eng">
//                           <a href="#">
//                             <div class="flex justify-between ">
//                               <p class="mb-2 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white inline-block">
//                                 ${template.attributes.name}</p>
//                                  <a href="#" class="text-[18px] text-blue-700 ml-[39px]"> Free</a>
//                             </a>
//                           </div>
//                           </a>
//                           <p class="mb-3 text-[15px] font-normal text-gray-700 dark:text-gray-400">${template.attributes.description}</p>
//                         </div>
//                     </div>
//                     </a>
//                     </div>
//     `;
//   });
// }
// function getAllProduct1() {
//   fetch(productAPI1)
//     .then((resp) => resp.json())
//     .then((response) => {
//       if (Array.isArray(response.data)) {
//         // Store all templates
//         templates1 = response.data.map((item) => item);
//         // Render all templates initially
//         renderTemplates1(templates1);
//       } else {
//         console.error("The response is not an array", response.data);
//       }
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }
// getAllProduct1();

// function gotodetail(id) {
//   window.location.href = ../html/view_template.html?id=${id};
// }