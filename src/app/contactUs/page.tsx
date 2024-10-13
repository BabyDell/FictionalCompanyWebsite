export default function () {
  return (
    <div className="w-full bg-[url(https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_1280.jpg)] h-dvh m-auto bg-cover">
      <div className="w-full xl:w-[1150px] bg-amber-50 h-dvh mx-auto">
        <div className="relative menuImage bg-[url(/img/rosatiContactPagePizza.jpg)] h-[200px] md:h-[250px] lg:h-[300px] bg-cover ">
          <div className="flex items-center justify-center h-full text-4xl text-white font-serif">
            Have a Quesiton?
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-10">
          <div className="p-6 max-w-md w-full bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="https://icon-library.com/images/pizza-icon/pizza-icon-6.jpg"
                alt="Pizza Icon"
              />
            </div>
            <div>
              <div className="text-xl  text-red-950 font-semibold">
                Inferno Blaze Pizza
              </div>
              <p>Headquarters:</p>
              <p className="text-gray-500">
                123 Pizza St, Pizza City, PC 12345
              </p>
              <p className="text-gray-500">Phone: 123-456-7890</p>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-md mt-6 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="flex flex-col space-y-4">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  className="ml-2 p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  className="ml-2 p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  className=" ml-2 p-2 border border-gray-300 rounded-md"
                />
              </label>
              <input
                type="submit"
                value="Submit"
                className="ml-2 p-2 bg-emerald-800 text-white rounded-md cursor-pointer hover:bg-emerald-900"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
