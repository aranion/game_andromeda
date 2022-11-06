export type ForumProps = {
  forumId: string;
  title: string;
  topicsCount?: string;
  commentsCount?: string;
  description?: string;
};

export type FetchForums = () => ForumProps[];

export type TopicProps = {
  topicId?: string;
  title?: string;
  author?: string;
  description?: string;
  content?: string;
  commentCount?: string;
};

export type FetchTopics = (forumId?: string) => TopicProps[];

export type CommentProps = {
  id: string;
  content: string;
  author: string;
};

export type FetchComments = (topicId?: string) => CommentProps[];
