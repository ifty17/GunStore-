import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData, setModalData] = useState({});
    const {gun, countIncrease} = props;
    // console.log(gun)
    const {action, bullet, capacity, category, id, img, name, price} = gun;
    return (
      <div>
        <div className="card w-full h-full bg-base-100 shadow-xl">
          <figure>
            <img className="w-96 h-56" src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <div className="badge badge-outline">{action}</div>
              <div className="badge badge-outline">{bullet}</div>
              <div className="mt-4">
                <button
                  onClick={() => countIncrease()}
                  className="btn btn-sm btn-secondary mr-2"
                >
                  Add to cart
                </button>
                {/* <button className="btn btn-sm btn-success">Details</button> */}
                <label
                  onClick={() => setModalData(gun)}     
                  htmlFor="my-modal-3"
                  className="btn btn-sm modal-button"
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </div>
        {modalData && <Modal data={modalData} setModalData={setModalData}></Modal>}
      </div>
    );
};

export default SingleGun;