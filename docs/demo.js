/* Synthetic teaching example only. NOT the private finance engine or its schema. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FinanceDemo = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const platforms = ['WB', 'Amazon', 'Mercado Libre', 'Walmart'];
  function sample({costResolved = false, differenceResolved = false} = {}) {
    return {
      schema: 'synthetic-demo-v1-not-production',
      unit: 'DEMO_CENTS',
      source: [
        {platform:'WB', sku:'DEMO-01', sales:120000, refunds:10000, fees:15000, paid:95000},
        {platform:'Amazon', sku:'DEMO-02', sales:100000, refunds:5000, fees:12000, paid:83000},
        {platform:'Mercado Libre', sku:'DEMO-03', sales:90000, refunds:0, fees:11000, paid:79000},
        {platform:'Walmart', sku:'DEMO-04', sales:110000, refunds:10000, fees:14000, paid:differenceResolved ? 86000 : 86100}
      ],
      manual: [
        {platform:'WB', cost:50000, adjustment:0},
        {platform:'Amazon', cost:42000, adjustment:1000},
        {platform:'Mercado Libre', cost:38000, adjustment:-500},
        {platform:'Walmart', cost:costResolved ? 46000 : null, adjustment:0}
      ]
    };
  }
  function integer(n, label, signed = false) {
    if (!Number.isSafeInteger(n) || (!signed && n < 0)) throw new TypeError('Invalid integer amount: ' + label);
    return n;
  }
  function run(input) {
    if (!input || input.schema !== 'synthetic-demo-v1-not-production' || input.unit !== 'DEMO_CENTS')
      throw new TypeError('Only the synthetic demo schema is supported.');
    if (!Array.isArray(input.source) || !input.source.length || !Array.isArray(input.manual))
      throw new TypeError('Source and manual arrays are required.');
    const adjustments = new Map();
    input.manual.forEach(m => {
      if (!platforms.includes(m.platform) || adjustments.has(m.platform)) throw new TypeError('Invalid/duplicate manual platform.');
      if (m.cost !== null) integer(m.cost, 'cost');
      integer(m.adjustment, 'adjustment', true);
      adjustments.set(m.platform, m);
    });
    const seen = new Set();
    const rows = input.source.map(s => {
      if (!platforms.includes(s.platform) || seen.has(s.platform)) throw new TypeError('Invalid/duplicate source platform.');
      seen.add(s.platform);
      if (typeof s.sku !== 'string' || !s.sku.startsWith('DEMO-')) throw new TypeError('A synthetic SKU is required.');
      ['sales','refunds','fees','paid'].forEach(k => integer(s[k], k));
      const m = adjustments.get(s.platform);
      if (!m) throw new TypeError('Missing manual input.');
      const net = integer(s.sales - s.refunds - s.fees, 'net', true);
      const difference = integer(net - s.paid, 'difference', true);
      const profit = m.cost === null ? null : integer(net - m.cost + m.adjustment, 'profit', true);
      const issues = [];
      if (m.cost === null) issues.push('MISSING_COST');
      if (difference !== 0) issues.push('SETTLEMENT_DIFFERENCE');
      return {platform:s.platform, sku:s.sku, net, cost:m.cost, adjustment:m.adjustment, paid:s.paid, difference, profit, issues};
    });
    if (adjustments.size !== seen.size) throw new TypeError('Unused manual platform.');
    const issueCount = rows.reduce((n, r) => n + r.issues.length, 0);
    return {schema:input.schema, unit:input.unit, status:issueCount ? 'DRAFT' : 'FINAL', issueCount, rows};
  }
  return Object.freeze({sample, run});
});
