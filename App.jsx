import { useState } from "react";
import Title from "./Menu/Title";
import data from "./data";
import Menu from "./Menu/Menu";
import Categories from "./Menu/Categories";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    category === "all"
      ? setMenuItems(data)
      : setMenuItems(data.filter((eachMenu) => eachMenu.category === category));
    // if (category === "all") {
    //   setMenuItems(data);
    //   return;
    // }
    // const filteredMenu = data.filter(
    //   (eachMenu) => eachMenu.category === category
    // );
    // setMenuItems(filteredMenu);
  };
  return (
    <section className="menu">
      <main>
        <Title />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu items={menuItems} />
      </main>
    </section>
  );
}

export default App;
