export const handleLanguageChange = (language: string) => {
  document.cookie = `lang=${language}; path=/; max-age=${60 * 60 * 24 * 365}`;
  window.location.reload();
};
