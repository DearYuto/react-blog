export const MESSAGES = {
  REQUIRED_EMAIL: '이메일을 입력해주세요.',
  REQUIRED_PASSWORD: '비밀번호를 입력해주세요.',
  REQUIRED_TITLE: '내용을 입력해주세요.',
  REQUIRED_CONTENTS: '내용을 입력해주세요.',

  NOT_A_MEMBER: '아직 회원이 아니라면?',
  NOT_FOUND_PAGE: '존재하지 않는 페이지입니다.',

  WELCOME: '유로그에 오신 것을 환영합니다.',
  DELETE_POST: '게시글이 삭제되었습니다.',

  CONFIRM_DELETE_POST: '게시글을 삭제할까요?',
} as const;

export const ERROR_MESSAGES = {
  PASSWORD_MISMATCH: '비밀번호가 일치하지 않습니다.',
  CHECK_USER_INFO: '이메일/비밀번호를 다시 확인해주세요.',
  EMPTY_INPUT: '빈 값은 입력할 수 없어요.',
  DELETE_POST_FAILURE: '게시글 삭제 실패! 잠시 후 다시 시도해주세요.',
} as const;
