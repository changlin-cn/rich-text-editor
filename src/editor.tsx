import React from 'react';
import { createEditor, Node } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import memoizeOne from 'memoize-one';
import { DEFAULT_PLACEHOLDER } from './consts/placeholder';
import { EDITOR_CLASSNAME } from './consts/classnames';

export type editorProps = {
  placeholder: string;
  onChange: (value: Node[]) => void;
};
type editorStates = { value: Node[] };

export class Editor extends React.PureComponent<editorProps, editorStates> {
  static defaultProps = {
    placeholder: DEFAULT_PLACEHOLDER,
    onChange: () => {
      // do nothing
    },
  };
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
        <Editable placeholder={placeholder} className={EDITOR_CLASSNAME} />
      </Slate>
    );
  };
  getEditor = () => this.createEditor();
  createEditor = memoizeOne(() => withReact(createEditor()));
  handleChange = (newValue: Node[]) => {
    // console.log(newValue);
    // debugger
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  };
}
