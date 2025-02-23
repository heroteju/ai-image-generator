document.getElementById('generate-btn').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt-input').value;
    const response = await fetch('https://your-backend-api.com/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    if (data.imageUrl) {
        document.getElementById('generated-image').src = data.imageUrl;
    }
});

const apiKey = "kh4Q9YBVQUUTYrFVrYInHL1ZUfvN4w";  // Add your API key here

fetch("https://api.starryai.com/generate", {
    method: "POST",
    headers: {
        "X-API-Key": kh4Q9YBVQUUTYrFVrYInHL1ZUfvN4w,  // API key goes here
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        prompt: "A futuristic city at night with flying cars",
        style: "cyberpunk",
        aspect_ratio: "16:9",
        iterations: 30
    })
})
.then(response => response.json())
.then(data => console.log("Generated Image URL:", data.image_url))
.catch(error => console.error("Error:", error));

