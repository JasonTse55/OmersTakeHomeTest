import React from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import { create, ReactTestRenderer} from 'react-test-renderer';
import DraggableItemProduct from './DraggableItemProduct';
import {Product} from "../interfaces";

describe('DraggableItemProduct', () => {
  let tree: ReactTestRenderer;
  const ID = '2345';
  beforeEach(() => {
    const draggableProvided: DraggableProvided = ({
        innerRef: () => {},
        draggableProps: {
            'data-rbd-draggable-context-id': '1',
            'data-rbd-draggable-id': '1',
        },
        dragHandleProps: null,
    }); 
    const props = {
      ProductID: 2345,
      ProductName: 'Hat',
      ProductPhotoURL: 'https://i.etsystatic.com/34911642/r/il/cad00b/4318930100/il_fullxfull.4318930100_7y54.jpg',
      ProductStatus: 'Active',
      draggableProvided,
      removeProduct: (product: Product) => {},
  };
    tree = create(<DraggableItemProduct {...props} />);
  });
  afterEach(() => {
    tree.unmount();
  });
  it('rendersDraggableItem', async () => {
    const testInstance = tree.root;
    await testInstance.findByProps({ 'data-testid': `draggable-container-${ID}`});
    await testInstance.findByProps({ 'data-testid': `draggable-productID-${ID}`});
    await testInstance.findByProps({ 'data-testid': `draggable-productName-${ID}`});
    await testInstance.findByProps({ 'data-testid': `draggable-productPhotoURL-${ID}`});
    await testInstance.findByProps({ 'data-testid': `draggable-btn-${ID}`});
  });
});