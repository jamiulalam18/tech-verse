import {
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { successToast } from "../Toasts/SuccessToast";
const AddProductForm = () => {

  const handleAddProduct =(e) =>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const brand_name=form.get('brand_name');
    const product_name=form.get('product_name');
    const product_category=form.get('product_category');
    const product_image_url1=form.get('product_image_url1');
    const product_image_url2=form.get('product_image_url2');
    const product_price=form.get('product_price');
    const product_rating=form.get('product_rating');
    const product_short_description=form.get('short_description');
    const product_long_description=form.get('long_description');
    const product_highlights_txt=form.get('product_highlights');
    const product_image=[product_image_url1,product_image_url2]
    const product_highlights=product_highlights_txt.split('\n').filter(line => line.trim() !== '');

    const new_product={brand_name,product_name,product_category,product_image,product_highlights,product_price,product_rating,product_short_description,product_long_description}
    console.log(new_product);

    // send data to the server
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(new_product)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if(data.insertedId){
              successToast("Product inserted successfully!!")
          }
      })
    
  }
  return (
    <div className="bg-white flex justify-center w-full rounded-lg">
      <form onSubmit={handleAddProduct} className="flex max-w-md flex-col gap-2 w-full py-4 rounded-lg">
        <div>
          <div className="max-w-md" id="select">
            <div className=" block">
              <Label htmlFor="brand_name" value="Select Brand" />
            </div>
            <Select id="brand_name" name="brand_name" required>
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
          />
        </div>

        <div>
          <div className="max-w-md" id="select">
            <div className=" block">
              <Label htmlFor="product_category" value="Select Product Category" />
            </div>
            <Select id="product_category" name="product_category" required>
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
            max={100000.00}
            step="0.01"
            type="number"
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
            />
          </div>
        </div>

        <div>
          <div className="max-w-md" id="product_highlights">
            <div className="block">
              <Label
                htmlFor="product_highlights"
                value="Product Highlights"
              />
            </div>
            <Textarea
              id="product_highlights"
              name="product_highlights"
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
