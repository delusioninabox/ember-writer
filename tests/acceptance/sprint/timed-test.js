import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Timed Sprint', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /sprint/timed/10', async function(assert) {
    await visit('/sprint/timed/10');

    assert.equal(currentURL(), '/sprint/timed/10');
  });
});