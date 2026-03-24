// src/sections/projet-card/t-one-card.jsx
import ProjectCard from '../../components/card.jsx';
import Comeat_ws from '../../assets/imgPresentationProjet/Comeat-ws.png';


const ComeEat_WS = () => {
    return (
        <ProjectCard
            titre="Comeat — web service"
            image={Comeat_ws}
            url="https://github.com/Paul-Lefort/Comeat_web_service"
            annee="2026"
            tags={["FrameWork : Laravel", "PosgreSQL", "Docker"]}
            resume="Service Web créer afin d'interagir avec l'application mobile Comeat"
        />
    );
};

export default ComeEat_WS;
