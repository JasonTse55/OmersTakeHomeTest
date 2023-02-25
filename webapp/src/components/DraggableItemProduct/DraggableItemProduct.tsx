import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { DraggableItemPropsProduct } from '../interfaces';

const DraggableItemProduct = (props: DraggableItemPropsProduct) => (
    <div
        ref={props.draggableProvided.innerRef}
        {...props.draggableProvided.draggableProps}
        {...props.draggableProvided.dragHandleProps}
        className='bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full'
        data-testid={`draggable-container-${props.ProductID}`}
    >
        <div>
            <span data-testid={`draggable-productID-${props.ProductID}`}>{ props.ProductID }</span>
            <br/>
            <span data-testid={`draggable-productName-${props.ProductID}`}>{ props.ProductName }</span>
            <img data-testid={`draggable-productPhotoURL-${props.ProductID}`} src={ props.ProductPhotoURL } alt={ props.ProductName } style={{borderRadius: "4px", height: "150px", width: "150px"}}></img>
        </div>
        {(() => {
            const { ProductID, ProductName, ProductPhotoURL, ProductStatus, removeProduct } = props;
            return (
                <button onClick={() => removeProduct({ ProductID, ProductName, ProductPhotoURL, ProductStatus })}>
                    <FontAwesomeIcon
                        icon={ProductStatus === 'InActive' ? faSquareCheck : faSquareXmark}
                        className={`${ProductStatus === 'InActive' ? 'text-green-600' : 'text-red-600'} fa-lg`}
                        data-testid={`draggable-btn-${props.ProductID}`}
                    />
                </button>
            );
        })()}
    </div>
);

export default DraggableItemProduct;