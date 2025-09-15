import styles from './banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png';
export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo!</h1>
                <p className={styles.paragrafo}>
                    Boas-vindas a mais um objeto de estudo! Eu sou João Messias, estudante de Sistemas de Informação. Aqui compartilho os exercícios desenvolvidos durante o estudo de React Router.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}   
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src='https://github.com/Joao-candido-messias.png'
                    alt='Minha foto de perfil do GitHub'
                />
            </div>
        </div>
    )
}