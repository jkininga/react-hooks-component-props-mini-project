import blogData from "../data/blog"
import Article from "./Article"



export default function ArticleList({posts}){
       
    const articles = posts.map((post, index) => (
        <li key = {index}>

         <Article
         title={post.title}
         date={post.date}
         preview={post.preview}/>

        </li>
       
      ))

return (
<main>
     
     {articles}

</main>

)


}