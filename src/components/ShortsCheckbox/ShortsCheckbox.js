function ShortsCheckbox({ isShortsChecked, onShortsCheck }) {
  function handleCheckedChange(evt) {
    onShortsCheck(evt.target.checked);
  }

  return (
    <label className="search-bar__checkbox-text">
      <input
        className="search-bar__checkbox"
        type="checkbox"
        checked={isShortsChecked}
        onChange={handleCheckedChange}
      />
      <span className="search-bar__checkbox-switcher"></span>
      Короткометражки
    </label>
  );
}

export default ShortsCheckbox;
