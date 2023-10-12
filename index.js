let btnSearch = document.querySelector(".btnSearch");
let text_field = document.querySelector(".text_field");
let search_result = document.querySelector(".search-result");
let showMore_Button = document.querySelector("#show-more");
let API_KEY = "7OKePCm7hN9vC4v6KVJ-8n990ygXJfu_h1_qVTMaCrY";

btnSearch.addEventListener("click", fetchData);
let keyword = "tech";
let page = 1;

function search() {
  console.log(keyword);
}

async function fetchData() {
  keyword = text_field.value;
  const api_url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${API_KEY}&per_page=12`;
  const response = await fetch(api_url);
  const data = await response.json();
  const results = data.results;

    if(page === 1)
    {
        text_field.innerHTML = " ";
        search_result.innerHTML = "";
    }

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small; // Corrected the attribute name to 'src'

    console.log(result.urls.small);
    search_result.appendChild(image);

    const link = document.createElement("a");
    link.href = result.links.html;
    link.target = "_blank";

    link.appendChild(image);
    search_result.appendChild(link)
  });
  showMore_Button.style.display = "block";
}

showMore_Button.addEventListener('click',()=>{
    page++;
    fetchData();
});