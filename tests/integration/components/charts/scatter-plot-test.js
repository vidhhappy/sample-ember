import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('charts/scatter-plot', 'Integration | Component | charts/scatter plot', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{charts/scatter-plot}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#charts/scatter-plot}}
      template block text
    {{/charts/scatter-plot}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
