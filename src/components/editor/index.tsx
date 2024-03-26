import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';

export default function PostEditor() {
  return (
    <Editor
      usageStatistics={false}
      useCommandShortcut={false}
      initialValue=""
      placeholder="내용을 입력해주세요."
      previewStyle="vertical"
      initialEditType="wysiwyg"
      plugins={[colorSyntax]}
    />
  );
}
