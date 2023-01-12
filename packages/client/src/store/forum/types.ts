export type ForumProps = {
  forumId: string;
  forumTitle: string;
  topicsCount?: string;
  commentsCount?: string;
};

export type FetchForums = () => ForumProps[];
export type FetchForumTitle = (forumId?: string) => string;

export type TopicProps = Partial<{
  topicId: string;
  topicTitle: string;
  topicAuthor: string;
  topicContent: string;
  commentCount: string;
}>;
export type FetchTopics = (forumId?: string) => TopicProps[];

export type CommentProps = {
  commentId: string;
  commentContent: string;
  commentAuthor: string;
};
export type FetchComments = (topicId?: string) => CommentProps[];
