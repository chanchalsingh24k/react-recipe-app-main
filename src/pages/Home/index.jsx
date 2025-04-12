import "./styles.scss";
import FilterButtons from "components/FilterButtons";
import RecipeList from "components/RecipeList";
import Search from "components/Search";
import Header from "components/Header";


function Home() {
  return (
    <div className="home-container">
     <Header />
      <Search />
      <FilterButtons />
      <RecipeList />
    </div>
  );
}

export default Home;
