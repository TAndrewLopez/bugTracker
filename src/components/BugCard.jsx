import { bugPriorityLevel, bugBorderColor } from "../controllers/bugController";

const BugCard = ({ data }) => {
  const { name, priority, version } = data;

  const clicked = (e) => {
    console.log("clicked on bug");
  };

  return (
    <div
      className={`h-48 shadow-3xl rounded text-center m-5 p-8 hover:scale-105 transition ease-in-out duration-300 text-darkGrey flex flex-col justify-between cursor-pointer ${bugBorderColor(
        priority
      )}`}
      onClick={clicked}>
      <h2 className="text-xl font-semibold">{name}</h2>
      <h4 className="text-grey">{`Priority: ${bugPriorityLevel(priority)}`}</h4>
      <h5>{`Application Version: ${version}`}</h5>
    </div>
  );
};

export default BugCard;
