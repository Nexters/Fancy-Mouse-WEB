import type { NextPage } from 'next';
import tw from 'twin.macro';

const TestComponent = tw.span`text-blue-500 text-3xl`;

const Home: NextPage = () => {
  return (
    <div>
      <TestComponent>Test</TestComponent>
    </div>
  );
};

export default Home;
