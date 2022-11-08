import './style.css';

export function Loader() {
  return (
    <div className='loader'>
      <div className='loader__inner loader__inner_one'></div>
      <div className='loader__inner loader__inner_two'></div>
      <div className='loader__inner loader__inner_three'></div>
    </div>
  );
}
