import { expect, test } from '@playwright/test';

test('Test HoverDrawSVG wrapper component', async ({ page }) => {
	await page.goto('/');
	// Test inline SVG
	const wrapper = page.locator('.hover-draw-svg >> nth=0');
	await wrapper.hover();
	const { anchorColor, pathLength } = await page.evaluate(() => {
		const firstWrapper = document.querySelectorAll('.hover-draw-svg')[0] as HTMLElement;
		const anchor = firstWrapper.querySelector('a') as HTMLElement;
		const path = anchor.querySelector('path') as SVGPathElement;
		return {
			anchorColor: anchor.style.color,
			pathLength: path.getAttribute('pathLength')
		};
	});
	expect(anchorColor).toEqual('blue');
	expect(pathLength).toEqual('1');

	// Test nested SVG component
	const wrapper2 = page.locator('.hover-draw-svg >> nth=1');
	await expect(wrapper2).toHaveScreenshot('candle.png', { animations: 'allow' });
	await wrapper2.hover();
	// Animating
	await page.waitForTimeout(200);
	expect(await wrapper2.screenshot()).not.toMatchSnapshot('candle.png');
	// Animated
	await page.waitForTimeout(400);
	expect(await wrapper2.screenshot()).toMatchSnapshot('candle.png');
});
