import WriteForm from '@/components/write/WriteForm';

export type WriteModeType = {
  mode: 'modify' | 'create';
};

export default function WritePage({ mode = 'create' }: WriteModeType) {
  return (
    <>
      <WriteForm mode={mode} />
    </>
  );
}
