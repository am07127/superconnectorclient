// Dropdown.js

const Dropdown = ({ options, onChange, name }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Select {name}
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        <li>
          {options.map((option) => (
            <a className="dropdown-item" onClick={() => onChange(option)}>
              {option}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
