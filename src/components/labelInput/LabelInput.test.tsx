import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import LabelInput from '.';

describe('LabelInput 컴포넌트 테스트', () => {
  test('레이블과 인풋 요소가 렌더링되는지 확인한다.', () => {
    render(<LabelInput label="name" labelFor="name" inputType="text" ariaInvalid="false" />);

    const labelElement = screen.getByLabelText('name');

    expect(labelElement).toBeInTheDocument();
  });
});
