export default function TabButton(props) {
  // document.querySelector('button').addEventListener('click', () => {}); // vanilla js

  return (
    <li>
      <button onClick={props.onSelect}>
        {props.children}
      </button>
    </li>
  );
}
