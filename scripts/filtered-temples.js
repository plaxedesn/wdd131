document.addEventListener('DOMContentLoaded', () => {
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005-08-07",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888-05-21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015-06-07",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020-05-02",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974-11-19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986-01-10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983-12-02",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Preston England Temple",
      location: "England",
      dedicated: "1998-06-07",
      area: 69630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/400x250/preston-temple-762733-wallpaper.jpg"
    },
    {
      templeName: "Regina Saskatchewan Temple",
      location: "Regina, Canada",
      dedicated: "1999-11-14",
      area: 990,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/regina-saskatchewan/400x250/regina-saskatchewan-temple-lds-1027644-wallpaper.jpg"
    },
    {
      templeName: "Spokane Washington Temple",
      location: "Washington, United States",
      dedicated: "1999-08-23",
      area: 994,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/spokane-washington/400x250/spokane-washington-temple-1279173-wallpaper.jpg"
    }
  ];

  const gallery = document.querySelector('.gallery');
  const navLinks = document.querySelectorAll('nav ul li a');

  function createTempleCards(filteredTemples) {
    gallery.innerHTML = ''; 
    filteredTemples.forEach(temple => {
      const figure = document.createElement('figure');
      figure.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        <figcaption>
          <h3>${temple.templeName}</h3>
          <p><span class="label">Location:</span> ${temple.location}</p>
          <p><span class="label">Dedicated:</span> ${new Date(temple.dedicated).toDateString()}</p>
          <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
      `;
      gallery.appendChild(figure);
    });
  }

  function filterTemples(criteria) {
    switch (criteria) {
      case 'old':
        return temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      case 'new':
        return temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      case 'large':
        return temples.filter(t => t.area > 90000);
      case 'small':
        return temples.filter(t => t.area < 10000);
      default:
        return temples; 
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.getAttribute('data-filter');
      createTempleCards(filterTemples(filter));
    });
  });

  createTempleCards(temples);

  const currentYear = new Date().getFullYear();
  document.getElementById('copyright').textContent =
    `© ${currentYear} Plaxedes Ncube`;

  document.getElementById('lastModified').textContent =
    `Last Modified: ${document.lastModified}`;
});
