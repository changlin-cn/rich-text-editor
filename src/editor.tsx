import React from 'react';
import { createEditor, Node } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import memoizeOne from 'memoize-one'

export default class Editor extends React.PureComponent {
  state: { value: Node[] } = {
    value: [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ],
  };

  render(): React.ReactNode {
    const editor = this.createEditor();
    const { value } = this.state;

    return (
      <Slate editor={editor} value={value} onChange={this.handleChange}>
        <Editable />
      </Slate>
    );
  }
  createEditor = memoizeOne(() => withReact(createEditor()));
  handleChange = (newValue: Node[]): void => this.setState(newValue);
}
