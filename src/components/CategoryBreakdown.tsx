

interface CategoryItem {
  label: string;
  percentage: number;
  color: string;
}

interface CategoryBreakdownProps {
  categories: CategoryItem[];
}



export const CategoryBreakdown = ({ categories }: CategoryBreakdownProps) => {
  return (
    <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 flex flex-col justify-between h-full">
      <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
        Breakdown by Category
      </p>

      {/* Visual Placeholder for Donut Chart */}
      <div className="relative flex items-center justify-center my-4">
        <div
          className="h-36 w-36 rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(
      ${categories[0]?.color} 0% ${categories[0]?.percentage}%,
      ${categories[1]?.color} ${categories[0]?.percentage}% ${categories[0]?.percentage + categories[1]?.percentage}%,
      ${categories[2]?.color} ${categories[0]?.percentage + categories[1]?.percentage}% 100%
    )`,
          }}
        >
          <div className="h-28 w-28 rounded-full bg-slate-900 flex items-center justify-center">
            <span className="text-xs font-medium text-slate-400">
              Monthly
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span className="text-slate-300">{cat.label}</span>
            </div>
            <span className="font-mono text-slate-400">{cat.percentage.toFixed()}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};