import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import { server } from '../../../config'
const Article = ({article}) => {
    const router = useRouter()
    
    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/' id="back"><a className="btn-light">Go Back</a></Link>
        </>
    )
}


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false,
    }
}

// for remote api fetch  =>>> with placholder api

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false,
//     }
// }


export default Article
