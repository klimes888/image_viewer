import * as cs from "./component.css";
import { useImageContent } from "../context/image.context";

const SplitViewComponent = () => {
  const { splitWindow, setSplitWindow } = useImageContent();

  const options = [
    { id: 0, title: "기본 보기" },
    { id: 1, title: "분할 보기 (왼쪽에서 오른쪽)" },
    { id: 2, title: "분할 보기 (오른쪽에서 왼쪽)" },
  ];

  return (
    <div className={cs.layout}>
      {options.map((option) => (
        <label key={option.id} className={cs.radioLabel}>
          <input
            type="radio"
            name="size"
            value={option.id}
            checked={splitWindow === option.id}
            onChange={() => setSplitWindow(option.id)}
            className={cs.radioInput}
          />
          {option.title}
        </label>
      ))}
    </div>
  );
};

export default SplitViewComponent;
