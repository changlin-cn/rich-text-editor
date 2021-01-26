

describe('Editor', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:6007/iframe.html?id=editor--primary&viewMode=story');
  });

  it('should be titled "Storybook"', async () => {
    await expect(page.title()).resolves.toMatch('Storybook');
  });
});
