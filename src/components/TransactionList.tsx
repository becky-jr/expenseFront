

import type { Transaction } from '../types/type';

interface TransactionListProps {
    transactions: Transaction[];
    deleteTransaction: (id: number) => void;
}



export const TransactionList = ({ transactions, deleteTransaction }: TransactionListProps) => {


    const reversedTransactions = [...transactions].reverse()

    return (
        <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Recent Transactions
                </p>
                <span className="text-xs text-slate-500 cursor-pointer hover:text-slate-400">
                    Filter
                </span>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-75 pr-1">
                {reversedTransactions.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800/50 hover:border-slate-700/50 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-lg bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-400 text-xs">
                                {item.type === 'income' ? '↓' : '↑'}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-200">{item.title}</p>
                                <p className="text-xs text-slate-500">{item.category}</p>
                            </div>
                        </div>

                        <div className="text-right flex gap-3 items-center">
                            <div>
                                <p
                                    className={`text-sm font-semibold font-mono ${item.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                                        }`}
                                >
                                    {item.type === 'income' ? '+' : ''}${Math.abs(item.amount).toFixed(2)}
                                </p>
                                <p className="text-xs text-slate-500">{item.date}</p>
                            </div>
                            <div className="delete cursor-pointer" onClick={() => deleteTransaction(item.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};