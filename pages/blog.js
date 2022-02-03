import React from 'react'
import fetcher from '../lib/fetcher'
import { ALL_POSTS } from '../lib/wordpress/api'
import Link from 'next/link'

const Blog = ({ allPosts }) => { 
    const posts = allPosts;
    //console.log(posts);
    return (
        <div>
            <h1>Blog</h1>
            {posts.map(post => {
                return(
                    <div key={post.id}>
                        <Link href={`/blog/${post.slug}`}>
                            <a>{post.title}</a>
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}

export default Blog

export async function getStaticProps() {
    const response  = await fetcher(ALL_POSTS);

    const allPosts = response.data.posts.nodes;

    return {
        props: {allPosts},
        revalidate: 10, // In seconds
    }
}