export default function TabButton(props) {
  // document.querySelector('button').addEventListener('click', () => {}); // vanilla js

  return (
    <li>
      <button
        className={props.isSelected ? "active" : null}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}
