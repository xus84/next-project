import PostCard from "@/app/components/PostCard"

async function loadPosts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}

async function PostPages(){
    const posts = await loadPosts()
    console.log(posts)

    return (
        <div>
           {posts.map((post) =>(
            <PostCard post={post} key={post.id}/>
           ))}
        </div>
    )
}

export default PostPages