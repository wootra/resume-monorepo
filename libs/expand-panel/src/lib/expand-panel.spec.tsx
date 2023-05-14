import React from 'react';
import { ExpandPanel } from './expand-panel';
import { render } from '@testing-library/react';

describe('expandPanel', () => {
  it('should work', () => {
    const rendered = render(<ExpandPanel />);
    expect(rendered.getByText('expand-panel')).not.toBeNull();
  });
});
