import { Screen } from './Screen';

export function Home() {
  const name = "Valeria";
  const role = "Frontend Developer";

  return (
    <Screen title="Inicio">
      <section className="hero">
        <div className="avatar"></div>
        <h2>{name}</h2>
        <p className="hero-role">{role}</p>
      </section>
    </Screen>
  );
}