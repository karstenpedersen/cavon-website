module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-variant": "var(--color-primary-variant)",
        "on-primary": "var(--color-on-primary)",
        secondary: "var(--color-secondary)",
        "secondary-variant": "var(--color-secondary-variant)",
        "on-secondary": "var(--color-on-secondary-variant)",

        background: "var(--color-background)",
        "on-background": "var(--color-on-background)",
        //dark: "var(--color-dark)",
        "on-dark": "var(--color-on-dark)",
        surface: "var(--color-surface)",
        "on-surface": "var(--color-on-surface)",
        light: "var(--color-text-light)",
        error: "var(--color-error)",
        "on-error": "var(--color-on-error)",
        dark: {
          300: "var(--color-dark-300)",
          700: "var(--color-dark-700)",
          900: "var(--color-dark-900)",
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      gridTemplateRows: {
        page: "5vh calc(90vh)",
      },
      gridTemplateColumns: {
        page: "250px auto",
        "page-sm": "4rem auto",
      },
    },
  },
  plugins: [],
};
