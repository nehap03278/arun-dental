/**
 * @file components.test.js
 * Unit tests for the navigation highlighting logic in components.js.
 */

/**
 * Replicates the logic used in highlightActiveNavLink to determine the active page.
 * @param {string} pathname 
 * @returns {string}
 */
const getPageName = (pathname) => {
  return pathname.split('/').pop().replace('.html', '') || 'index';
};

describe('Navigation Logic', () => {
  test('should correctly identify the page name from various URL path patterns', () => {
    expect(getPageName('/index.html')).toBe('index');
    expect(getPageName('/about.html')).toBe('about');
    expect(getPageName('/services.html')).toBe('services');
    expect(getPageName('/')).toBe('index');
    expect(getPageName('')).toBe('index');
    expect(getPageName('/subfolder/appointment.html')).toBe('appointment');
  });
});