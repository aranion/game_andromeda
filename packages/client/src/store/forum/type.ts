export type InitialState = {
  topics: Topic[];
  activeTopicComments: {
    topicId: number | undefined;
    comments: Comment[];
  };
};

export type Topic = Partial<{
  id: number;
  title: string;
  authorId: number;
  authorName: string;
  content: string;
  commentCount: number;
}>;

export type FetchTopic = (topicId: string) => Topic;
export type FetchTopics = () => Topic[];

export type Comment = {
  id: number;
  content: string;
  authorId: number;
  authorName: string;
  parentCommentId?: number | null;
  parentCommentPreview?: string | null;
  parentCommentAuthor?: string | null;
};

export type Comments = {
  topicId: number;
  comments: Comment[];
};

export type CommentsCount = {
  topicId: number;
  commentCount: number;
};

export type FetchComments = (topicId: string) => Comment[];

export type ResponseForum = Topic[];
export type ResponseComments = Comment[];

export type RequestAddNewTopic = {
  title: string;
  content: string;
};
export type RequestAddNewComment = {
  content: string;
  parentCommentId?: number | null;
  parentCommentPreview?: string | null;
  parentCommentAuthor?: string | null;
};
