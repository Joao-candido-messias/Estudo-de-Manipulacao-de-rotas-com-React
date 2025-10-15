import styles from './postcard.module.css'
import { Link } from 'react-router-dom'

export default function PostCard({post}) {
    return(
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    alt='Imagem de capa do post'
                    src={require(`../../assets/video-3.1/posts/${post.id}/capa.png`)}
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <button className={styles.botaoLer}>Ler</button>
            </div>
        </Link>
        
    )
}

