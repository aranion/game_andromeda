import { useEffect, useState, useRef } from 'react';
import type { ForumProps, FetchForums } from 'src/store/forum/types';
import { ButtonBack, Star, ForumItem, NewForumButton } from 'src/components';
import './styles.css';
import { FullscreenButton } from 'src/components/FullscreenButton';

const configStar = [
  { top: '7%', left: '3%' },
  { top: '2%', left: '15%' },
  { top: '3%', left: '80%' },
  { top: '13%', left: '89%' },
  { top: '87%', left: '3%' },
  { top: '76%', left: '89%' },
];

export default function ForumPage() {
  const [forums, setForums] = useState<ForumProps[]>([]);
  const fullscreenElement = useRef(null);

  const fetchForums: FetchForums = () => {
    const forums: ForumProps[] = [];
    forums.push(
      {
        forumId: '111',
        title: 'Game Devlog - News',
        topicsCount: '1',
        commentsCount: '12',
      },
      {
        forumId: '222',
        title: 'Feedback Forum',
        topicsCount: '126',
        commentsCount: '12',
      },
      {
        forumId: '333',
        title: 'Cavern',
        topicsCount: '12',
        commentsCount: '12',
      },
      {
        forumId: '444',
        title: 'Game Devlog - test forum',
        topicsCount: '12',
        commentsCount: '12',
      }
    );

    return forums;
  };

  useEffect(() => {
    setForums(fetchForums());
  }, []);

  return (
    <div className='forum' ref={fullscreenElement}>
      {configStar.map((item, idx) => (
        <Star key={idx} top={item.top} left={item.left} />
      ))}

      <ButtonBack />
      <FullscreenButton elemRef={fullscreenElement} />

      <h1 className='main-title'>Community</h1>
      <table className='main-table'>
        <thead>
          <tr>
            <th className='main-table__th'>Forums</th>
            <th className='main-table__th'>Topics</th>
            <th className='main-table__th'>Comments</th>
          </tr>
        </thead>
        <tbody>
          {forums.map(forum => {
            const { forumId, title, topicsCount, commentsCount } = forum;
            return (
              <ForumItem
                key={forumId}
                forumId={forumId}
                title={title}
                topicsCount={topicsCount}
                commentsCount={commentsCount}
              />
            );
          })}
        </tbody>
      </table>
      <NewForumButton fetchForums={fetchForums} />
    </div>
  );
}
