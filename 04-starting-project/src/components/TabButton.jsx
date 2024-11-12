export default function TabButton({isSelected, children, ...props}) {
  // document.querySelector('button').addEventListener('click', () => {}); // vanilla js

  return (
    <li>
      <button
        className={isSelected ? "active" : null}
        {...props}
      >
        {children}
      </button>
    </li>
  );
}
