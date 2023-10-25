/* eslint-disable react/prop-types */
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";
import { successToast } from "./../Toasts/SuccessToast";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { errorToast } from "./../Toasts/ErrorToast";

const UpdateProductForm = ({ product }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [form, setForm] = useState(<></>);

  const {
    _id,
    product_image,
    product_name,
    brand_name,
    product_long_description,
    product_short_description,
    product_highlights,
    product_category,
    product_price,
    product_rating,
  } = product;
  const handleConfirmation = (e) => {
    e.preventDefault();
    setForm(new FormData(e.currentTarget));
    props.setOpenModal("pop-up");
  };

  const handleNoConfirmation = () => {
    props.setOpenModal(undefined);
    errorToast("Product is not updated!!");
  };
  const handleUpdateProduct = () => {
    // e.preventDefault();
    props.setOpenModal(undefined)
    // const form = new FormData(e.currentTarget);
    const brand_name = form.get("brand_name");
    const product_name = form.get("product_name");
    const product_category = form.get("product_category");
    const product_image_url1 = form.get("product_image_url1");
    const product_image_url2 = form.get("product_image_url2");
    const product_price = form.get("product_price");
    const product_rating = form.get("product_rating");
    const product_short_description = form.get("short_description");
    const product_long_description = form.get("long_description");
    const product_highlights_txt = form.get("product_highlights");
    const product_image = [product_image_url1, product_image_url2];
    const product_highlights = product_highlights_txt
      .split("\n")
      .filter((line) => line.trim() !== "");

    const updated_product = {
      brand_name,
      product_name,
      product_category,
      product_image,
      product_highlights,
      product_price,
      product_rating,
      product_short_description,
      product_long_description,
    };
    console.log(updated_product);

    // send data to the server
    fetch(`https://b8a10-brandshop-server-side-jamiulalam18.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updated_product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          successToast("Product updated successfully!!!");
        }
      });
  };
  return (
    <div className="bg-white flex justify-center w-full rounded-lg">
      <form
        onSubmit={handleConfirmation}
        className="flex max-w-md flex-col gap-2 w-full py-4 rounded-lg"
      >
        <div>
          <div className="max-w-md" id="select">
            <div className=" block">
              <Label htmlFor="brand_name" value="Select Brand" />
            </div>
            <Select
              id="brand_name"
              name="brand_name"
              defaultValue={brand_name}
              required
            >
              <option>Apple Inc.</option>
              <option>Samsung Electronics Co., Ltd.</option>
              <option>Huawei Technologies Co., Ltd.</option>
              <option>Microsoft Corporation</option>
              <option>Google LLC</option>
              <option>ASUS Corporation</option>
            </Select>
          </div>
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="product_name" value="Product Name" />
          </div>
          <TextInput
            id="product_name"
            name="product_name"
            placeholder="Product Name"
            required
            type="text"
            defaultValue={product_name}
          />
        </div>

        <div>
          <div className="max-w-md" id="select">
            <div className=" block">
              <Label
                htmlFor="product_category"
                value="Select Product Category"
              />
            </div>
            <Select
              id="product_category"
              name="product_category"
              required
              defaultValue={product_category}
            >
              <option>2-in-1 Tablet</option>
              <option>3D Printer</option>
              <option>All-in-One PC</option>
              <option>Augmented Reality Glasses</option>
              <option>Bluetooth Earbuds</option>
              <option>Chromebook</option>
              <option>Computer Peripheral</option>
              <option>Desktop</option>
              <option>Digital Camera</option>
              <option>External Hard Drive</option>
              <option>Fitness Tracker</option>
              <option>Gaming Chair</option>
              <option>Gaming Console</option>
              <option>Graphics Card</option>
              <option>Laptop</option>
              <option>Media Player</option>
              <option>Monitor</option>
              <option>Robot Vacuum</option>
              <option>Router</option>
              <option>Smartphone</option>
              <option>Smartphone Accessories</option>
              <option>Smart Display</option>
              <option>Smart Doorbell</option>
              <option>Smart Home Security</option>
              <option>Smart Refrigerator</option>
              <option>Smart Speaker</option>
              <option>Smart Thermostat</option>
              <option>Smart TV</option>
              <option>Smartwatch</option>
              <option>Smartphone</option>
              <option>Storage</option>
              <option>Streaming Device</option>
              <option>Tablet</option>
              <option>Wireless Charger</option>
              <option>Wireless Earbuds</option>
              <option>Wireless Headphones</option>
            </Select>
          </div>
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="product_image_url1" value="Product Image URL 1" />
          </div>
          <TextInput
            id="product_image_url1"
            name="product_image_url1"
            placeholder="Product Image URL 1"
            required
            type="text"
            defaultValue={product_image[0]}
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="product_image_url2" value="Product Image URL 2" />
          </div>
          <TextInput
            id="product_image_url2"
            name="product_image_url2"
            placeholder="Product Image URL 2"
            required
            type="text"
            defaultValue={product_image[1]}
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="product_price" value="Product Price" />
          </div>
          <TextInput
            id="product_price"
            name="product_price"
            placeholder="0.00"
            required
            min={0.0}
            max={100000.0}
            step="0.01"
            type="number"
            defaultValue={product_price}
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="product_rating" value="Product Rating" />
          </div>
          <TextInput
            id="product_rating"
            name="product_rating"
            placeholder="0.0"
            max={5.0}
            min={0.0}
            step="0.01"
            required
            type="number"
            defaultValue={product_rating}
          />
        </div>

        <div>
          <div className="max-w-md" id="short_description">
            <div className="block">
              <Label
                htmlFor="short_description"
                value="Product Short Description"
              />
            </div>
            <Textarea
              id="short_description"
              name="short_description"
              placeholder="Write a short description..."
              required
              rows={2}
              defaultValue={product_short_description}
            />
          </div>
        </div>

        <div>
          <div className="max-w-md" id="long_description">
            <div className="block">
              <Label
                htmlFor="long_description"
                value="Product Details Description"
              />
            </div>
            <Textarea
              id="long_description"
              name="long_description"
              placeholder="Write a detail description of the product..."
              required
              rows={4}
              defaultValue={product_long_description}
            />
          </div>
        </div>

        <div>
          <div className="max-w-md" id="product_highlights">
            <div className="block">
              <Label htmlFor="product_highlights" value="Product Highlights" />
            </div>
            <Textarea
              id="product_highlights"
              name="product_highlights"
              placeholder="Write product highlights separated by new lines..."
              required
              rows={4}
              defaultValue={product_highlights.join('\n')}
            />
          </div>
        </div>

        <Button type="submit">Update Product</Button>
      </form>

      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to update this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={handleUpdateProduct}
              >
                Yes, sure
              </Button>
              <Button
                color="gray"
                onClick={handleNoConfirmation}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateProductForm;
