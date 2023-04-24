import Profile from 'components/Profile/Profile';
import '../src/app.css';
import profile from './data/user.json';

function App() {
  return (
    <>
      <Profile
        user={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
    </>
  );
}

export default App;
