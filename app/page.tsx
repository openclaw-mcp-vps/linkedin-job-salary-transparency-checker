export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Compliance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Check If Job Posts Comply<br />
          <span className="text-[#58a6ff]">With Salary Transparency Laws</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Paste a LinkedIn job URL and instantly know if it meets NY, CA, CO, WA, and other state salary disclosure requirements — before you get fined.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Start Checking — $8/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Paste a Job URL", desc: "Submit any LinkedIn job posting link." },
          { step: "2", title: "Auto-Analysis", desc: "We scan for salary ranges against state law rules." },
          { step: "3", title: "Compliance Report", desc: "Get a clear pass/fail with violation details." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
            <div className="text-white font-semibold mb-1">{title}</div>
            <div className="text-[#8b949e] text-sm">{desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited job URL checks",
              "All 50 states + DC rule coverage",
              "Detailed violation explanations",
              "Export compliance reports (PDF)",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which states are covered?",
              a: "We cover all states with active salary transparency laws including New York, California, Colorado, Washington, Illinois, and more — updated as new laws pass."
            },
            {
              q: "How does the compliance check work?",
              a: "We fetch the job posting content and run it through a rule-based engine that checks for required salary range disclosures, proper formatting, and completeness per each state's statute."
            },
            {
              q: "Can I check postings in bulk?",
              a: "Yes. Pro subscribers can submit multiple URLs at once and download a consolidated compliance report for audits or legal review."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Salary Transparency Checker. Not legal advice.
      </footer>
    </main>
  );
}
