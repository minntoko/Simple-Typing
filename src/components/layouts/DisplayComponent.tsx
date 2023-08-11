interface Props {
  isFinish: boolean;
  inCorrect: boolean;
  type: string[];
  count: number;
}

const DisplayComponent = ({ inCorrect, type, count }: Props) => {
  return (
    <div>
      {type.map((character, index) => {
        return index < count ? (
          <span className="text-green-500 text-xl" key={index}>
            {character}
          </span>
        ) : (
          <span className={`${inCorrect && index == count && "text-red-500 underline"} text-xl`} key={index}>
            {character}
          </span>
        );
      })}
    </div>
  );
};

export default DisplayComponent;