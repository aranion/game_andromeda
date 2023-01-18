export type TopicProps = Partial<{
  id: number;
  title: string;
  author: string;
  content: string;
  commentCount: number;
}>;
export type FetchTopic = (topicId: string) => TopicProps;
export type FetchTopics = () => TopicProps[];

export type CommentProps = {
  id: number;
  content: string;
  author: string;
  parentCommentId?: number | null;
};
export type FetchComments = (topicId: string) => CommentProps[];
