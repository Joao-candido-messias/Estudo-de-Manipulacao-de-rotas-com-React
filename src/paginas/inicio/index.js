import styles from './inicio.module.css'
import posts from '../../assets/video-3.1/json/posts.json'
import Post from '../../componentes/Post'

export default function Inicio(){
    return(
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
    )
}