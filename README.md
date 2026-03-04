# Daryl Yeap Website (Newsletter Revamp)

This is a Next.js project built to revamp the newsletter signup page for [darylyeap.com](https://darylyeap.com). It features a premium design matching the [Shoulder Rehab](https://shoulderrehab.darylyeap.com/) site, built with Tailwind CSS and Shadcn UI.

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser. The home page automatically redirects to `/newsletter`.

## Project Structure

-   `src/app/newsletter/page.tsx`: The main newsletter signup page.
-   `src/components/newsletter-form.tsx`: The signup form component. **(Action Required: Integrate Beehiiv API here)**
-   `src/components/ui`: Reusable UI components (Button, Card, Input).
-   `src/lib/utils.ts`: Utility functions (Tailwind class merger).
-   `tailwind.config.ts`: Custom configuration for colors, fonts, and animations.

## Beehiiv Integration

To connect the form to Beehiiv:

1.  Open `src/components/newsletter-form.tsx`.
2.  Replace the simulated API call in `handleSubmit` with a real request to Beehiiv's API or use their embedded form code.
3.  If using the API, you'll need your Publication ID and API Key.

## Deployment

This project is optimized for deployment on **Netlify** or **Vercel**.

### Netlify Deployment

1.  Push this code to a Git repository (GitHub/GitLab/Bitbucket).
2.  Log in to Netlify and "Import from Git".
3.  Select your repository.
4.  Netlify should automatically detect the Next.js settings:
    -   **Build Command:** `npm run build`
    -   **Publish Directory:** `.next` (or let the Next.js plugin handle it)
