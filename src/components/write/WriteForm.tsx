import { useState } from 'react';

export default function WriteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
      return;
    }

    if (e.target.id === 'content') {
      setContent(e.target.value);
      return;
    }
  };

  console.log(title, content);

  return (
    <form className="write__form">
      <label htmlFor="title">제목</label>
      <textarea onChange={onChangeInput} id="title" placeholder="제목을 입력해주세요." />

      <label htmlFor="content">내용</label>
      <textarea onChange={onChangeInput} id="content" placeholder="내용을 입력해주세요." />

      <button className="button--primary">발행</button>
    </form>
  );
}
