import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to JFurniture',
    description: 'We sell quality home furniture',
    keywords: 'Furniture, Dining, Bedroom, Beds, Tables, Cabinets, Coffee Tables',
};

export default Meta;