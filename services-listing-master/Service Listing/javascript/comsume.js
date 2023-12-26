const baseUrl = "https://cms.istad.co";
    const productAPI = `${baseUrl}/api/sl-services?pagination%5BpageSize%5D=12&populate=%2A`;
    let cardContainer = document.querySelector(".card");
    let original = [];
    let currentPage = 1;
const itemsPerPage = 8;
    
    //const productAPI = `${baseUrl}/api/sl-services?filters[category][id][$in][0]=9&[rating][$eq]=3&[rating][$eq]=4&[rating][$eq]=5&[rating][$eq]=1&[rating][$eq]=2&pagination%5BpageSize%5D=12&populate=%2A&[price][$between]=0-50,51-100,101-999`;
    // function displayProducts(products) {
    //   cardContainer.innerHTML = ""; // Clear previous content
    //   products.forEach((item, index) => {
    //     try {
    //       const thumbnailUrl =
    //         item.attributes.thumbnail?.data[0]?.attributes?.formats?.thumbnail?.url || '';
    //       const description = item.attributes.description;
    //       const rating = item.attributes.rating;
    //       const imageUrl = baseUrl + thumbnailUrl;

    //       cardContainer.innerHTML += `
    //         <!-- Your card item HTML here -->
    //         <div
    //                     class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-1">
    //                     <a onclick="gotodetail(${item.id})">
    //                     <a href="../pages/detailpage.html" >
    //                         <img src=${imageUrl}
    //                         class="object-cover w-full max-sm:h-36 sm:h-48  lg:h-54  mb-3 p-[0.1px] rounded-t-lg">
    //                     </a>
    //                     </a>
                        
                        
                        
    //                     <div class="px-4">
    //                       <div class="mb-4 relative">
    //                           <div class="flex items-center justify-between">
    //                               <div class="flex items-center">
    //                                   <a href="#"><img class="w-10 h-10 rounded-full mr-4" src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="Avatar of Jonathan Reinink"></a>
    //                                   <div class="text-sm">
    //                                       <a href="#" class="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan Reinink</a>
    //                                   </div>
    //                               </div>
    //                               <button type="button" data-dropdown-toggle="dropdownDots${index}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-0 ring-0 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
    //                               <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
    //                               <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
    //                               </svg>
    //                               </button>
    //                           </div>
    //                           <h4 class="text-md">${item.attributes.name}</h4>
    //                           <p class="text-gray-700 text-sm">${item.attributes.description}</p>
    //                           <div id="dropdownDots${index}"
    //                           style=" 
    //                                       top: 30px;
    //                                       position: absolute;
    //                                       right: 0;"
    //                           class="z-5 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
    //                               <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
    //                                   <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Update</a></li>
    //                                   <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a></li>
                                      
    //                               </ul>
    //                           </div>
    //                       </div>
    //                       <div class="flex items-center justify-between mt-2.5 mb-5">
    //                       <div class="flex items-center space-x-1">
    //           ${Array.from({ length: 5 }, (_, i) => `
    //             <svg class="w-4 h-4 ${i < rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    //               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
    //             </svg>
    //           `).join('')}
    //         </div>
    //         </div>
                          
    //        </div>
    //       </div>
    //       </div>
    //       `;
    //     } catch (error) {
    //       console.error(`Error processing item at index ${index}: ${error.message}`);
    //     }
    //   });
    // }
    fetch(productAPI)
    .then(response => response.json())
    .then(data => {
      original = data.data;
      displayProducts(original);
      renderPagination();
    })
    .catch(error => console.error('Error fetching data:', error));
    function displayProducts(products) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentProducts = products.slice(startIndex, endIndex);
     console.log("Here is the value of the fcurrent product : ",currentProducts)
      cardContainer.innerHTML = ""; // Clear previous content
      currentProducts.forEach((item, index) => {
          // ... your existing code to display products
          try {
            const thumbnailUrl =
              item.attributes.thumbnail?.data[0]?.attributes?.formats?.thumbnail?.url || '';
            const description = item.attributes.description;
            const rating = item.attributes.rating;
            const imageUrl = baseUrl + thumbnailUrl;
    
            cardContainer.innerHTML += `
              <!-- Your card item HTML here -->
              <div
                          class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-1">
                          <a href="../pages/detailpage.html?id=${item.id}" onclick="">
                              <img src=${imageUrl}
                              class="object-cover w-full max-sm:h-36 sm:h-48  lg:h-54  mb-3 p-[0.1px] rounded-t-lg">
                          </a>
                          <div class="px-4">
                            <div class="mb-4 relative">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <a href="#"><img class="w-10 h-10 rounded-full mr-4" src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="Avatar of Jonathan Reinink"></a>
                                        <div class="text-sm">
                                            <a href="#" class="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan Reinink</a>
                                        </div>
                                    </div>
                                    <button type="button" data-dropdown-toggle="dropdownDots${index}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-0 ring-0 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
                                    </svg>
                                    </button>
                                </div>
                                <h4 class="text-md">${item.attributes.name}</h4>
                                <p class="text-gray-700 text-sm">${item.attributes.description}</p>
                                <div id="dropdownDots${index}"
                                style=" 
                                            top: 30px;
                                            position: absolute;
                                            right: 0;"
                                class="z-5 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Update</a></li>
                                        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-2.5 mb-5">
                            <div class="flex items-center space-x-1 ">
                ${Array.from({ length: 5 }, (_, i) => `
                  <svg class="w-4 h-4 ${i < rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                  </svg>
                `).join('')}
                
              </div>
              <p>$${item.attributes.price}</p>
              </div>
                            
             </div>
            </div>
            </div>
            `;
          } catch (error) {
            console.error(`Error processing item at index ${index}: ${error.message}`);
          }
      });
    }
    function getAllProduct() {
      fetch(productAPI)
        .then((resp) => resp.json())
        .then((response) => {
          if (Array.isArray(response.data)) {
            original = response.data; // Save original products
        displayProducts(original);
        initializeDropdowns();
          } else {
            console.error("The response is not an array", response.data);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
    // function gotodetail(id) {
    //   window.location.href =`../pages/detailpage.html?id=${id}`;
    // }
    function initializeDropdowns() {
      const dropdownButtons = document.querySelectorAll("[data-dropdown-toggle]");
  
      dropdownButtons.forEach((button) => {
          button.addEventListener("click", () => {
              const dropdownId = button.dataset.dropdownToggle;
              const dropdown = document.getElementById(dropdownId);
  
              dropdown.classList.toggle("hidden");
          });
      });
  }
  function filterProducts(query) {
    const filteredProducts = original.filter((product) =>
        product.attributes.name.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
    renderPagination(); // Update pagination after filtering
}


const searchInput = document.getElementById("search-navbar");

searchInput.addEventListener("input", (event) => {
  const searchQuery = event.target.value;
  filterProducts(searchQuery);
});
function renderPagination() {
  const totalPages = Math.ceil(original.length / itemsPerPage);
  const paginationContainer = document.getElementById("pagination");

  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("li");
      pageButton.innerHTML = `
          <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 
              ${i === currentPage ? 'bg-white' : 'bg-white '}
              dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              ${i}
          </a>
      `;
      pageButton.addEventListener("click", () => {
          currentPage = i;
          displayProducts(original);
          // Optionally, you can scroll to the top of the page
          window.scrollTo({ top: 0, behavior: "smooth" });
      });

      paginationContainer.appendChild(pageButton);
  }
}


getAllProduct();
function gotodetail(id) {
  if (id) {
    window.location.href = `../detailpage.html?id=${id}`;
  } else {
    console.error("Invalid or missing ID");
  }
}



// const baseUrl = "https://cms.istad.co";
// const productAPI = `${baseUrl}/api/sl-services?populate=%2A`;
// let cardContainer = document.querySelector(".card");

// function getAllProduct() {
//   fetch(productAPI)
//     .then((resp) => resp.json())
//     .then((response) => {

//       if (Array.isArray(response.data)) {
//         Array.from(response.data).map((item,index) => {
          
//           try{  
//             console.log(item)
//             const thumbnailUrl =
//             item.attributes.thumbnail?.data[0]?.attributes?.formats?.thumbnail?.url || '';
//               console.log('Thumbnail URL:', thumbnailUrl);
//             const description = item.attributes.description;
//             const rating = item.attributes.rating;
//             const imageUrl = baseUrl + thumbnailUrl;
//             console.log('Image URL:', imageUrl);
//             cardContainer.innerHTML += `
//             <div
//             class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-1">
//             <a href="../pages/detail page.html">
//                 <img src=${imageUrl}
//                 class="object-cover w-full max-sm:h-36 sm:h-48  lg:h-54  mb-3 p-[0.1px] rounded-t-lg">
//             </a>
//             <div class="px-4">
//               <div class="mb-4 relative">
//                   <div class="flex items-center justify-between">
//                       <div class="flex items-center">
//                           <a href="#"><img class="w-10 h-10 rounded-full mr-4" src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="Avatar of Jonathan Reinink"></a>
//                           <div class="text-sm">
//                               <a href="#" class="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan Reinink</a>
//                           </div>
//                       </div>
//                       <button type="button" data-dropdown-toggle="dropdownDots${index}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-0 ring-0 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
//                       <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
//                       <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
//                       </svg>
//                       </button>
//                   </div>
//                   <h4 class="text-md">${item.attributes.name}</h4>
//                   <p class="text-gray-700 text-sm">${item.attributes.description}</p>
//                   <div id="dropdownDots${index}"
//                   style=" 
//                               top: 30px;
//                               position: absolute;
//                               right: 0;"
//                   class="z-5 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
//                       <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
//                           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Update</a></li>
//                           <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a></li>
                          
//                       </ul>
//                   </div>
//               </div>
//               <div class="flex items-center justify-between mt-2.5 mb-5">
//               <div class="flex items-center space-x-1">
//   ${Array.from({ length: 5 }, (_, i) => `
//     <svg class="w-4 h-4 ${i < rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
//     </svg>
//   `).join('')}
// </div>
//                                   </div>
              
//               </div>
//           </div>
//         </div>
//            `;

//           }catch(error){
//             console.error(
//               `Error processing item at index ${index}: ${error.message}`
//             );
//           }
        
//         });
//         initializeDropdowns();
//       } else {
//         console.error("The response is not an array", response.data);
//       }
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }

// function initializeDropdowns() {
//     const dropdownButtons = document.querySelectorAll("[data-dropdown-toggle]");
  
//     dropdownButtons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const dropdownId = button.dataset.dropdownToggle;
//         const dropdown = document.getElementById(dropdownId);
  
//         dropdown.classList.toggle("hidden");
//       });
//     });
//   }

//   function filterProducts(query) {
//     const filteredProducts = originalProducts.filter((product) =>
//       product.attributes.description.toLowerCase().includes(query.toLowerCase())
//     );
//     displayProducts(filteredProducts);
//   }

//   const searchInput = document.getElementById("search-navbar");
//   let originalProducts = [];

//   searchInput.addEventListener("input", (event) => {
//     const searchQuery = event.target.value;
//     filterProducts(searchQuery);
//   });
  
//   getAllProduct();

