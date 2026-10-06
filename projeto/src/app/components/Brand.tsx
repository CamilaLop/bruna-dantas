import logo from '../../assets/bruna-monograma-cobre.svg';

export function Brand() {
  return (
    <a className="bd-brand" href="#inicio" aria-label="Bruna Dantas — início">
      <img src={logo} alt="" width="50" height="48" />
      <span className="bd-brand-text">
        <span className="bd-brand-name">Bruna Dantas</span>
        <span className="bd-brand-description">Advocacia e consultoria jurídica</span>
      </span>
    </a>
  );
}
