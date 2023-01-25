import { Button, ButtonStar } from 'src/components';
import { useNavigate, useParams } from 'react-router-dom';
import { RouterList } from 'src/router/routerList';

type Props = {
  commentId?: number;
  handleOpen: () => void;
};

export function NewCommentButton(props: Props) {
  const { handleOpen, commentId } = props;

  const { topicId } = useParams<{ topicId: string }>();

  const navigate = useNavigate();
  const handleNavigateAnswer = () => {
    navigate(`${RouterList.FORUM}/${topicId}/${commentId}`);
    handleOpen();
  };
  const handleNavigateNewComment = () => {
    if (!commentId) {
      navigate(`${RouterList.FORUM}/${topicId}`);
    }
    handleOpen();
  };

  return (
    <>
      {commentId ? (
        <Button
          onClick={handleNavigateAnswer}
          sizeButton='small'
          positionButton='right'>
          Reply
        </Button>
      ) : (
        <ButtonStar onClick={handleNavigateNewComment}>New Comment</ButtonStar>
      )}
    </>
  );
}
