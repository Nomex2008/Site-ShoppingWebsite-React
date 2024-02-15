import Arrivels from "./components/arrivals/Arrivels.jsx";
import Brands from "./components/brands/Brands.jsx";
import Header from "./components/header/header.jsx";
import Promo from "./components/promo/Promo.jsx";

function App() {
  return (
    <div className="App">
        <Header/>
        <Promo/>
        <Brands/>
        <Arrivels/>
    </div>
  );
}

export default App;

/*
      This js file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
*/