import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((items) => {
      return items.category === category;
    });
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={allCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
