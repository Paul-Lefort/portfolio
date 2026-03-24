// src/sections/projet-card/t-one-card.jsx
import ProjectCard from '../../components/card.jsx';
import mc_plugin from '../../assets/imgPresentationProjet/plugin_mc.png';

const ArchiWarp = () => {
    return (
        <ProjectCard
            titre="ArchiWarp — Plugin Minecraft"
            image={mc_plugin}
            url="https://github.com/Paul-Lefort/ArchiWarp"
            annee="2026"
            tags={["Bukkit", "Meave"]}
            resume="Plugin minecraft permettent de créer des warps pour les joueurs et le staff.
            Le menu des warps s'adapte automatiquement aux nombres de warp setup"
        />
    );
};

export default ArchiWarp;