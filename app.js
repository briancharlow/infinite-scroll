
let API_KEY = '48260581-d20f1b8695ea80f5cff4b2e60';
let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('animals')  + "&per_page=50";


// async function getImages(){
//     let response = await fetch(URL).then(response => response.json());
//     console.log(response);
//     response.hits.forEach(hit => {
//         console.log(hit.imageURL);
//     });
// }

async function displayImages() {
    let response = await fetch(URL).then(response => response.json());
    console.log(response);
    response.hits.forEach(hit => {
        console.log(hit.imageURL);
    });
    let images = response.hits; // Get the images from the response
    const gallery = document.getElementById('imageGallery'); // Your image container
    gallery.innerHTML = ''; // Clear previous images

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL; 
        imgElement.className="post"// Use web format for initial load
        imgElement.alt = image.tags; // Add alt text for accessibility

        // Optionally add a link to the original image
        const link = document.createElement('a');
        link.href = image.pageURL; // Link to the image page on Pixabay
        link.target = '_blank'; // Open in new tab
        link.appendChild(imgElement);

        gallery.appendChild(link); // Append image to the gallery
    });
}



displayImages();




