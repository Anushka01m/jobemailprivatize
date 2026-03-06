let sessionData = []; // Stores codes generated during this visit

document.getElementById('generateBtn').addEventListener('click', async () => {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    const btn = document.getElementById('generateBtn');
    
    // Basic Validation
    if (!email.includes('@') || email.length < 5) {
        alert("Please enter a valid email address!");
        return;
    }

    // Generate Unique Code
    const code = "JOB-" + Math.random().toString(36).substring(2, 10).toUpperCase();
    
    btn.innerText = "Processing...";
    btn.disabled = true;

    // --- IMPORTANT: Replace the URL below with your Formspree Endpoint ---
    const FORMSPREE_URL = "https://formspree.io/f/myknyjrr";

    try {
        const response = await fetch(FORMSPREE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                email: email, 
                generated_code: code,
                timestamp: new Date().toLocaleString()
            })
        });

        if (response.ok) {
            // Store data locally for CSV download
            sessionData.push({ email, code, date: new Date().toLocaleString() });

            // Update UI
            document.getElementById('finalCode').innerText = code;
            document.getElementById('resultBox').style.display = 'block';
            btn.innerText = "Generate Another 🚀";
            btn.disabled = false;
        } else {
            throw new Error("API Error");
        }
    } catch (e) {
        // Fallback for visual testing if API is not yet connected
        sessionData.push({ email, code, date: new Date().toLocaleString() });
        document.getElementById('finalCode').innerText = code;
        document.getElementById('resultBox').style.display = 'block';
        btn.innerText = "Generate Another 🚀";
        btn.disabled = false;
        console.log("Note: Connect Formspree to save data permanently.");
    }
});

// CSV Download Function
document.getElementById('downloadBtn').addEventListener('click', () => {
    if (sessionData.length === 0) return alert("No codes generated yet!");

    let csvContent = "data:text/csv;charset=utf-8,Email,Code,Date\n";
    sessionData.forEach(row => {
        csvContent += `${row.email},${row.code},${row.date}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "session_job_codes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Copy Function
document.getElementById('copyBtn').addEventListener('click', () => {
    const text = document.getElementById('finalCode').innerText;
    navigator.clipboard.writeText(text);
    const originalText = document.getElementById('copyBtn').innerText;
    document.getElementById('copyBtn').innerText = "Copied! ✅";
    setTimeout(() => {
        document.getElementById('copyBtn').innerText = originalText;
    }, 2000);
});
