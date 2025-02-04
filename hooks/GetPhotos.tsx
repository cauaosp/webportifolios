export function GetRandomPhotos() {
  const url =
    "https://api.unsplash.com/photos/random?client_id=WDulne_y8oXvPpYsO44kstUv14o0OhBmUa4EsC2ZW7k";
  let urlReponse = "";

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      urlReponse = res.urls.regular;
    });

  return urlReponse;
}
