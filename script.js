document.getElementById("generateBtn").addEventListener("click", async() => {
    const themeSelect = document.getElementById("themeSelect").value;
    const query = themeSelect === "random" ? getRandomTheme() : themeSelect;
    const wallpaperContainer = document.getElementById("wallpapers");

    wallpaperContainer.innerHTML = "Loading wallpapers...";

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=6&client_id=X4VskC2jXQGJIruwCl8j6Iwj_Z6Fyx5xarprlJAgTlI`);
        const data = await response.json();
        displayWallpapers(data.results);
    } catch (error) {
        console.error("Error fetching wallpapers:", error);
        wallpaperContainer.innerHTML = "Sorry, something went wrong.";
    }
});

function displayWallpapers(images) {
    const wallpaperContainer = document.getElementById("wallpapers");
    wallpaperContainer.innerHTML = "";

    images.forEach(image => {
        const wallpaper = document.createElement("div");
        wallpaper.className = "wallpaper";
        wallpaper.style.backgroundImage = `url(${image.urls.regular})`;

        wallpaperContainer.appendChild(wallpaper);
    });
}

function getRandomTheme() {
    const themes = ["nature", "architecture", "animals", "technology", "abstract"];
    return themes[Math.floor(Math.random() * themes.length)];
}