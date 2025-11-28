# RyanrealAF | Authenticity Ain’t Optional

A Raw Runtime Sovereign Stack project using TypeScript, React, and Tailwind via CDN.

## Deployment Instructions

1.  **Repo Setup**: Ensure all files (`index.html`, `404.html`, `index.tsx`, `App.tsx`) are in the root of your GitHub repository.
2.  **GitHub Pages**:
    *   Go to **Settings** > **Pages**.
    *   Under **Build and deployment**, select **Source** as `Deploy from a branch`.
    *   Set **Branch** to `main` (or `master`) and folder to `/ (root)`.
    *   Click **Save**.
3.  **Enforce HTTPS**: Ensure the "Enforce HTTPS" checkbox is checked in the Pages settings.
4.  **Verify**: Visit your provided GitHub Pages URL (e.g., `https://[username].github.io/[repo-name]/`).

## Troubleshooting
*   **Blank Screen**: Open the browser console (F12). If you see module loading errors, ensure your browser supports ES Modules and Import Maps (all modern browsers do).
*   **404 on Refresh**: The `404.html` file ensures that if you were to add client-side routing later, GitHub Pages would redirect back to the app entry point.
