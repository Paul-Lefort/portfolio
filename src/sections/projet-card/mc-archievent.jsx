// src/sections/projet-card/t-one-card.jsx
import ProjectCard from '../../components/card.jsx';
import mc_plugin from '../../assets/imgPresentationProjet/plugin_mc.png';

const ArchiEvent = () => {
    return (
        <ProjectCard
            titre="ArchiEvent — Plugin Minecraft"
            image={mc_plugin}
            url="https://github.com/Paul-Lefort/Archipelle"
            annee="2026"
            tags={["Bukkit", "Meave"]}
            resume="Plugin minecraft regroupent plusieurs évènements, il permet d'automatiser les jeux et les récompenses"
        />
    );
};

export default ArchiEvent;