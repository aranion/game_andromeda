import { useActions } from './useActions';
import { useTypeSelector } from './useTypeSelector';
import { useLazyFetchUserDataQuery, userSelectors } from 'src/store/user';
import {
  useLazyFetchAllForumQuery,
  useLazyFetchTopicCommentsQuery,
  useLazyFetchTopicCommentsCountQuery,
  useLazyAddTopicQuery,
  useLazyAddCommentQuery,
} from 'src/store/forum/api';
import type {
  RequestAddNewTopic,
  RequestAddNewComment,
  Topic,
} from 'src/store/forum/type';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { SerializedError } from '@reduxjs/toolkit';

export const useForum = () => {
  const { userData } = useTypeSelector(userSelectors.all);
  const { id, display_name, login } = userData;
  const nickname = display_name || login;

  const { setTopics, setTopicComments, setTopicCommentsCount } = useActions();

  const [fetchAllForum, { isLoading: isLoadingForum }] =
    useLazyFetchAllForumQuery();
  const [fetchTopicComments, { isLoading: isLoadingTopicComments }] =
    useLazyFetchTopicCommentsQuery();
  const [fetchTopicCommentsCount, { isLoading: isLoadingTopicCommentsCount }] =
    useLazyFetchTopicCommentsCountQuery();
  const [addTopic, { isLoading: isLoadingAddTopic }] = useLazyAddTopicQuery();
  const [addComment, { isLoading: isLoadingAddComment }] =
    useLazyAddCommentQuery();
  const [fetchUser] = useLazyFetchUserDataQuery();

  const error = (error?: FetchBaseQueryError | SerializedError) => {
    if (error) {
      if ('message' in error) {
        throw new Error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  const getAllTopics = () => {
    fetchAllForum(null)
      .then(res => {
        if (res.data) {
          setTopics(res.data);
        } else {
          error(res.error);
        }
      })
      .catch(console.error);
  };

  const getTopicComments = (topicId: number) => {
    fetchTopicComments(topicId)
      .then(res => {
        if (res.data) {
          setTopicComments({
            topicId,
            comments: res.data,
          });
        } else {
          error(res.error);
        }
      })
      .catch(console.error);
  };

  const getTopicCommentsCount = (topics: Topic[]) => {
    topics.forEach(topic => {
      const topicId = topic.id;

      if (topicId) {
        fetchTopicCommentsCount(topicId)
          .then(res => {
            if (res.data) {
              setTopicCommentsCount({
                topicId,
                commentCount: res.data,
              });
            } else {
              error(res.error);
            }
          })
          .catch(console.error);
      }
    });
  };

  const addNewComment = (params: RequestAddNewComment) => {
    if (id) {
      const newParams = {
        ...params,
        authorId: id,
        authorName: nickname,
      };
      addComment(newParams)
        .then(res => {
          if (res.data) {
            const topics = res.data;
            setTopicComments(topics);
          } else {
            error(res.error);
          }
        })
        .catch(console.error);
    }
  };

  const addNewTopic = (params: RequestAddNewTopic) => {
    if (id) {
      const newParams = {
        ...params,
        authorId: id,
        authorName: nickname,
      };
      addTopic(newParams)
        .then(res => {
          if (res.data) {
            const topics = res.data;
            setTopics(topics);
          } else {
            error(res.error);
          }
        })
        .catch(console.error);
    }
  };

  return {
    getAllTopics,
    getTopicComments,
    addNewTopic,
    addNewComment,
    getTopicCommentsCount,
    isLoadingTopicComments,
    isLoadingTopicCommentsCount,
    isLoadingForum,
    isLoadingAddTopic,
    isLoadingAddComment,
  };
};
