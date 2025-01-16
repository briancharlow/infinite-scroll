let currentPage = 1; // Track the current page
let API_KEY = '48260581-d20f1b8695ea80f5cff4b2e60';
const query = 'animals'; // Your search term
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&per_page=20&page=`;

// Function to display images
async function displayImages(page) {
    const response = await fetch(URL + page).then(response => response.json());
    console.log(response);
    
    if (response.hits.length === 0) {
        console.log("No more images found.");
        return; // Exit if no more images are available
    }

    const gallery = document.getElementById('imageGallery'); // Your image container

    response.hits.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL; 
        imgElement.className = "post"; // Use web format for initial load
        imgElement.alt = image.tags; // Add alt text for accessibility

        // Optionally add a link to the original image
        const link = document.createElement('a');
        link.href = image.pageURL; // Link to the image page on Pixabay
        link.target = '_blank'; // Open in new tab
        link.appendChild(imgElement);

        gallery.appendChild(link); // Append image to the gallery
    });
}

// Initial load of images
displayImages(currentPage);

// Infinite Scroll Logic
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentPage++;
        console.log(currentPage);
         // Increment page number for next request
        displayImages(currentPage); // Fetch more images
    }
});
