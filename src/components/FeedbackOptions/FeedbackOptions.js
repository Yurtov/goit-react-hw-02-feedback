import { Button, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onClickBad,
  onClickNeutral,
  onClickGood,
}) => {
  return (
    <ButtonsList>
      <Button type="button" onClick={onClickBad}>
        Bad
      </Button>
      <Button type="button" onClick={onClickNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onClickGood}>
        Good
      </Button>
    </ButtonsList>
  );
};
