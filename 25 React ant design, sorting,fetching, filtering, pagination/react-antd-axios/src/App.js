import { Col, Divider, Row, Table, Avatar, Card, Modal } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { deleteSupplierByID, getAllSuppliers, postSupplier } from "./api/requests";
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';
import { Toaster, toast } from "react-hot-toast";
const { Meta } = Card;

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newSupplier, setNewSupplier] = useState({});
  function handleChange(e) {
    setNewSupplier({ ...newSupplier, [e.target.name]: e.target.value });
  }
  const handleOk = async() => {
    setIsModalOpen(false);
    console.log("new supplier", newSupplier);
    newSupplier.id = uuidv4();
    newSupplier.address = {
      postalCode:  newSupplier.postalCode
    };
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${newSupplier.companyName} added to API successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    setSuppliers([...suppliers,newSupplier]);
    await postSupplier(newSupplier);
    setNewSupplier({companyName:'',contactTitle:'',postalCode:''}); 
  };
  const [basket, setBasket] = useState([]);
  //table
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      filters: suppliers.map((supplier) => {
        return {
          text: supplier.companyName,
          value: supplier.companyName,
        };
      }),
      filterSearch: true,
      onFilter: (value, record) => record.companyName.includes(value),
      sorter: (a, b) => a.companyName.length - b.companyName.length,
      width: "30%",
    },
    {
      title: "Postal Code",
      dataIndex: ["address", "postalCode"],
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
    },
    {
      title: "Delete",
      render: (value) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                //delete
                deleteSupplierByID(value.id);
                let filteredSuppliers = suppliers.filter(
                  (item) => item.id !== value.id
                );
                setSuppliers(filteredSuppliers);

                //delete data from basket if exists
                let localBasket = JSON.parse(localStorage.getItem("basket"));
                let updatedBasket = localBasket.filter(
                  (basketItem) => basketItem.id !== value.id
                );
                localStorage.setItem("basket", JSON.stringify(updatedBasket));
                //update state
                let updatedBasketState = basket.filter(
                  (item) => item.id !== value.id
                );
                setBasket(updatedBasketState);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
          }}
        >
          Delete
        </Button>
      ),
    },
    {
      title: "Add To Basket",
      render: (value) => (
        <Button
          onClick={() => {
            const basketItem = {
              id: value.id,
              contactName: value.contactName,
              city: value.address.city,
            };
            if (!localStorage.getItem("basket")) {
              localStorage.setItem("basket", JSON.stringify([basketItem]));
            } else {
              let previousBasket = JSON.parse(localStorage.getItem("basket"));
              localStorage.setItem(
                "basket",
                JSON.stringify([...previousBasket, basketItem])
              );
            }
            setBasket([...basket, basketItem]);
            //toaster
            toast.success(`${value.companyName} added to basket successfully!`);
          }}
          variant="contained"
          color="primary"
        >
          Basket
        </Button>
      ),
    },
  ];
  //get all suppliers
  useEffect(() => {
    getAllSuppliers().then((data) => {
      setSuppliers(data);
      setLoading(false);
    });
  }, [setSuppliers, setLoading]);

  const arr = [1, 2, 3, 4];
  return (
    <>
      <Divider orientation="center">Responsive Cards</Divider>
      <Row style={{ width: "80%", margin: "0 auto" }} gutter={[40, 20]}>
        {arr.map((item) => {
          return (
            <Col
              key={item}
              className="gutter-row"
              span={6}
              xl={6}
              lg={6}
              md={12}
              sm={24}
              xs={24}
            >
              <Card
                hoverable
                cover={
                  <img
                    style={{ objectFit: "cover" }}
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
          );
        })}
      </Row>
      <Divider orientation="center">
        ANT Design Table | Basket:{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {basket.length}
        </span>
      </Divider>
      <Button
        onClick={() => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              setBasket([]);
              localStorage.removeItem("basket");
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }}
        style={{ display: "block", margin: "20px auto" }}
        variant="contained"
        color="error"
      >
        Clear Basket
      </Button>
      <Button
        style={{ display: "block", margin: "20px auto" }}
        variant="contained"
        color="success"
        onClick={() => {
          showModal();
        }}
      >
        Add Supplier
      </Button>
      <Table
        style={{ width: "80%", margin: "0 auto" }}
        columns={columns}
        dataSource={suppliers}
        onChange={onChange}
      />
      <Modal
        title="Supplier Post Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
          <TextField
            name="companyName"
            value={newSupplier.companyName}
            onChange={(e) => handleChange(e)}
            style={{ marginRight: "10px" }}
            label="Company Name"
            variant="outlined"
          />
          <TextField
            name="contactTitle"
            value={newSupplier.contactTitle}
            onChange={(e) => handleChange(e)}
            label="Contact Title"
            variant="outlined"
          />
          <TextField
            name="postalCode"
            onChange={(e) => handleChange(e)}
            value={newSupplier.postalCode}
            label="Postal Code"
            type="number"
            variant="outlined"
          />
      </Modal>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
