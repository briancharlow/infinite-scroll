let currentPage = 1; // Track the current page
let API_KEY = '48260581-d20f1b8695ea80f5cff4b2e60';
const query = 'animals'; // Your search term
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&per_page=20&page=`;


async function displayImages(page) {
    const response = await fetch(URL + page).then(response => response.json());
    console.log(response);
    
    if (response.hits.length === 0) {
        console.log("No more images found.");
        return; 
    }

    const gallery = document.getElementById('imageGallery'); 

    response.hits.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL; 
        imgElement.className = "post"; 
        imgElement.alt = image.tags; 


        const link = document.createElement('a');
        link.href = image.pageURL;
        link.target = '_blank'; 
        link.appendChild(imgElement);

        gallery.appendChild(link); 
    });
}


displayImages(currentPage);

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentPage++;
        console.log(currentPage);
        
        displayImages(currentPage); 
    }
});
