import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                    $
                </div>
                <h1 className="text-lg font-semibold tracking-wide text-slate-100">
                    FINANCE DASHBOARD
                </h1>
            </div>

            <div className="flex items-center gap-3">
                <select
                    className="bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-slate-700"
                    defaultValue="OCT 2023"
                >
                    <option value="OCT 2023">OCTOBER 2023</option>
                    <option value="SEP 2023">SEPTEMBER 2023</option>
                </select>
                <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-400 font-medium">
                    USER
                </div>
            </div>
        </header>
    );
};