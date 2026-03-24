// src/sections/projet-card/t-one-card.jsx
import ProjectCard from '../../components/card.jsx';
import Comeat_app from '../../assets/imgPresentationProjet/Comeat-app.png';

const MAComeat = () => {
    return (
        <ProjectCard
            titre="Comeat — Application Mobile"
            image={Comeat_app}
            url="https://github.com/Paul-Lefort/Comeat_app_mobile"
            annee="2026"
            tags={["Kotlin"]}
            resume="Application entre particuliers qui permet de s'inscrire a des repas et d'en proposer"
        />
    );
};

export default MAComeat;