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
    /* Hook into the editor */
    document.getElementById('edit-block')
      .addEventListener("paste", function(e) {
        /*
          Prevent default paste action
          Get plain-text of text
          Copy plain-text into edtior
        */
        e.preventDefault();
        const copiedText = (e.originalEvent || e).clipboardData.getData('text/plain');
        document.execCommand("insertHTML", false, copiedText);
      });
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
