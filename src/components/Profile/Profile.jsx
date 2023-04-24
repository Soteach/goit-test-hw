import PropTypes from 'prop-types';
import {
  Card,
  Tweets,
  Avatar,
  StatsItem,
  Quantity,
  Value,
  Rectangle,
  Followers,
} from './Profile.styled';

function Profile({ location, avatar, stats }) {
  return (
    <Card>
      <Rectangle>
        <Avatar src={avatar} />
      </Rectangle>
      <Tweets>
        <StatsItem>
          <Quantity>Tweets</Quantity>
          <Value>{stats.views}</Value>
        </StatsItem>
      </Tweets>
      <Followers>
        <StatsItem>
          <Quantity>Followers</Quantity>
          <Value>{stats.followers}</Value>
        </StatsItem>
      </Followers>
    </Card>
  );
}

export default Profile;

Profile.propTypes = {
  user: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
