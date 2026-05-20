/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        "light-blue": "0 20px 45px rgba(59, 130, 246, 0.18)",
      },
    },
  },
};
