const data = [
    {
      img: "./assets/images/blogcard1.jpeg",
      title: "Pellentesque habitant morbi",
      date: "January 16, 2019",
    },
    {
      img: "./assets/images/blogcard2.jpeg",
      title: "Best books about fashion",
      date: "January 16, 2019",
    },
    {
      img: "./assets/images/blogcard3.jpeg",
      title: "Best books about Fashion",
      date: "January 16, 2019",
    },
    {
      img: "./assets/images/blogcard4.jpeg",
      title: "Autumn fashion tips and tricks",
      date: "January 16, 2019",
    },
    {
      img: "./assets/images/blogcard5.jpeg",
      title: "Newest photo apps",
      date: "January 16, 2019",
    },
    {
      img: "./assets/images/blogcard6.jpeg",
      title: "Best books about Photography",
      date: "January 16, 2019",
    },
    {
      img: "./assets/images/blogcard2.jpeg",
      title: "Best books about Fashion",
      date: "January 16, 2019",
    },
    {
      img: "./assets/images/blogcard3.jpeg",
      title: "Pellentesque habitant morbi",
      date: "January 16, 2019",
    },
    {
      img: "./assets/images/blogcard1.jpeg",
      title: "Best books about Fashion",
      date: "January 16, 2019",
    },
  ];
  
  data.forEach((d) => {
    let html = `
      <div class="item">
          <img src=${d.img} alt="">
          <h3 class="title"> ${d.title} </h3>
          <div class="info">
              <p class="tag"> FASHION AND STYLE </p>
              <p class="date"> ${d.date} </p>
          </div>
      </div>
      `;
      document.querySelector(".blog-blogs .box").innerHTML+=html
  });
  