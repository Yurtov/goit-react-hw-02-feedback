import { Button, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onClickBad,
  onClickNeutral,
  onClickGood,
  onClickType,
  options,
}) => {
  return (
    <ButtonsList>
      {options.map(option => (
        <Button type="button" key={option} onClick={()=> onClickType(option)}> 
          {option}
        </Button>
      ))}
    </ButtonsList>
  );
};
