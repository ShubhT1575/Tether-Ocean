import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../Config";
import { useSelector } from "react-redux";

function CoreBody() {
  const { wallet } = useSelector((state) => state.bitgold);
  const { walletAddress, isConnected } = wallet;
  const address = walletAddress;
  const [directUser, setDirectUser] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // console.log(directUser, "directUser");
  // const handleNextPage = () => {
  //   setCurrentPage((prevPage) =>
  //     prevPage < totalPages ? prevPage + 1 : prevPage
  //   );
  // };

  // const handlePreviousPage = () => {
  //   setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  // };

  // const getCoreIncome = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/getDailyIncomeList", {
  //       params: {
  //         address: address,
  //         page: currentPage,
  //       },
  //     });
  //     if (response?.data?.status === 200) {
  //       setDirectUser(response?.data?.data);
  //       // console.log(response?.data ,'==================');
  //       setTotalPages(response?.data?.totalPages);
  //     } else {
  //       setDirectUser([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };
  // useEffect(() => {
  //   if (address) getCoreIncome();
  // }, [address, currentPage]);

  // 0x14a10af09768Bc2b02d067D9a77AAC072E84812A

  const [directTeam,setDirectTeam] = useState([])
  const getDirectTeam = async(address)=>{
    const res = await axios.get(apiUrl + "/directmember",{
      params:{
        walletAddress: address,
      }
    })
    if(res){
      console.log(res?.data,"directTeam")
      setDirectTeam(res?.data)
    }
  }
  useEffect(()=>{
    if(address){
      getDirectTeam(address);
    }
  },[address])
      const itemsPerPage = 10; // Change this to modify items per page
      const [currentPage, setCurrentPage] = useState(1);
    
      const totalPages = Math.ceil(directTeam.length / itemsPerPage);
    
      const paginatedLevels = directTeam.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      // Handle previous page
      const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      };
    
      // Handle next page
      const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
      };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card custom-card overflow-hidden">
          <div className="card-header justify-content-between">
            <div className="card-title">Direct Team Data</div>
          </div>

          <div className="card-body active-tab">
            <div className="table-responsive">
              <table className="table table-bordered text-nowrap mb-0">
                <thead>
                  <tr>
                  {/* <th scope="col">S.NO</th> */}
                    <th scope="col" className="text-primary">User ID</th>
                    <th scope="col" className="text-primary">User Address</th>
                    <th scope="col" className="text-primary">Refferal ID</th>
                    <th scope="col" className="text-primary">Refferal Address</th>
                    <th scope="col" className="text-primary">Rank</th>
                    <th scope="col" className="text-primary">Direct Count</th>
                    {/* <th scope="col">Amount</th> */}
                    {/* <th scope="col">Level</th> */}
                    <th scope="col" className="text-primary">Joining Date</th>
                    {/* <th scope="col">Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {paginatedLevels?.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        {/* <td>{index + 1}</td> */}
                        <td>{item?.userId}</td>
                        <td className="text-warning">
                          {item?.user.slice(0, 5)}...{item?.user.slice(-5)}
                        </td>
                        <td>{item?.referrerId}</td>
                        <td className="text-warning">
                          {item?.referrer.slice(0, 5)}...{item?.referrer.slice(-5)}
                        </td>
                        <td>{item?.slot_rank}</td>
                        <td>{item?.directCount}</td>
                        {/* <td>
                          <a
                            href={`https://opbnb-testnet.bscscan.com/tx/${item?.txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "rgb(0, 119, 181)" }}
                          >
                            {item?.txHash.slice(0, 6)}...
                            {item?.txHash.slice(-6)}
                          </a>
                        </td> */}
                        {/* <td>$ {item.reward}</td> */}
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
              {directTeam?.length === 0 && (
                <div className=" w-100">
                  <div className="w-100 text-center p-3">No Data Found</div>
                </div>
              )}
            </div>
          </div>

          <div className="card-footer pagination-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                Showing {paginatedLevels?.length || 0} Direct Team Data
                <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
              </div>
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
