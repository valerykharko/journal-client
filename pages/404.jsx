import Router from "next/router";
import Head from "next/head";

const Page404 = () => {
  const onButtonHandler = () => {
    Router.push("/");
  };

  return (
    <>
      <Head>
        <title>Page 404</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="h-full w-full mt-40 flex justify-center items-center overflow-hidden overflow-x-hidden">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-2xl">
            <img src={"/404.png"} alt="404 Image" />
          </div>
          <div className="max-w-md">
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page{" "}
            </p>
            <p className="mb-8">
              But don't worry, you can find plenty of other things on our
              homepage
            </p>
            <button
              className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
              onClick={onButtonHandler}
            >
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
