import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-powered prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is collection of AI prompts. It provides you a place to
        discover, create and share interesting prompts
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
