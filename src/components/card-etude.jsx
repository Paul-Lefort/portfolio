// src/components/card-etude.jsx
import React from 'react';

const CardEtude = ({
                       niveau,
                       etablissement,
                       ville,
                       dateDebut,
                       dateFin,
                       description,
                       axes = [],
                       enCours = false,
                   }) => {
    return (
        <div className="bg-[#fafaf9] border border-slate-200 rounded-xl p-6 hover:border-blue-900/40 hover:shadow-md transition-all duration-300">

            <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                    <h3 className="font-semibold text-slate-900 text-base leading-snug mb-1">
                        {niveau}
                    </h3>
                    <p className="text-sm text-slate-400">
                        {etablissement}{ville ? ` · ${ville}` : ""}
                    </p>
                </div>

                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="font-mono text-xs text-slate-400">
                        {dateDebut} – {dateFin || "..."}
                    </span>
                    {enCours && (
                        <span className="flex items-center gap-1.5 text-xs font-medium text-blue-900 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-900 animate-pulse" />
                            En cours
                        </span>
                    )}
                </div>
            </div>

            {(description || axes.length > 0) && (
                <div className="border-t border-slate-100 mb-4" />
            )}

            {description && (
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {description}
                </p>
            )}

            {/* Axes */}
            {axes.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {axes.map((axe, i) => (
                        <span
                            key={i}
                            className="text-xs text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full"
                        >
                            {axe}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardEtude;