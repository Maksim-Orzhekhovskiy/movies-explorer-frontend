function Preloader({ loading }) {
  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader__container">
          <span className="preloader__circle"></span>
        </div>
      </div>
    );
  }
}

export default Preloader;
