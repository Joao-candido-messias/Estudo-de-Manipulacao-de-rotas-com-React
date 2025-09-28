import styles from './post.module.css'

export default function Post({post}) {
    return(
        <div className={styles.post}>
            <img
                className={styles.capa}
                alt='Imagem de capa do post'
                src={require(`../../assets/video-3.1/posts/${post.id}/capa.png`)}
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
}

