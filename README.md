# 🔒 Secure Job Application Code Generator

A privacy-focused web application that helps job seekers protect their personal information on public platforms like LinkedIn. This tool allows users to generate a unique tracking code instead of posting their raw email addresses in public comments.

![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)

## 🚀 Live Demo
[View the Live Project here!](https://YOUR-VERCEL-URL-HERE.vercel.app)

## 🎯 The Problem
On LinkedIn, recruiters often ask candidates to "comment your email below." This leads to:
1. **Public Privacy Risks:** Email addresses are exposed to everyone.
2. **Spam:** Scrapers and bots collect these emails for marketing lists.
3. **Inbound Chaos:** Recruiters have to manually sort through thousands of comments.

## ✨ My Solution
This tool generates a unique **Job Application Code** (e.g., `JOB-A1B2C3D4`). 
- Users provide their email privately via the tool.
- The data is sent securely to a dashboard (Formspree).
- Users only post the **code** on the public LinkedIn thread.
- Recruiters can then cross-reference the code to find the applicant's email privately.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3 (Custom Variables & Responsive Design)
- **Logic:** Vanilla JavaScript (ES6+, Fetch API, Async/Await)
- **Data Handling:** Formspree API (Serverless)
- **Hosting:** Vercel / GitHub Pages

## 📂 Project Structure
- `index.html`: The structural foundation of the app.
- `style.css`: Custom "Dark Mode" UI inspired by modern SaaS platforms.
- `script.js`: Handles the random code generation and secure API POST requests.

---
*Developed by Anushka*
