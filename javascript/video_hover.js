const imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach(container => {
    const video1 = container.querySelector(".hover-video1");
    const video2 = container.querySelector(".hover-video2");

    let hoverTimer; // Variable to hold the timeout reference

    // Show video on hover with delay
    container.addEventListener("mouseenter", () => {
        hoverTimer = setTimeout(() => {
            video1.style.display = "block"; // Show the video1 after 2 seconds
            video1.classList.add("scale-up"); // Add the scaling animation class
            video1.play(); // Start playing the video1
        }, 1000); // Delay of 2000ms (2 seconds)
    });

    // Hide video1 when the mouse leaves
    container.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimer); // Clear the timeout if the user leaves early
        video1.classList.remove("scale-up"); // Remove the scaling animation class
        video1.style.display = "none"; // Hide the video1
        video1.pause(); // Pause the video1
        video1.currentTime = 0; // Reset the video
    });

        // Show video on hover with delay
    container.addEventListener("mouseenter", () => {
        hoverTimer = setTimeout(() => {
            video2.style.display = "block"; // Show the video2 after 2 seconds
            video2.classList.add("scale-up"); // Add the scaling animation class
            video2.play(); // Start playing the video2
        }, 1000); // Delay of 2000ms (2 seconds)
    });

    // Hide video2 when the mouse leaves
    container.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimer); // Clear the timeout if the user leaves early
        video2.classList.remove("scale-up"); // Remove the scaling animation class
        video2.style.display = "none"; // Hide the video2
        video2.pause(); // Pause the video2
        video2.currentTime = 0; // Reset the video
    });
});