import axios from "axios";
import { Order, OrderData } from "../components/interfaces";
import { Product, ProductData } from "../components/interfaces";

const INPIPELINE_URL = '/api/orders/inpipeline';

const getInPipelineData = async () => {
    const orderData: OrderData = {
      Queued: [],
      InProgress: [],
      QA: [],
    };
    let errorOccured = false;
    try {
      const response = await axios.get(INPIPELINE_URL);
      if (response?.status === 200) {
        const { data } = response.data;
        data.forEach((order: Order) => {
          orderData[order.OrderStatus as keyof OrderData].push(order);
        });
      } else {
        const { message } = response.data;
        throw message;
      }
    } catch(err) {
      console.error(err);
      errorOccured = true;
    }
    return { orderData, errorOccured };
};

const UPDATE_STATUS_URL = '/api/orders/update_status';

const updateOrderStatus = async (order: Order, newOrderStatus: string) => {
    const updatedOrder = { ...order, OrderStatus: newOrderStatus };
    let orderStatusUpdated = false;
    try {
        const response = await axios.post(UPDATE_STATUS_URL, updatedOrder);
        if (response?.status === 200) orderStatusUpdated = true;
        else {
            const { message } = response.data;
            throw message;
        }
    } catch(err) {
        console.error(err);
    }
    return orderStatusUpdated;
};

const INPIPELINE_URL_PRODUCT = '/api/products/inpipeline';

const getInPipelineDataProduct = async () => {
    const productData: ProductData = {
        Active: [],
        InActive: [],
    };
    let errorOccured = false;
    try {
        const response = await axios.get(INPIPELINE_URL_PRODUCT);
        if (response?.status === 200) {
            const { data } = response.data;
            data.forEach((product: Product) => {
                productData[product.ProductStatus as keyof ProductData].push(product);
            });
        } else {
            const { message } = response.data;
            throw message;
        }
    } catch(err) {
        console.error(err);
        errorOccured = true;
    }
    return { productData, errorOccured };
};

const UPDATE_STATUS_URL_PRODUCT = '/api/products/update_status';

const updateProductStatus = async (product: Product, newProductStatus: string) => {
    const updatedProduct = { ...product, ProductStatus: newProductStatus };
    let productStatusUpdated = false;
    try {
        const response = await axios.post(UPDATE_STATUS_URL_PRODUCT, updatedProduct);
        if (response?.status === 200) productStatusUpdated = true;
        else {
            const { message } = response.data;
            throw message;
        }
    } catch(err) {
        console.error(err);
    }
    return productStatusUpdated;
};

export {
    getInPipelineData,
    INPIPELINE_URL,
    updateOrderStatus,
    UPDATE_STATUS_URL,
    getInPipelineDataProduct,
    INPIPELINE_URL_PRODUCT,
    updateProductStatus,
    UPDATE_STATUS_URL_PRODUCT
};