import React, { useState } from "react";


export const CardMap = ({ data, HandleDelete, AddtoCard, Ayiruv,total }) => {
 

  return (
    <div>
      <div className="row mt-3">
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, index) => (
              <tr key={i.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                  <img src={i.img} style={{ width: "4rem" }} />
                </th>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td>
                  <button
                    onClick={() => Ayiruv(i.id)}
                    className="btn btn-primary btn-sm"
                  >
                    -
                  </button>
                  <button className="btn btn-secondary"> {i.qty} </button>
                  <button
                    onClick={() => AddtoCard(i)}
                    className="btn btn-primary btn-sm"
                    size="sm"
                  >
                    +
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => HandleDelete(i.id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col text-center">
          <h4>TOTAL: {total} $</h4>
        </div>
      </div>
    </div>

    // <div>
    //   <div>{data.length===0 && "cart is empty"}</div>

    //     {data.map((value)=>(
    //         <>
    //         <img src={value.img}/>
    //         <button onClick={()=>HandleDelete(value.id)}>Delete</button>
    //         {value.qty} x {value.price}={value.qty*value.price}
    //         <button onClick={()=> AddtoCard(value)}>+</button>
    //         <button onClick={()=> AddtoCard(value)}>-</button>
    //         </>
    //     ))}
    // </div>
  );
};
