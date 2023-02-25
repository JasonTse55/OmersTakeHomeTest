import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { INPIPELINE_URL_PRODUCT } from "../ApiHelper";
import { render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductPage from "./ProductsPage";

describe("ProductPage", () => {
    it("shouldDisplayLoadingSpinner", () => {
        render(
            <MemoryRouter>
                <ProductPage />
            </MemoryRouter>
        );
        expect(screen.getByTestId(`loading-spinner-container`)).toBeInTheDocument();
    });
    it("shouldDisplayPipelineContainer", async() => {
        // set up mock for axios.get
        const response = {
            data: [
                {
                    ProductID: 1234,
                    ProductName: 'Hat',
                    ProductPhotoURL: 'https://i.etsystatic.com/34911642/r/il/cad00b/4318930100/il_fullxfull.4318930100_7y54.jpg',
                    ProductStatus: 'Active'
                },
            ],
            message: ""
        };
        const server = setupServer(
          rest.get(INPIPELINE_URL_PRODUCT, (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(response));
          })
        );
        server.listen();
        render(
            <MemoryRouter>
                <ProductPage />
            </MemoryRouter>
        );
        await waitFor(() => {
            expect(screen.getByTestId(`pipeline-container`)).toBeInTheDocument();
        });
        server.close();
    });
    it("shouldDisplayErrorMessage", async() => {
        // set up mock for axios.get
        const response = {
            data: [],
            message: "Error"
        };
        const server = setupServer(
          rest.get(INPIPELINE_URL_PRODUCT, (req, res, ctx) => {
            return res(ctx.status(500), ctx.json(response));
          })
        );
        server.listen();
        render(
            <MemoryRouter>
                <ProductPage />
            </MemoryRouter>
        );
        
        await waitFor(() => {
            expect(screen.getByTestId(`error-container`)).toBeInTheDocument();
        });
        server.close();
    });
});