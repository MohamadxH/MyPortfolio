$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load' ,function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0) {
            $('.top').show();
        }else {
            $('.top').hide();
        }

    });

    //smooth scrolling

    $('a[href*="#"]').on('click' ,function(e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
        200,
        'linear'
        );

    });

});

// Get all the buttons that open the modals
const modalButtons = document.querySelectorAll('.open-modal');

// Loop through each button and attach a click event listener
modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the modal ID from the data-modal-id attribute
    const modalId = button.getAttribute('data-modal-id');

    // Find the corresponding modal element
    const modal = document.getElementById(modalId);

    // Reset the indexValue to 1 for the specific modal
    let indexValue = 1;

    // Open the modal by adding the "show-modal" class
    modal.classList.add('show-modal');

    // Call the showImage function to display the first image
    showImage(indexValue);
  });
});


// Get all the buttons that close the modals
const closeButtons = document.querySelectorAll('.close-modal');

// Loop through each button and attach a click event listener
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Find the parent modal element
    const modal = button.closest('.modal');

    // Reset the indexValue to 1
    indexValue = 1;

    // Close the modal by removing the "show-modal" class
    modal.classList.remove('show-modal');

    // Call the showImage function to display the first image
    showImage(indexValue);
  });
});



// Start photo slider and move to the next page

// Initialize the indexValue with 1
var indexValue = 1;

// Call the showImage function to display the initial image
showImage(indexValue);

// Function to handle the slider button clicks
function btn_slider(e) {
  // Set the indexValue to the clicked button value
  showImage(indexValue = e);
}

// Function to handle the side slide buttons
function side_slide(e) {
  // Increment or decrement the indexValue based on the button clicked
  showImage(indexValue += e);
}

// Function to display the appropriate image
function showImage(e) {
  // Select all the images inside the ".modal-body .images" element
  const img = document.querySelectorAll('.modal.show-modal .modal-body .images img');
  // Select all the slider buttons inside the ".btn-sliders" element
  const sliders = document.querySelectorAll('.modal.show-modal .btn-sliders span');

  // Check if the img and sliders arrays are not empty
  if (img.length === 0 || sliders.length === 0) {
    return; // Return early if elements are not found
  }

  // Check if the indexValue is greater than the number of images
  if (e > img.length) {
    // Wrap around to the first image
    indexValue = 1;
  }

  // Check if the indexValue is less than 1
  if (e < 1) {
    // Wrap around to the last image
    indexValue = img.length;
  } else {
    indexValue = e;
  }

  // Reset the indexValue to 1 if it is equal to the total number of images
  if (indexValue === img.length + 1) {
    indexValue = 1;
  }

  // Hide all images by setting their display property to "none"
  img.forEach(image => {
    image.style.display = "none";
  });

  // Reset the background color of all slider buttons
  sliders.forEach(slider => {
    slider.style.background = "transparent";
  });

  // Display the image corresponding to the indexValue by setting its display property to "block"
  img[indexValue - 1].style.display = "block";

  // Highlight the corresponding slider button by changing its background color to "#249bf9"
  sliders[indexValue - 1].style.background = "#249bf9";
}


  // JavaScript light mode toggle
  function toggleMode() {
    const body = document.body;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');

    // Toggle between dark and light mode classes
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Toggle between moon and sun icons
    if (body.classList.contains('dark-mode')) {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
      // Save the user's preference in localStorage
      localStorage.setItem('preferredTheme', 'dark');
    } else {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
      // Save the user's preference in localStorage
      localStorage.setItem('preferredTheme', 'light');
    }
  }

  // Check if there's a preferred theme saved in local storage when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    const preferredTheme = localStorage.getItem('preferredTheme');
    if (preferredTheme === 'dark') {
      // If dark mode was preferred, set it
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode'); // Ensure light-mode class is removed
      document.querySelector('.moon-icon').style.display = 'block';
      document.querySelector('.sun-icon').style.display = 'none';
    } else {
      // Otherwise, set the light mode
      document.body.classList.remove('dark-mode'); // Ensure dark-mode class is removed
      document.body.classList.add('light-mode');
      document.querySelector('.moon-icon').style.display = 'none';
      document.querySelector('.sun-icon').style.display = 'block';
    }
  });

  
// about section counter
// Function to start the counter when element comes into view
    function startCounter(element, endValue) {
        let start = 0;
        const duration = 2000; // Animation duration in milliseconds
        const interval = 50; // Update interval in milliseconds

        const step = (endValue - start) * (interval / duration);
        const counter = setInterval(() => {
            start += step;
            element.textContent = Math.round(start);

            if (start >= endValue) {
                element.textContent = endValue;
                clearInterval(counter);
            }
        }, interval);
    }

    // Callback function for the Intersection Observer
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);

                // Start the counters when the respective elements come into view
                startCounter(document.getElementById("box1").querySelector("span"), 1);
                startCounter(document.getElementById("box2").querySelector("span"), 20);
                startCounter(document.getElementById("box3").querySelector("span"), 17);
                // startCounter(document.getElementById("box4").querySelector("span"), 1);
            }
        });
    }

    // Create the Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Percentage of the element visible to trigger the callback
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the "about" section
    const aboutSection = document.getElementById('about');
    observer.observe(aboutSection);







