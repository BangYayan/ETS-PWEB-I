window.onload = () => {
    const fetchData = async () => {
      const res = await fetch("http://it-its.id/api/movies")
      const data = await res.json();
  
      const cardTitles = document.querySelectorAll(".card-title");
      const cardTexts = document.querySelectorAll(".card-text");
      for (let i = 0; i < cardTitles.length; i++) {
        cardTitles[i].innerText = data[i].Title;
        cardTexts[i].innerText = data[i].Plot;
      }
    }
  
    fetchData();
  }