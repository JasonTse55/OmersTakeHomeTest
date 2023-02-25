import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import {INPIPELINE_URL, INPIPELINE_URL_PRODUCT, UPDATE_STATUS_URL, UPDATE_STATUS_URL_PRODUCT} from "../ApiHelper";

export default {
    title: 'Product Page',
    component: ProductsPage,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
    mockData: [
        {
            url: INPIPELINE_URL_PRODUCT,
            method: 'GET',
            status: 200,
            response: {
                data: [
                    {
                        ProductID: 1234,
                        ProductName: 'Hat',
                        ProductPhotoURL: 'https://i.etsystatic.com/34911642/r/il/cad00b/4318930100/il_fullxfull.4318930100_7y54.jpg',
                        ProductStatus: 'Active'
                    },
                    {
                        ProductID: 1235,
                        ProductName: 'Shoes',
                        ProductPhotoURL: 'https://www.brownsshoes.com/dw/image/v2/BFTX_PRD/on/demandware.static/-/Sites-brownsshoes-master-catalog/default/dw0c1cee2a/256066_1.jpg',
                        ProductStatus: 'Active'
                    },
                    {
                        ProductID: 1236,
                        ProductName: 'Pants',
                        ProductPhotoURL: 'https://img1.shopcider.com/product/1655982336000-PHYCSs.jpg',
                        ProductStatus: 'Active'
                    },
                    {
                        ProductID: 1237,
                        ProductName: 'Shirt',
                        ProductPhotoURL: 'https://i.ebayimg.com/images/g/9o4AAOSwV2hjiCR1/s-l1600.jpg',
                        ProductStatus: 'InActive'
                    },
                    {
                        ProductID: 1238,
                        ProductName: 'Coat',
                        ProductPhotoURL: 'https://cdn.shopify.com/s/files/1/0073/6585/3297/products/d63061a1467ee58bab4af482b94ba931.jpg',
                        ProductStatus: 'InActive'
                    }
                ],
                message: ""
            },
        },
        {
            url: UPDATE_STATUS_URL_PRODUCT,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
    mockData: [
        {
            url: INPIPELINE_URL_PRODUCT,
            method: 'GET',
            status: 200,
            response: {
                data: [],
                message: ""
            },
        },
        {
            url: UPDATE_STATUS_URL_PRODUCT,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: INPIPELINE_URL_PRODUCT,
            method: 'GET',
            status: 500,
            response: {
                data: [],
                message: "Error"
            }
        },
        {
            url: UPDATE_STATUS_URL_PRODUCT,
            method: 'POST',
            status: 200,
            response: {
                data: {
                    message: 'Success',
                },
            },
        },
    ],
};
