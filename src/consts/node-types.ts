export const EDITOR_NODE_TYPE_PARAGRAPH = 'paragraph';
export const EDITOR_NODE_TYPE_H1 = 'h1';
export const EDITOR_NODE_TYPE_H2 = 'h2';
export const EDITOR_NODE_TYPE_H3 = 'h3';
export const EDITOR_NODE_TYPE_H4 = 'h4';
export const EDITOR_NODE_TYPE_H5 = 'h5';
export const EDITOR_NODE_TYPE_H6 = 'h6';

export type editorNodeType =
  | typeof EDITOR_NODE_TYPE_PARAGRAPH
  | typeof EDITOR_NODE_TYPE_H1
  | typeof EDITOR_NODE_TYPE_H2
  | typeof EDITOR_NODE_TYPE_H3
  | typeof EDITOR_NODE_TYPE_H4
  | typeof EDITOR_NODE_TYPE_H5
  | typeof EDITOR_NODE_TYPE_H6;
