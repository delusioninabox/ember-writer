import Component from '@ember/component';
import EmberObject from '@ember/object';

export default Component.extend({
  yourText: EmberObject,
  timeRemaining: 100,
  timesUp: false,

  onInit() {
    /* Set speration in editor to paragraphs */
    document.execCommand("defaultParagraphSeparator", false, "p");
  },

  didRender() {
    document.getElementById('edit-block')
      .addEventListener("paste", function(e) {
        /*
          Prevent pasting into block action
          That's cheating!
        */
        e.preventDefault();
      });
  },

  willDestroy() {
    this.element.getElementById('edit-block').removeEventListener("paste");
  },

  actions: {
    /* Turn editable div into ember model data */
    updateModel() {
      let newText = document.getElementById('edit-block').innerText;
      this.set('yourText.textContent', newText);
    },

    /* Copy final text to clipboard */
    copyToClipboard() {
      document.getElementById("textEditor")
              .select();
      document.execCommand("copy");
    }
  }
});
