const Inline = Quill.import('blots/inline');

class LinkBlot extends Inline {
  static blotName = 'link';
  static tagName = 'a';

  static create(value) {
    const node = super.create();
    node.setAttribute('href', value.url);
    node.setAttribute('target', value.target);
    node.setAttribute('data-target', value.target);
    return node;
  }
}

Quill.register(LinkBlot);