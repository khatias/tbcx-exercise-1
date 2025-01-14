"use client";
import { useState } from "react";
import { createProduct } from "../../utils/productService";
import { AiOutlineClose, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export function CreateProductForm() {
  const [modalMessage, setModalMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const response = await createProduct(formData);

    setModalMessage(response.message);
    setModalVisible(true);

    if (response.success) {
      setTimeout(() => {
        setModalVisible(false);
      }, 3000);
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-zinc-100 rounded-md">
      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full sm:w-96 md:w-1/2 lg:w-1/3 relative">
            <button
              onClick={() => setModalVisible(false)}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
            >
              <AiOutlineClose />
            </button>
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center mb-4">
              {modalMessage}
            </p>
            {modalMessage.includes("successfully") ? (
              <div data-cy='success-message'  className="text-center text-green-500 ">
                <AiOutlineCheckCircle className="inline-block text-3xl mb-2" />
                Product created successfully!
              </div>
            ) : (
              <div data-cy="error-message" className="text-center text-red-500">
                <AiOutlineCloseCircle className="inline-block text-3xl mb-2" />
                Failed to create product. Please try again.
              </div>
            )}
          </div>
        </div>
      )}

      <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Create Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Form fields */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
          data-cy="product-name"
            type="text"
            id="name"
            name="name"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-300"
            placeholder="Enter the product name"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="price"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Price
          </label>
          <input
             data-cy="product-price"
            type="number"
            id="price"
            name="price"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-300"
            placeholder="Enter the product price"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="brand"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Brand
          </label>
          <input
             data-cy="product-brand"
            type="text"
            id="brand"
            name="brand"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-300"
            placeholder="Enter the product brand"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Category
          </label>
          <input
              data-cy="product-category"
            type="text"
            id="category"
            name="category"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-300"
            placeholder="Enter the product category"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="image"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Image URL
          </label>
          <input
            data-cy="product-image"
            type="text"
            id="image"
            name="image"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-300"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
               data-cy="product-description"
            id="description"
            name="description"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-300"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
               data-cy="product-create-button"
            type="submit"
            className="px-16 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-700 focus:outline-none transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
