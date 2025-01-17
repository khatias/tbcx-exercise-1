import React, { useState } from "react";
import { deleteProduct } from "../../functions/deleteProduct";

interface DeleteProductProps {
  id: number;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ id }) => {
  const [modalMessage, setModalMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteProduct = async () => {
    try {
      const result = await deleteProduct(id);
      if (result.success) {
        setModalMessage("Product deleted successfully!");
        setModalVisible(true);
      } else {
        throw result.error;
      }
    } catch (error) {
      setModalMessage("Error deleting product. Please try again.");
      setModalVisible(true);
      console.error("Error deleting product:", error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    if (modalMessage === "Product deleted successfully!") {
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        data-cy="delete-my-product-button"
        onClick={handleDeleteProduct}
        className="py-2 px-5 m-auto bg-purple-600 text-white rounded-md hover:bg-red-700 transition duration-200"
      >
        Delete
      </button>

      {modalVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          data-cy="delete-product-modal"
        >
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <p data-cy="delete-success-alert" className="mb-4 text-lg">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteProduct;
