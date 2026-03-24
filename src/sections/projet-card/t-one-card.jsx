// src/sections/projet-card/t-one-card.jsx
import ProjectCard from '../../components/card.jsx';
import TOneImg from '../../assets/imgPresentationProjet/TOne.png';

const TOneCard = () => {
    return (
        <ProjectCard
            titre="T-One — Banque en ligne"
            image={TOneImg}
            url="https://github.com/Paul-Lefort/T-One"
            annee="2026"
            tags={["FrameWork : Laravel", "PostgreSQL", "Docker"]}
            resume="Application bancaire réalisée en BTS SIO. Gestion de comptes, virements et historique de transactions."
        />
    );
};

export default TOneCard;