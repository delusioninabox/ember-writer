import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';
import moment from 'moment';

module('Unit | Model | text', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('text', {
      textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ullamcorper sem, sed ornare quam. Mauris nunc purus, volutpat ac urna sit amet, facilisis cursus diam. Nullam bibendum turpis rutrum fringilla gravida. In id venenatis lorem, ac rhoncus orci. Aliquam id libero auctor, semper purus et, efficitur dui. Quisque quis viverra tortor, aliquet pretium turpis. Quisque lobortis nulla sed mauris feugiat vestibulum. Aliquam ac orci faucibus, pretium nisl non, fringilla massa. In fringilla accumsan tellus, tempor sodales neque rhoncus ac. Morbi in vestibulum dolor. Suspendisse rhoncus augue nibh, a euismod tortor tincidunt vel. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque tristique ut enim sed blandit. Proin eu odio nisl. In porttitor posuere lacus, ut facilisis dolor sagittis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt, nunc a pretium ultrices, nunc elit faucibus erat, vel tincidunt augue purus sit amet orci. Aenean et turpis ultrices, varius leo id, tincidunt nisl. Nullam tempor purus enim, at posuere mauris euismod non. Morbi consequat, metus porta iaculis scelerisque, lectus ex dignissim sem, at aliquet dui orci eget leo. Fusce pellentesque ultricies diam sed laoreet. Ut semper magna a magna tempor commodo. Donec iaculis nisl a fermentum facilisis. Morbi sem sapien, sollicitudin in sem sed, semper posuere augue. Etiam pulvinar tincidunt odio, sit amet lacinia est vestibulum at. Sed risus leo, dictum sed est quis, mattis mattis dolor. Nulla ac dolor sit amet tortor scelerisque pellentesque. Vestibulum interdum turpis id leo sodales mattis. Fusce a porttitor justo. Praesent fermentum turpis hendrerit, consequat neque iaculis, sagittis lectus. Vestibulum et eros commodo, imperdiet augue sed, ullamcorper ante. Nunc tincidunt convallis vulputate. Ut magna ante, porttitor pulvinar viverra iaculis, vehicula ut mi. Quisque ut lorem ex. Etiam eu varius augue. Nam vel consectetur lectus. Sed pretium ornare metus at suscipit. Nullam consectetur iaculis tortor, a pharetra nunc efficitur at. Praesent quis interdum elit. Morbi purus tellus, ullamcorper egestas metus eget, dictum porttitor ex. Vivamus sit amet rhoncus quam, non porta lacus. Nam ipsum lectus, aliquet vel eros in, dictum volutpat nibh. Nunc lacus arcu, maximus vel pharetra in, ultrices vitae quam. Aliquam pulvinar erat imperdiet, condimentum quam et, bibendum quam. Morbi vestibulum sem turpis, in eleifend ipsum dictum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla in tristique nulla. Duis luctus odio in tortor semper scelerisque. Aliquam porta suscipit diam. Pellentesque at viverra turpis. Aenean tempor egestas sapien. Morbi pharetra est vel velit vestibulum maximus. Suspendisse sit amet consequat neque. Praesent auctor ac libero sed euismod. Donec eget suscipit felis. Proin vel augue eget risus fermentum egestas vel at leo. Nunc id ex eros. Donec iaculis enim in convallis posuere. Ut in laoreet urna. Pellentesque et elit ut felis lobortis convallis. Suspendisse in luctus quam. Nullam vel odio ut nulla aliquet iaculis. Phasellus pharetra risus enim, vel sodales nisl tincidunt in. Duis et vulputate leo. Pellentesque luctus tellus sit amet rutrum placerat. Nunc ac.',
      timeStarted: Date.now(),
      timeFinished: moment(Date.now()).add(15, 'minutes')
    }));
    assert.ok(model);
    assert.equal(model.wordCount, 500);
    assert.equal(model.totalTime, 15);
    assert.equal(model.wordsPerMin, 34);
  });
});
