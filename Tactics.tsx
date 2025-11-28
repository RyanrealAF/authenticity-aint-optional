export default function Tactics() {
  const tactics = [
    "Civilian Weaponization",
    "Reputation Assassination",
    "Legitimacy by Proxy",
    "Gaslighting & Fabricated Reality",
    "Weaponized Authenticity"
  ];

  return (
    <section className="py-16 px-6 bg-void text-stone">
      <h2 className="text-3xl text-bronze font-bold mb-6">Operational Tactics</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {tactics.map((t, i) => (
          <div key={i} className="border border-bronze p-4 rounded">
            <h3 className="text-xl text-oak font-semibold">{t}</h3>
            <p className="mt-2 text-sm">
              Tactical doctrine excerpted from manuals: engineered manipulation, psychological attrition, and counter-offense.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
