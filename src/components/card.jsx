// src/components/card.jsx
import React from 'react';

const ProjectCard = ({ titre, image, resume, url, tags = [], annee }) => {
    return (
        <div className="group h-full flex flex-col bg-white border border-blue-900/15 rounded-lg overflow-hidden hover:border-blue-900/40 hover:shadow-sm transition-all duration-200">

            <div className="relative h-44 bg-slate-100 flex-shrink-0">
                {image ? (
                    <img
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        src={image}
                        alt={titre}
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                )}
                {annee && (
                    <span className="absolute top-2 right-2 text-xs text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded">
                        {annee}
                    </span>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {titre || "Nom du projet"}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                    {resume || "Description à renseigner."}
                </p>

                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, i) => (
                            <span key={i} className="text-xs text-blue-900 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <a
                    href={url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-900 hover:underline font-medium"
                >
                    Voir le projet →
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;