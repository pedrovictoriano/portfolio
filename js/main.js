// 1) Dark Mode Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? '' : 'dark';
  html.setAttribute('data-theme', next);
  themeBtn.textContent = next ? '☀️' : '🌙';
});

// 2) Typewriter Effect com fallback
const txt = "Olá, eu sou Pedro Victoriano";
let idx = 0;
const target = document.getElementById('typing');
if (target) {
  // limpa o texto estático de fallback
  target.textContent = '';
  function type() {
    if (idx < txt.length) {
      target.textContent += txt[idx++];
      setTimeout(type, 100);
    }
  }
  type();
}

// 3) tsParticles (protegido)
try {
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: { value: 60 },
      size: { value: 3 },
      move: { speed: 1 },
      color: { value: "#ffffff" },
      line_linked: { enable: true, distance: 150 }
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "grab" } }
    }
  });
} catch (e) {
  console.warn("tsParticles não carregou:", e);
}

// 4) AOS init
AOS.init({ duration: 800, once: true });

// 5) Filtro de projetos
document.querySelectorAll('.filter-btn').forEach(btn =>
  btn.addEventListener('click', e => {
    const cat = e.target.dataset.cat;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'block' : 'none';
    });
  })
);

// 6) Chart.js — commits mensais (exemplo estático)
const ctx = document.getElementById('commits-chart')?.getContext('2d');
if (ctx) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan','Fev','Mar','Abr','Mai','Jun'],
      datasets: [{
        label: 'Commits',
        data: [12, 19, 8, 15, 22, 30],
        fill: false,
        borderWidth: 2,
        pointRadius: 3
      }]
    },
    options: {
      scales: { y: { beginAtZero: true } },
      plugins: { legend: { display: false } }
    }
  });
}
