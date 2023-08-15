export const stripTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    let text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > 210 ? text.slice(0, 220) + "..." : text;
  };
export const truncateTitle = (title) => {
    return title.length > 47 ? title.slice(0, 47) + "..." : title;
  };