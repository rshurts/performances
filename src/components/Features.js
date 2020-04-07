import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ heading, gridItems }) => (
  <>
    <h1>{heading}</h1>
    <div className="columns is-multiline">
      {gridItems.map((item) => (
        <div key={item.name} className="column is-6">
          <section className="section">
            <div className="has-text-centered">
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            {/*<p>{item.name}</p>*/}
          </section>
        </div>
      ))}
    </div>
  </>
)

FeatureGrid.propTypes = {
  heading: PropTypes.string,
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
    })
  ),
}

export default FeatureGrid
