import Banner from "../../componentes/Banner";
import styles from './inicio.module.css'
import posts from '../../assets/video-3.1/json/posts.json'
import Post from '../../componentes/Post'

export default function Inicio(){
    return(
        <main>
            <Banner></Banner>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
        </main> 
    )
}