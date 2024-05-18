import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';

import { MESSAGES } from '@/constants/common/messages';

export default function PostEditor() {
  return (
    <Editor
      usageStatistics={false}
      useCommandShortcut={false}
      initialValue=""
      placeholder={MESSAGES.REQUIRED_CONTENTS}
      previewStyle="vertical"
      initialEditType="wysiwyg"
      plugins={[colorSyntax]}
    />
  );
}
