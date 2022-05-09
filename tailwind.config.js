module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    backgroundImage:() => ({
    'webbg': "url('./img/bg.png')",
    'edit': "url('./img/edit.png')",
    'delete': "url('./img/delete.png')",
    'search': "url('./img/search.png')",
    }),
    fontFamily: {
    'orelega': ["Orelega One", "cursive"],
    'quick': ['Overpass Mono', 'sans-serif'],
     },
    },
  },
  plugins: [],
}
