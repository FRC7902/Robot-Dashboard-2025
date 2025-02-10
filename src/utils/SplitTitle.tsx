type SplitTitleProps = {
  title: string;
};

const SplitTitle = ({ title }: SplitTitleProps) => {
  const words = title.split(" ");

  if (words.length === 1) return title;

  if (words.length === 2) {
    return (
      <>
        <span>{words[0]}</span>
        <br />
        <span>{words[1]}</span>
      </>
    );
  }

  let firstLine = words[0];
  let secondLine = words.slice(1).join(" ");

  for (let i = 1; i < words.length - 1; i++) {
    const currentFirstLine = words.slice(0, i + 1).join(" ");
    const currentSecondLine = words.slice(i + 1).join(" ");

    if (currentFirstLine.length >= currentSecondLine.length) {
      firstLine = currentFirstLine;
      secondLine = currentSecondLine;
      break;
    }
  }

  return (
    <>
      <span>{firstLine}</span>
      <br />
      <span>{secondLine}</span>
    </>
  );
};

export default SplitTitle;
