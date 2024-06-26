export const MESSAGES = {
  REQUIRED_EMAIL: '이메일을 입력해주세요.',
  REQUIRED_PASSWORD: '비밀번호를 입력해주세요.',
  REQUIRED_TITLE: '제목을 입력해주세요.',
  REQUIRED_CONTENTS: '내용을 입력해주세요.',
  PASSWORD_CONFIRM: '비밀번호를 다시 입력해주세요.',

  NOT_A_MEMBER: '아직 회원이 아니라면?',
  NOT_FOUND_PAGE: '존재하지 않는 페이지입니다.',

  WELCOME: '유로그에 오신 것을 환영합니다.',
  USER_WELCOME: '회원이 되신 것을 환영합니다.',

  CREATE_POST: '게시글이 등록되었습니다.',
  MODIFY_POST: '게시글이 수정되었습니다.',
  DELETE_POST: '게시글이 삭제되었습니다.',

  CONFIRM_DELETE_POST: '게시글을 삭제할까요?',
} as const;

export const ERROR_MESSAGES = {
  PASSWORD_MISMATCH: '비밀번호가 일치하지 않습니다.',
  CHECK_USER_INFO: '이메일/비밀번호를 다시 확인해주세요.',
  EMPTY_INPUT: '빈 값은 입력할 수 없어요.',
  DELETE_POST_FAILURE: '게시글 삭제 실패! 잠시 후 다시 시도해주세요.',
  USER_ALREADY_EXISTS: '이미 존재하는 회원입니다.',

  INVALID_EMAIL_FORMAT: '이메일 형식으로 입력해주세요.',
  INVALID_PASSWORD_FORMAT: '비밀번호는 8자리 이상(특수문자, 대문자, 숫자)으로 입력해주세요.',

  GENERAL_ERROR: '문제가 발생했어요. 잠시 후 다시 시도해주세요.',
} as const;
