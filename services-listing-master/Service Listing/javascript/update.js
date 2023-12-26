const baseUrl = "https://cms.istad.co";
const productAPI = `${baseUrl}/api/sl-features?populate=%2A`;
let cardContainer = document.querySelector(".card");

function getAllProduct() {
  fetch(productAPI)
    .then((resp) => resp.json())
    .then((response) => {
      if (Array.isArray(response.data)) {
        response.data.forEach((item, index) => {
          const imageUrl =
            baseUrl +
            item.attributes.thumbnail.data.attributes.formats.thumbnail.url;
            const cardHTML = `
                        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="../pages/detail page.html">
                        <img src="${imageUrl}" class="w-12 mb-3 rounded-t-lg"></a>
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
                                    <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus.</p>
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
                                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                        <!-- Your star icons here -->
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

          cardContainer.innerHTML += cardHTML;
        });

        initializeDropdowns();
      } else {
        console.error("The response is not an array", response.data);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}
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

getAllProduct();
const insertFeatureEndpoint = `${baseUrl}/api/sl-features`;
// Function to insert a new feature
const insertFeature = async (featureData) => {
    try {
      const response = await fetch(insertFeatureEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Accept":"*/*",

        },
        body: JSON.stringify({ data: featureData }),
      });
  
      if (response.ok) {
        console.log('Feature inserted successfully!');
        // You may want to reload the product cards or update the UI here
        getAllProduct(); // Reload products after inserting a new feature
      } else {
        console.error('Failed to insert feature:', response.statusText);
      }
    } catch (error) {
      console.error('Error inserting feature:', error);
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    // Collect form data
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const thumbnail = document.getElementById('thumbnail').value;
  
    // Call the insertFeature function with the collected data
    insertFeature({ title, description, thumbnail });
  };
  const featureForm = document.getElementById('featureForm');
if (featureForm) {
  featureForm.addEventListener('submit', handleFormSubmit);
}
const getAllProducts = async () => {
    try {
      const response = await fetch(productAPI);
      const data = await response.json();
  
      if (Array.isArray(data.data))  {
        cardContainer.innerHTML = "";
        data.data.forEach((item, index) => {
          const imageUrl =
            baseUrl +
            item.attributes.thumbnail.data.attributes.formats.thumbnail.url;
            const cardHTML = `
                        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="../pages/detail page.html">
                        <img src="${imageUrl}" class="w-full mb-3 rounded-t-lg">
                        <div class="px-4">
                        </a>
                          
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
                                    <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, delectus.</p>
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
                                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                        <!-- Your star icons here -->
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

          cardContainer.innerHTML += cardHTML;
        });

        initializeDropdowns();
      } else {
        console.error("The response is not an array", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
document.addEventListener('DOMContentLoaded', getAllProducts);

