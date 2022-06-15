import React from "react"
import Article from "./Article"
import blogData from "../data/blog"

function ArticleList() {
    
    const postList = blogData.posts.map(posts => {
        return <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} />
       })
    return(
        <main>
           {postList} 
        </main>
    )
}
export default ArticleList