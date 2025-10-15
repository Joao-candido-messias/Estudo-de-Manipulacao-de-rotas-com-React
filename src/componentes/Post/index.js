import { useParams } from "react-router-dom"
import posts from "../../assets/video-3.1/json/posts.json"
import PostModelo from "../PostModelo"
import ReactMarkdonw from "react-markdown"
import './post.css'
import NaoEncontrada from "../../paginas/naoEncontrada"


export default function Post(){
    const parametros = useParams()
    
    const post = posts.find((post) =>{
        return post.id === Number(parametros.id)
    })

    if(!post){
        return <h1>Post não encontrado</h1>
    }

    return(
        <PostModelo fotoCapa={require(`../../assets/video-3.1/posts/${post.id}/capa.png`)} titulo={post.titulo}>
            <div className="post-markdown-container">
                <ReactMarkdonw>
                    {post.texto}
                </ReactMarkdonw>
             </div>
        </PostModelo>
    )
}