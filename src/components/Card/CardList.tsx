type CardListProps = {
  children: React.ReactNode;
};

const CardList = ({ children }: CardListProps) => {
  return <div className="flex flex-row gap-x-4">{children}</div>;
};

export default CardList;
