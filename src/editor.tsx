import React from 'react';
import { createEditor, Node } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import memoizeOne from 'memoize-one';

export type editorProps = {
  placeholder?: string;
};
type editorStates = { value: Node[] };

export class Editor extends React.PureComponent<editorProps, editorStates> {
  state = {
    value: [
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ],
  };

  render() {
    return <>{this.renderEditor()}</>;
  }

  renderEditor = () => {
    const { value } = this.state;
    const { placeholder } = this.props;

    return (
      <Slate editor={this.getEditor()} value={value} onChange={this.handleChange}>
        <Editable placeholder={placeholder} />
      </Slate>
    );
  };
  getEditor = () => this.createEditor();
  createEditor = memoizeOne(() => withReact(createEditor()));
  handleChange = (newValue: Node[]): void => {
    // console.log(newValue);
    this.setState({ value: newValue });
  };
}
