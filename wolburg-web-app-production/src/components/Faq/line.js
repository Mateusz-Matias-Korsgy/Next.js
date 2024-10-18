const ColoredLine = ({ color, otherStyle }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
    className={otherStyle}
  />
);

export default ColoredLine;
