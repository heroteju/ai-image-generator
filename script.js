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
