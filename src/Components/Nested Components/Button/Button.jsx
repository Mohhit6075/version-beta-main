import "./Button.css";
const Button = () => {
  return (
    <div className="animate-bounce mt-4">
      <button className="button">
        <span className="button_lg">
          <span className="button_sl"></span>
          <span className="button_text">Register Here</span>
        </span>
      </button>
    </div>
  );
};

export default Button;
