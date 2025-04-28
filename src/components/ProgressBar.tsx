interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }:ProgressBarProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <div className="progress-text">
        Вопрос {current} из {total}
      </div>
    </div>
  );
};

export default ProgressBar;