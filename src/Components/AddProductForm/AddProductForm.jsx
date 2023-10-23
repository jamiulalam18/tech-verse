import {
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
const AddProductForm = () => {
  return (
    <div className="bg-white flex justify-center w-full rounded-lg">
      <form className="flex max-w-md flex-col gap-2 w-full py-4 rounded-lg">
        <div>
          <div className="max-w-md" id="select">
            <div className=" block">
              <Label htmlFor="brand_name" value="Select Brand" />
            </div>
            <Select id="brand_name" required>
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
            placeholder="Product Name"
            required
            type="text"
          />
        </div>

        <div>
          <div className="max-w-md" id="select">
            <div className=" block">
              <Label htmlFor="brand_name" value="Select Product Category" />
            </div>
            <Select id="brand_name" required>
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
            placeholder="Product Image URL 1"
            required
            type="text"
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="product_image_url2" value="Product Image URL 2" />
          </div>
          <TextInput
            id="product_image_url2"
            placeholder="Product Image URL 2"
            required
            type="text"
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="product_price" value="Product Price" />
          </div>
          <TextInput
            id="product_price"
            placeholder="0.00"
            required
            type="number"
          />
        </div>

        <div>
          <div className=" block">
            <Label htmlFor="product_rating" value="Product Rating" />
          </div>
          <TextInput
            id="product_rating"
            placeholder="0.0"
            max={5.0}
            min={0.0}
            required
            type="number"
          />
        </div>

        <div>
          <div className="max-w-md" id="textarea">
            <div className="block">
              <Label
                htmlFor="short_description"
                value="Product Short Description"
              />
            </div>
            <Textarea
              id="short_description"
              placeholder="Write a short description..."
              required
              rows={2}
            />
          </div>
        </div>

        <div>
          <div className="max-w-md" id="textarea">
            <div className="block">
              <Label
                htmlFor="long_description"
                value="Product Details Description"
              />
            </div>
            <Textarea
              id="long_description"
              placeholder="Write a detail description of the product..."
              required
              rows={4}
            />
          </div>
        </div>

        <div>
          <div className="max-w-md" id="textarea">
            <div className="block">
              <Label
                htmlFor="product_highlights"
                value="Product Highlights"
              />
            </div>
            <Textarea
              id="product_highlights"
              placeholder="Write product highlights separated by new lines..."
              required
              rows={4}
            />
          </div>
        </div>

        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
};

export default AddProductForm;
