/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      sm: "576px",
      md: "768px",
      lg: "950px",
      xl: "1200px",
      "2xl": "1400px",
    },
  },

  extend: {
    screens: {
      // 'md':'950px'
      // 'sm':'650px',
      // 'md':'950px',
      // 'lg':'1075px',
      // 'xl':'1200px',
      // '2xl':'1275px',
      // '3xl':'1400px',
      // '4xl':'1875px'
      // 'sm':{'max':'650px'},
      // 'md':{'max':'950px'},
      // 'lg':{'max':'1075px'},
      // 'xl':{'max':'1200px'},
      // '2xl':{'max':'1275px'},
      // '3xl':{'max':'1400px'},
      // '4xl':{'max':'1875px'},
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    backgroundImage: {
      "hero-banner": "url('/public/images/herobanner.jpg')",
      "custom-gradient":
        "linear-gradient(to-bottom, rgba(0,0,0,0.5), rgba(255,255,255,0.116))",
    },
    backgroundSize: {
      "custom-size": "100vw 100vh",
      "our-vision-size": "50%",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];
