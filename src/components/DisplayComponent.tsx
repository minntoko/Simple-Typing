interface Props {
  isFinish: boolean;
  inCorrect: boolean;
  type: string[];
  count: number;
}

const DisplayComponent = ({ isFinish, inCorrect, type, count }: Props) => {
  return (
    <div>
      {!isFinish ? (
        type.map((character, index) => {
          return index < count ? (
            <span className="text-green-500 text-xl" key={index}>
              {character}
            </span>
          ) : (
            <span className={`${inCorrect && index == count && "text-red-500 underline"} text-xl`} key={index}>
              {character}
            </span>
          );
        })
      ) : (
        <span className="text-3xl font-bold">終了</span>
      )}
    </div>
  );
};

export default DisplayComponent;
