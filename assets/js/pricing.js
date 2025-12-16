
(function () {
  const INDIA_TIMEZONES = ["Asia/Kolkata"];

  const INDIA_PRICING = {
    employee: { basic: 6000, standard: 10000, advanced: 16000 },
    team: { core: 60000, strategic: 90000 },
    discussion: { voice: 2500, video: 4000 }
  };

  const GLOBAL_PRICING = {
    employee: { basic: 150, standard: 250, advanced: 400 },
    team: { core: 1500, strategic: 2300 },
    discussion: { voice: 60, video: 100 }
  };

  function isIndia() {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return INDIA_TIMEZONES.includes(tz);
    } catch {
      return false;
    }
  }

  function formatPrice(value, isIndia) {
    return isIndia ? `₹${value.toLocaleString("en-IN")}` : `$${value}`;
  }

  const indiaUser = isIndia();
  const pricing = indiaUser ? INDIA_PRICING : GLOBAL_PRICING;

  document.querySelectorAll("[data-price]").forEach(el => {
    const [category, plan] = el.dataset.price.split(".");
    const value = pricing[category][plan];
    el.innerHTML = formatPrice(value, indiaUser);
  });

})();

