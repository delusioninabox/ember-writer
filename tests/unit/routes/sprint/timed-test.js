import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sprint/timed', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sprint/timed');
    assert.ok(route);
  });
});
