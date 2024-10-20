import './index.css'

const FilterSection = () => (
  <div className="filter-container">
    <div className="filter-header-container">
      <h1 className="filter">Filter</h1>
      <h1 className="clear">CLEAR ALL</h1>
    </div>
    <div className="filter-list-container">
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Type of Plants</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Price</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Nursery</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Ideal Plant Location</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Indoor / Outdoor</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Maintenence</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Plant Size</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Water Schedule</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Color</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Seasonal</p>
          <p className="plus">+</p>
        </div>
      </div>
      <div className="list-items-of-filter">
        <hr className="separator" />
        <div className="inside-list-item">
          <p className="item">Light Efficient</p>
          <p className="plus">+</p>
        </div>
      </div>
    </div>
  </div>
)

export default FilterSection
