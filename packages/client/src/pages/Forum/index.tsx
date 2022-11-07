import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForumProps, FetchForums } from '../../store/forum/types';
import { ForumItem } from '../../components/Forum/ForumItem';
import { NewForumButton } from '../../components/Forum/NewForumButton';
import { Button, Table, Star } from '../../components';

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
  const navigate = useNavigate();

  const fetchForums: FetchForums = () => {
    const forums = [];
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
    <div className='forum'>
      {configStar.map((item, idx) => (
        <Star key={idx} top={item.top} left={item.left} />
      ))}

      <Button className='button__back' onClick={() => navigate(-1)}>
        🠔
      </Button>
      <h1 className='main-title'>Community</h1>
      <Table>
        <thead>
          <tr>
            <th>Forums</th>
            <th>Topics</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {forums.map((forum: ForumProps) => (
            <ForumItem
              key={forum.forumId}
              forumId={forum.forumId}
              title={forum.title}
              topicsCount={forum.topicsCount}
              commentsCount={forum.commentsCount}
            />
          ))}
        </tbody>
      </Table>
      <NewForumButton fetchForums={fetchForums} />
    </div>
  );
}
