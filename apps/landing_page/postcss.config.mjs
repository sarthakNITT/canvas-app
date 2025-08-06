export default {
  plugins: {
    // this is Tailwind’s PostCSS plugin _and_ its config
    '@tailwindcss/postcss': {
      content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './ui-lib/**/*.{js,ts,jsx,tsx}'
      ],
      safelist: ['px-4','py-2','text-[13px]','pl-10','pr-4'],
      theme: { extend: {} },
      plugins: []
    },
    autoprefixer: {}
  }
}
