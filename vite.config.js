import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  base: './',  // Varmistaa, että polut ovat suhteellisia
  build: {
    cssCodeSplit: false,  // Ei jaeta CSS:ää erillisiksi tiedostoiksi
    minify: 'esbuild',    // Minifioi CSS ja JavaScript
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'src/pages/about.html',
        recipes: 'src/pages/recipes.html',
        recipe: 'src/pages/recipe.html',
      },
    },
  },
  plugins: [
    purgecss({
      content: ["./index.html", "./src/**/*.{html,js,scss,jpg}", "/components/*.{html}", './public/components/nav.html', './public/components/footer.html'], // Tiedostot, joita PurgeCSS skannaa
    }),
  ],
});




