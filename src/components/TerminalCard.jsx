const details = [
  ["DURATION", "Jan-May 2027"],
  ["PARTNERSHIP", "Company + Kristiania"],
  ["COST", "Free"],
  ["MISSION", "Build something useful together."],
];

export default function TerminalCard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-terminal font-mono text-xs shadow-[0_28px_65px_-22px_rgba(24,39,54,0.4)] sm:text-sm">
      <div className="flex items-center gap-2 border-b border-white/8 px-6 py-5">
        <div aria-hidden="true" className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ce817a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#c4ac76]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#86a995]" />
        </div>
        <span className="ml-auto text-[10px] text-slate-400">
          partner-search.sh
        </span>
      </div>
      <div className="px-5 py-8 sm:px-8 sm:py-10">
        <p className="text-[#9cb9d0]">
          team@bachelor-project <span className="text-slate-400">~</span>
        </p>
        <p className="mt-4 text-slate-100">
          <span className="mr-3 text-[#a7c8b4]">&gt;</span>./find-company
        </p>
        <dl className="mt-9 space-y-4">
          {details.map(([key, value]) => (
            <div
              key={key}
              className="grid grid-cols-[6rem_1fr] gap-2 sm:grid-cols-[7rem_1fr]"
            >
              <dt className="text-slate-400">{key}</dt>
              <dd
                className={
                  key === "PARTNERSHIP"
                    ? "text-[#a7c8b4]"
                    : key === "MISSION"
                      ? "text-[#d5c29b]"
                      : "text-slate-300"
                }
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <p aria-hidden="true" className="mt-9 text-slate-500">
          &gt;{" "}
          <span className="ml-2 inline-block h-4 w-2 translate-y-0.5 bg-slate-400" />
        </p>
      </div>
    </div>
  );
}
