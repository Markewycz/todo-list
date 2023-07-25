function elementFromHtml(html) {
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content;
}

export default elementFromHtml;
