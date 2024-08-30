import ProductDetails from "./ProductDetails";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { IoIosAddCircleOutline } from "react-icons/io";
const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        className="text-2xl p-2 hover:text-blue-300"
        type="text"
        onClick={showModal}
      >
        <IoIosAddCircleOutline />
      </Button>
      <Modal
        width={1000}
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ProductDetails />
      </Modal>
    </>
  );
};

export default ModalComponent;
