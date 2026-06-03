# Shameel's Portfolio

A professional portfolio website built with React 18, Vite, and Tailwind CSS.

**Live Demo:** [https://portfolio-eight-brown-60.vercel.app/](https://portfolio-eight-brown-60.vercel.app/)

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view it in your browser.

## Deployment

This portfolio is ready to be deployed to Vercel:

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and create a new project.
3.  Import your GitHub repository.
4.  Vercel will automatically detect the Vite framework and configure the build settings.
5.  Click "Deploy".

## Customizing Formspree

The contact form uses Formspree. To receive emails:
1.  Sign up at [Formspree](https://formspree.io/).
2.  Create a new form.
3.  Update the form ID in `src/components/Contact.jsx` inside the `useForm` hook (`const [state, handleSubmit] = useForm("your-form-id");`).

## Built With
*   [React 18](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [React Icons](https://react-icons.github.io/react-icons/)
*   [Formspree](https://formspree.io/)
