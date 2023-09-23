import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="multi_gradient text-center">AI-Inspired Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptVerse: Your Open-Source Companion for Unleashing, Inventing, and
        Sharing Inspirational Prompts in the Modern Age.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
