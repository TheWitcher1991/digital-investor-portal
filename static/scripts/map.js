document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      id: 1,
      title: "Тепличный комплекс",
      description: "Сумма 350 000 ₽",
      lat: 45.9088,
      lng: 43.3547,
      city: "Село Дивное"
    }
  ];

  const map = L.map('map').setView([45.9088, 43.3547], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  const projectsContainer = document.querySelector('.map-projects');

  projects.forEach(project => {
    const marker = L.marker([project.lat, project.lng]).addTo(map);

    marker.bindPopup(`
      <div className="map-project-card">
        <div class="map-project-title">${project.title}</div>
        <div class="map-project-description">${project.description}</div>
        <div class="map-project-location">${project.city}</div>
        <div class="map-project-action">Реализовано</div>
      </div>
    `);

    const card = document.createElement('div');
    card.className = 'map-project-card';

    card.innerHTML = `
      <div class="map-project-title">${project.title}</div>
      <div class="map-project-description">${project.description}</div>
      <div class="map-project-location">${project.city}</div>
      <div class="map-project-action">Реализовано</div>
    `;

    card.addEventListener('click', () => {
      map.flyTo([project.lat, project.lng], 10, {
        duration: 1.5
      });

      marker.openPopup();
    });

    projectsContainer.appendChild(card);
  });
});
