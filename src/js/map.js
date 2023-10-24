function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.7547, lng: -73.9938 }, // Координати центру карти
      zoom: 12, // Збільшення масштабу карти
    });
  
    const marker1 = new google.maps.Marker({
      position: { lat: 40.7547, lng: -73.9938 }, // Координати першого маркера
      map: map,
      title: "Маркер 1",
    });
  
    const marker2 = new google.maps.Marker({
      position: { lat: 34.0347, lng: -118.4481 }, // Координати другого маркера
      map: map,
      title: "Маркер 2",
    });
  }
  