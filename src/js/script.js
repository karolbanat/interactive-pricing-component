// html elements
const toggleBtn = document.querySelector('.btn--toggle');
const viewsOutput = document.querySelector('#output-views');
const priceOutput = document.querySelector('#output-price');
const pricingInput = document.querySelector('#pricing-input');

// variables
const pricings = [
	{
		pageviews: '10K',
		price: 8,
	},
	{
		pageviews: '50K',
		price: 12,
	},
	{
		pageviews: '100K',
		price: 16,
	},
	{
		pageviews: '500K',
		price: 24,
	},
	{
		pageviews: '1M',
		price: 36,
	},
];

let billing = 'monthly';
let discount = 0;

// functions
const handleToggleBtn = () => {
	switch (billing) {
		case 'monthly':
			toggleBtn.classList.remove('btn--toggle-left');
			toggleBtn.classList.add('btn--toggle-right');
			changeBilling();
			changePrice();
			break;
		case 'yearly':
			toggleBtn.classList.remove('btn--toggle-right');
			toggleBtn.classList.add('btn--toggle-left');
			changeBilling();
			changePrice();
			break;
	}
};

const changeBilling = () => {
	toggleBtn.setAttribute('aria-label', `Toggle to ${billing} billing.`);
	billing = billing === 'monthly' ? 'yearly' : 'monthly';
	discount = billing === 'monthly' ? 0 : 0.25;
};

const changePrice = () => {
	priceOutput.innerText = `$${(pricings[pricingInput.value].price * (1 - discount)).toFixed(2)}`;
};

const handlePricingInput = () => {
	const value = pricingInput.value;
	const pricing = pricings[value];
	viewsOutput.innerText = `${pricing.pageviews} pageviews`;
	changePrice();
	pricingInput.style.backgroundSize = `${(value / pricingInput.max) * 100}%`;
};

// event listeners
toggleBtn.addEventListener('click', handleToggleBtn);
pricingInput.addEventListener('input', handlePricingInput);
