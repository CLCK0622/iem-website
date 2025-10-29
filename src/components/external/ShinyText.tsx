import "./ShinyText.css";

interface ShinyTextProps {
  text: string;
  color: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  color,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${color} ${
        disabled ? "disabled" : ""
      } ${className} font-bold italic`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
