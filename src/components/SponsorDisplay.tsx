interface SponsorDisplayProps {
  icons: {
    icon: string;
  }[];
  numCols: number;
  numRows: number;
  iconSizePx: number;
}

const SponsorDisplay = ({
  icons,
  numCols,
  numRows,
  iconSizePx,
}: SponsorDisplayProps) => {
  return (
    <div
      className="grid h-fit gap-15 rounded-2xl bg-neutral-900 p-10"
      style={{
        gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))`,
      }}
    >
      {icons.map(({ icon }) => (
        <img
          key={`${icon}-1`}
          className={`company-icon justify-self-center self-center mx-10 object-contain`}
          style={{ width: `${iconSizePx}px` }}
          src={icon}
        />
      ))}
    </div>
  );
};

export default SponsorDisplay;
