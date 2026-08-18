

interface AccountSummaryProps {
  totalBalance?: number;
  incomeTotal?: number;
  expenseTotal?: number;
}

// Safe formatting utility helper
const formatCurrency = (amount: number | undefined | null): string => {
  const safeAmount = amount ?? 0;
  return safeAmount.toLocaleString('us-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const AccountSummary = ({
  totalBalance = 4250.00,
  incomeTotal = 5100.00,
  expenseTotal = 2850.00,
}: AccountSummaryProps) => {


  const safeBalance = totalBalance < 0 ? 0 : totalBalance;


  return (
    <section className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 mb-6">
      <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-2">
        Account Summary
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div>
          <span className="text-4xl font-extrabold text-white tracking-tight font-mono">
            ${formatCurrency(safeBalance)}
            {/* {totalBalance} */}
          </span>
          <p className="text-xs text-slate-500 mt-1">Total Balance</p>
        </div>

        <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <span className="text-xs text-slate-400 uppercase font-medium">Income (this month)</span>
          <span className="text-xl font-bold text-emerald-400 font-mono mt-1">
            +${formatCurrency(incomeTotal)}
          </span>
        </div>

        <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <span className="text-xs text-slate-400 uppercase font-medium">Expenses (this month)</span>
          <span className="text-xl font-bold text-rose-400 font-mono mt-1">
            -${formatCurrency(expenseTotal)}
          </span>
        </div>
      </div>
    </section>
  );
};