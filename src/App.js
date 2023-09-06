import { BlogCard } from "./components/BlogCard";
import article from "./assets/article.json";
function App() {
  console.log(article);
  return (
    <>
      <BlogCard message="hello" {...article} />
    </>
  );
}

export default App;
