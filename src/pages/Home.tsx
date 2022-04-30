import { getAuth, signOut } from 'firebase/auth';

interface HomeProps {
  token: string;
}

const Home = (props: HomeProps) => {
  const auth = getAuth();
  return (
    <div>
      <p>Home Page</p>
      <p>idToken: {props.token}</p>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
};

export default Home;
