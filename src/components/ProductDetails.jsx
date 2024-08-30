import React, { useContext, useEffect, useState } from "react";
import { Table } from "antd";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ProductCompareContext } from "../context/ProductCompareContext";

const ProductDetails = () => {
  const { addProduct, products } = useContext(ProductCompareContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const columns = [
    {
      title: "Compare",
      dataIndex: "id",
      key: "id",
      render: (id, record) => (
        <button
          className={`text-2xl p-2 hover:text-blue-300 ${
            products.some((p) => p.id === record.id) &&
            "text-gray-400 hover:text-gray-400"
          }`}
          onClick={() => addProduct(record)}
          disabled={products.some((p) => p.id === record.id)}
        >
          <IoIosAddCircleOutline />
        </button>
      ),
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (image) => (
        <img src={image[0]} alt="product" width="100" height="100" />
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "20%",
      sorter: (a, b) => a.description.localeCompare(b.description),
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
      sorter: (a, b) => a.price - b.price,
    },

    {
      title: "Discount Percentage",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      sorter: (a, b) => a.brand.localeCompare(b.brand),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://dummyjson.com/products?limit=${
        tableParams.pagination.pageSize
      }&skip=${
        (tableParams.pagination.current - 1) * tableParams.pagination.pageSize
      }`
    )
      .then((res) => res.json())
      .then(({ products, total }) => {
        setData(products);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: total,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default ProductDetails;
