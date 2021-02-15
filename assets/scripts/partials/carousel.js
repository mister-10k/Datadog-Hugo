const images = [
    'https://datadogko.s3.us-east-2.amazonaws.com/images/partials/carousel/home-observability.png',
    'https://datadogko.s3.us-east-2.amazonaws.com/images/partials/carousel/home-dashboards+-+Copy.png',
    'https://datadogko.s3.us-east-2.amazonaws.com/images/partials/carousel/1_cD1QbEuCEkmYqMDmmqJtZA.png',
    'https://datadogko.s3.us-east-2.amazonaws.com/images/partials/carousel/DsYMFXCXoAE9BwT.jpg',
    'https://datadogko.s3.us-east-2.amazonaws.com/images/partials/carousel/data%2Blog%2Bimage3.jpg',
    'https://datadogko.s3.us-east-2.amazonaws.com/images/partials/carousel/network-performance-monitoring-traffic-hero-v2.jpg'
]
var index = 0;

document.getElementById('carousel-img-1').src = images[0];
document.getElementById('carousel-img-2').src = images[1];

document.getElementById("carousel-arrow")
        .addEventListener("click", () => { 
            index = index == images.length - 1 ? 0 : index + 1;
            nextIndex = index == images.length - 1 ? 0 : index + 1;

            document.getElementById('carousel-img-1').src = images[index];
            document.getElementById('carousel-img-2').src = images[nextIndex];
        });