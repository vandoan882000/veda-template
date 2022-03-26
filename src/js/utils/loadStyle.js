export const loadStyle = ({
  file,
  content,
  insertPosition = "beforeend",
  id,
}) => {
  if (!!id) {
    const el = document.getElementById(id);
    el?.remove();
  }
  if (!!file) {
    const el = document.createElement("link");
    if (!!id) {
      el.id = id;
    }
    el.rel = "stylesheet";
    el.href = file;
    document.head.insertAdjacentElement(insertPosition, el);
    return el;
  }
  if (!!content) {
    const el = document.createElement("style");
    if (!!id) {
      el.id = id;
    }
    el.textContent = content;
    document.head.insertAdjacentElement(insertPosition, el);
    return el;
  }
};
