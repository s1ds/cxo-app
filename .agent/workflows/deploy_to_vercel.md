---
description: How to deploy the web application to Vercel
---

# Deploying CXO App to Vercel

Follow these steps to deploy your Next.js application to Vercel.

## 1. Push Code to GitHub

First, we need to commit your code and push it to a GitHub repository.

1.  **Commit your changes**:
    ```bash
    git add .
    git commit -m "Initial commit: CXO App Web and Mobile"
    ```

2.  **Create a new repository on GitHub**:
    *   Go to [GitHub.com/new](https://github.com/new).
    *   Name it `cxo-app` (or similar).
    *   **Do not** initialize with README, .gitignore, or License (we already have them).
    *   Click "Create repository".

3.  **Push to GitHub**:
    *   Copy the commands from the "…or push an existing repository from the command line" section. It will look like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/cxo-app.git
    git branch -M main
    git push -u origin main
    ```

## 2. Deploy on Vercel

1.  **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in with GitHub.
2.  **Add New Project**: Click "Add New..." -> "Project".
3.  **Import Repository**: Find your `cxo-app` repository and click "Import".
4.  **Configure Project**:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: Click "Edit" and select `cxo-app/web`. **This is critical.**
    *   **Environment Variables**: Expand this section and add the following keys from your `.env.local` file:
        *   `NEXT_PUBLIC_SUPABASE_URL`
        *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5.  **Deploy**: Click "Deploy".

## 3. Verify Deployment

*   Wait for the build to complete.
*   Once finished, Vercel will provide a URL (e.g., `cxo-app.vercel.app`).
*   Visit the URL to verify the app is working.
