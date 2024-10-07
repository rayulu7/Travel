import {
  LocationCardContainer,
  Heading,
  HeadingContainer,
  Paragraph,
} from './styledComponents'

import './index.css'

const PlaceContainer = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-location">
      <LocationCardContainer>
        <img src={imageUrl} alt={name} className="image" />
        <HeadingContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingContainer>
      </LocationCardContainer>
    </li>
  )
}
export default PlaceContainer
