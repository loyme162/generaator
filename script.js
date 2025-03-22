async function generateImage() {
    const prompt = document.getElementById("prompt").value;
    const imageContainer = document.getElementById("image-container");
    
    imageContainer.innerHTML = "<p>Generating image...</p>";

    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_OPENAI_API_KEY"
            },
            body: JSON.stringify({
                prompt: prompt,
                n: 1,
                size: "512x512"
            })
        });

        const data = await response.json();
        const imageUrl = data.data[0].url;
        
        imageContainer.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
    } catch (error) {
        imageContainer.innerHTML = "<p>Error generating image. Check API key.</p>";
    }
}
