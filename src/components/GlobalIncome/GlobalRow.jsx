import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useSelector } from "react-redux";

function CoreBody() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const address = walletAddress;
  const [GlobalIncome, setGlobalIncome] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const getGlobalIncome = async () => {
    try {
      const response = await axios.get(apiUrl + "/recentincome", {
        params: {
          user: address,
          // page: currentPage,
        },
      });
      if (response) {
        setGlobalIncome(response?.data);
        console.log(response?.data,"dataa")
      } else {
        setGlobalIncome([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  console;
  useEffect(() => {
    if (address) getGlobalIncome();
  }, [address, currentPage]);
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden">
          <div className="card-header justify-content-between">
            <div className="card-title">Recent Income Data</div>
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">Sender</th>
                    {/* <th scope="col">Sender</th> */}
                    <th scope="col">Matrix</th>
                    <th scope="col">Level</th>
                    <th scope="col">Amount</th>
                    {/* <th scope="col">Level</th> */}
                    <th scope="col">Time Stamp</th>
                    {/* <th scope="col">Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {GlobalIncome?.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td className="text-warning">{item?.senderUserId}</td>
                        <td>
                            {item?.matrixId}
                        </td>
                        <td>{item?.level == 0 ? "":item?.level}</td>
                        <td>$ {item?.amount/1e18}</td>
                        {/* <td>{item.level}</td> */}
                        <td>{new Date(item?.createdAt).toLocaleString()}</td>
                        {/* <td>
                          <span className="badge bg-success-transparent">
                            success
                          </span>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {GlobalIncome?.length === 0 && (
                    <div className=" w-100">
                      <div className="w-100 text-center p-3">
                          No Data Found.
                      </div>
                    </div>
                  )
              }
            </div>
          </div>

          <div className="card-footer pagination-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>Showing {GlobalIncome?.length || 0} Daily Stake Reward</div>
              <div>
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="pagination mb-0">
                    <button
                      className="btn btn-primary page-item btn-pagination"
                      style={{ marginRight: "10px" }}
                      disabled={currentPage === 1}
                      onClick={handlePreviousPage}
                    >
                      Prev
                    </button>

                    <button
                      className="btn btn-success page-item btn-pagination"
                      disabled={currentPage === totalPages}
                      onClick={handleNextPage}
                    >
                      Next
                    </button>
                  </ul>
                </nav>
              </div>
              <div>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreBody;
