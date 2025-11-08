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
  const inLastRow = icons.length % numCols;
  const lastColStart = (numCols - inLastRow) / 2 + 1;
  return (
    <div
      className="grid h-fit gap-15  p-10"
      style={{
        gridTemplateColumns: `repeat(${numCols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))`,
      }}
    >
      {icons.map(({ icon }, index) => {
        console.log(lastColStart);
        return (
          <img
            key={`${icon}-1`}
            className={`company-icon justify-self-center self-center mx-10 object-contain`}
            style={{
              width: `${iconSizePx}px`,
              ...(lastColStart != 0 &&
                index > icons.length - numCols && {
                  gridColumnStart: lastColStart,
                }),
            }}
            src={icon}
          />
        );
      })}
    </div>
  );
};

export default SponsorDisplay;
