import Button from "../Button";

const Dropdown = () => {
  const checkout = (): void => alert("Thank you for purchasing from market :)");
  return (
    <div className="absolute top-10 right-5 w-64 bg-white rounded shadow-md animate-fadeIn">
      {/* Empty cart image */}
      <ul>CartList</ul>
      <div className="p-3">
        <p className="mb-1 text-gray-500 font-medium">Total: 20$</p>
        <Button
          type="button"
          className="w-full p-1 bg-green-500 hover:bg-green-600 transition "
          onClick={checkout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Dropdown;
