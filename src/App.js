import { BlogCard } from "./components/BlogCard";
import article from "./assets/article.json";
function App() {
  console.log(article);
  return (
    <>
      {article.map((item) => (
        <BlogCard message="hello" {...item} />
      ))}
    </>
  );
}

export default App;
