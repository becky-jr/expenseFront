import React from 'react';
import type { TransactionCategory } from '../types/type';

interface QuickAddFormProps {
    onSubmit: (e: React.FormEvent) => void;
    inp1: string;
    setInp1: React.Dispatch<React.SetStateAction<string>>;
    inp2: string;
    setInp2: React.Dispatch<React.SetStateAction<string>>;
    selectInp: TransactionCategory | '';
    setSelectInp: React.Dispatch<React.SetStateAction<TransactionCategory | ''>>;
}

const formatNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');

    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const QuickAddForm = ({ onSubmit, inp1, setInp1, inp2, setInp2, selectInp, setSelectInp }: QuickAddFormProps) => {




    return (
        <section className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 mb-6">
            <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
                Quick Add Transaction
            </p>

            <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <input
                    type="text"
                    placeholder="Transaction Title (e.g., Grocery Trip)"
                    className="sm:col-span-5 bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 placeholder:text-slate-600"
                    value={inp1}
                    onChange={(e) => setInp1(e.target.value)}
                />

                <input
                    type="text"
                    step="0.01"
                    placeholder="Amount ($)"
                    className="sm:col-span-3 bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-emerald-500/50 placeholder:text-slate-600 font-mono"
                    value={inp2}
                    onChange={(e) => setInp2(formatNumber(e.target.value))}
                />

                <select
                    className="sm:col-span-2 bg-slate-950 border border-slate-800 text-slate-300 text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-emerald-500/50"

                    value={selectInp}
                    onChange={(e) => setSelectInp(e.target.value as TransactionCategory)}

                >
                    <option value="" disabled>Category</option>
                    <option value="food">Food</option>
                    <option value="utilities">Utilities</option>
                    <option value="income">Income</option>
                    <option value="transport">Transport</option>
                </select>

                <button
                    type="submit"
                    className="sm:col-span-2 bg-slate-700 hover:bg-slate-600 text-white font-medium text-sm rounded-xl py-2.5 transition-colors duration-150 active:scale-[0.98]"

                >
                    + Add
                </button>
            </form>
        </section>
    );
};