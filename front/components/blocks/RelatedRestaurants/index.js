import Header from '../../shared/Header';
import Container from '../../shared/Container';
import RestaurantCard from '../../pages/restaurant/RestaurantCard';

const RelatedRestaurants = ({ restaurants }) => {
  return (
    <Container>
      <div className="bg-gray-100 my-40">
        <Header
          theme={'primary'}
          label={"I'm still hungry..."}
          title={'Related Restaurants'}
        />
        <div className="flex w-4/5 mx-auto py-16 ">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-40 pb-12 px-4">
            {restaurants &&
              restaurants.map((restaurant, index) => (
                <RestaurantCard {...restaurant} key={index} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

RelatedRestaurants.defaultProps = {};

export default RelatedRestaurants;
