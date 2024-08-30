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
        className="text-4xl p-2 outline-none border-none hover:text-blue-300 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        type="default"
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
