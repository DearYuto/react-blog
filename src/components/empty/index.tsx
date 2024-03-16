import { CSSProperties } from 'react';

type Props = {
  style: CSSProperties;
};

/**
 * 사용처 ▼
 * 로그인/회원가입 등 사용자 인터랙션 이후 보여질 메시지로 인한
 * 레이아웃 쉬프트 현상 방지용
 * TODO : 더 좋은 방법 있으면 변경하기
 */
export default function Empty({ style }: Props) {
  return <div style={{ ...style }}></div>;
}
