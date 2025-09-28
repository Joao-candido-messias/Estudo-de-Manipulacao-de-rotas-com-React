import styles from './sobremim.module.css'
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png"

export default function SobreMim(){
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o João!</h3>
            <img className={styles.fotoSobreMim} src='https://github.com/Joao-candido-messias.png' alt='Minha foto do GitHub'/>
            
            <p className={styles.paragrafo}>
                Sou Técnico em Informática pelo Instituto Federal Farroupilha – Campus Júlio de Castilhos, com formação voltada ao desenvolvimento de sistemas. Possuo experiência prática no desenvolvimento de aplicações e páginas web utilizando HTML, CSS, JavaScript e React.
            </p>
            <p className={styles.paragrafo}>
                Atualmente, curso Sistemas de Informação na Universidade Franciscana (UFN), buscando consolidar minha base teórica e ampliar minhas competências técnicas, especialmente no desenvolvimento de software. Meu objetivo é atuar de forma completa no ciclo de desenvolvimento de softwared, unindo conhecimento técnico, boas práticas de codificação e foco na experiência do usuário, aplicando na prática o que aprendo e evoluindo constantemente como desenvolvedor.
            </p>

            <p className={styles.paragrafo}>
                Atuo profissionalmente no Grupo Moura – Matriz Santa Maria, desenvolvendo aplicações internas no AppSheet e pequenas rotinas em Python que aumentam a efetividade do time de vendas, permitindo consultas mais intuitivas e rápidas sobre clientes, produtos e ações.
            </p>

        </PostModelo>
    )
}