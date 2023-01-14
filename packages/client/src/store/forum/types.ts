export type ForumProps = {
  id: string;
  title: string;
  topicsCount?: string;
  commentsCount?: string;
};

export type FetchForums = () => ForumProps[];
export type FetchForumTitle = (forumId?: string) => string;

export type TopicProps = Partial<{
  id: string;
  title: string;
  author: string;
  content: string;
  commentCount: string;
}>;
export type FetchTopics = (forumId?: string) => TopicProps[];

export type CommentProps = {
  id: string;
  content: string;
  author: string;
};
export type FetchComments = (topicId?: string) => CommentProps[];
