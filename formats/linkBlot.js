const Inline = Quill.import('blots/inline');

class LinkBlot extends Inline {
  static blotName = 'link';
  static tagName = 'a';

  static create(value) {
    const node = super.create();
    console.log('create', node, value);
    node.setAttribute('href', value.url);
    node.setAttribute('target', value.target);
    node.setAttribute('data-target', value.target);
    return node;
  }

  format(name, value) {
    console.log('format', name, value);
    // if (name === 'link' && value) {
    //   this.domNode.setAttribute('href', value);
    // } else {
    //   super.format(name, value);
    // }
  }

  static formats(domNode) {
    return { url: domNode.getAttribute('href'), target: domNode.getAttribute('target') };
  }

}

Quill.register(LinkBlot);