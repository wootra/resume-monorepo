// @vitest-environment jsdom

import { PictureFrame } from './picture-frame';
import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';

describe('pictureFrame', () => {
  it('should work', () => {
    const rendered = render(<PictureFrame />);
    expect(rendered.findByText('picture-frame')).not.toBeNull();
  });
});
