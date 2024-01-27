export const ImgUrl =
  "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png";
export const UserPhoto =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const BackgroundImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w780";
export const language = [
  { identifier: "en", name: "English" },
  { identifier: "nepali", name: "Nepali" },
  { identifier: "spanish", name: "Spanish" },

];
export const OPEN_AIKEY = import.meta.env.VITE_REACT_APP_OPEN_AIKEY;
// export const OPEN_AIKEY =import.meta.env.VITE_REACT_APP_OPEN_AIKEY
