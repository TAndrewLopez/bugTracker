import { bugPriorityLevel, bugBorderColor } from "../controllers/bugController";

const BugCard = ({ data }) => {
  const { name, priority, version } = data;

  const clicked = () => {
    props.clicked(props.name);
  };

  return (
    <div
      className={`h-48 shadow-3xl rounded text-center m-5 p-8 hover:scale-105 transition ease-in-out duration-300 text-darkGrey flex flex-col justify-between ${bugBorderColor(
        priority
      )}`}
      onClick={() => null}>
      <h2 className="text-xl font-semibold">{name}</h2>
      <h4 className="text-grey">{`Priority: ${bugPriorityLevel(priority)}`}</h4>
      <h5>{`Application Version: ${version}`}</h5>
    </div>
  );
};

export default BugCard;

// min-w-[275px] min-h-[200px]
//"border-t-4 border-t-signalGreen"
