const list = document.querySelector('ol');
console.log(list);
const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]

links.forEach(link => displayList(link));

function displayList(link) {
    const listitem = document.createElement('li');
    const linksrc = document.createElement('a');

    linksrc.textContent = link.label;
    linksrc.setAttribute('href', link.url);

    listitem.appendChild(linksrc);
    list.appendChild(listitem);
}