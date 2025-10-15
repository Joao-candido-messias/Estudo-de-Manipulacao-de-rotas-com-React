import styles from './inicio.module.css'
import posts from '../../assets/video-3.1/json/posts.json'
import PostCard from '../../componentes/PostCard'

export default function Inicio(){
    return(
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))}
            </ul>
    )
}