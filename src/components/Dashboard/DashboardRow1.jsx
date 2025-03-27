import React, { useEffect, useState } from "react";
import lapsLogo from "../../assets/img/loan.png";
import {
  ClaimRankReward,
  FundingWalletStakingReward,
  getDailyReward,
  RankTotalReward,
  RewardWallet,
  StakingTotalReward,
  UserClaimStakeReward,
  UserData,
} from "../web3";
import { BiBorderRadius, BiSolidUserAccount } from "react-icons/bi";
import { GiConsoleController, GiLevelEndFlag } from "react-icons/gi";
import { RiRefund2Line } from "react-icons/ri";
import { RiFundsBoxLine } from "react-icons/ri";
import { RiExchangeFundsFill } from "react-icons/ri";
import { useAccount } from "wagmi";
import { cutAfterDecimal } from "../web3";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deal from "../../assets/img/deal (1).png";
import { RiWallet3Line } from "react-icons/ri";
import { RiLoginBoxLine } from "react-icons/ri";
import bg1 from "../../assets/img/9155702.jpg";
import bg2 from "../../assets/img/businessman-touching-red-icon-connected.jpg";
import bg3 from "../../assets/img/SL-0212121-40670-68.jpg";
import id from "../../assets/img/id.png";
import sponsor from "../../assets/img/deal.png";
import rankImg from "../../assets/img/high-quality.png";
import DateID from "../../assets/img/3d-calendar.png";
import Ref from "../../assets/img/bonus.png";
import rankReward from "../../assets/img/reward.png";
import Stake from "../../assets/img/saving.png";
import Login from "../../assets/img/profile-protection.png";
import FundReward from "../../assets/img/money.png";
import FundWallet from "../../assets/img/wallet.png";
import Reward from "../../assets/img/reward (1).png";
import Future from "../../assets/img/old-age.png";
import { PiHandDepositBold } from "react-icons/pi";
import ApexChart from "../Chart/Radar";
import axios from "axios";
import { apiUrl } from "../Config";

function DashboardRow1() {
  // const { tokenData } = useSelector((state) => state.bitgold);
  // const tokenDecimals = tokenData?.decimals;
  const { dashboardData } = useSelector((state) => state.bitgold);
  // const { walletAddress } = wallet;
  // const address = walletAddress;
  const { address } = useAccount();
  console.log(dashboardData, "dataaa");
  const { userDetails,directteam,allteam,directincome,levelIncome,totalincome,todayBonus , directincomeun5 , levelincomeun5} = dashboardData;
  // const [dashboard, setDashboard] = useState();
  // const [rewardData, setRewardData] = useState();
  // const [isDivEnabled, setIsDivEnabled] = useState(false);
  // const [tstakeData, setTstakeData] = useState();
  // const [Rankward, setRankWard] = useState();
  // const [walletBal, setWalletBal] = useState("");
  // const [FundWReward, setFundWReward] = useState();
  // const [dateType, setDateType] = useState("Yearly");
  // const [IncomeOverview, setIncomeOverview] = useState({});

  // const [packageValue, setPackageValue] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const { config, TokenAddress, accessAddress } = useAccount();

  // const getReawrd = async () => {
  //   try {
  //     const reward = await getDailyReward();
  //     if (reward) {
  //       toast.success("Boost successfully!", {
  //         duration: 3000,
  //         position: "top-right",
  //         style: {
  //           background: "#4caf50",
  //           color: "#fff",
  //         },
  //       });
  //     }
  //   } catch (error) {}
  // };
  // const appToken = async (amt) => {
  //   try {
  //     const res = tokenApprove(amt, TokenAddress, tokenDecimals);
  //     await toast.promise(res, {
  //       loading: "Waiting for confirmation...",
  //       success: "Success!",
  //       error: "error",
  //     });
  //     return res;
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // };

  // async function fetchData(address) {
  //   try {
  //     let data = await UserData(address);
  //     setDashboard(data);
  //     let stakeDta = await StakingTotalReward(address);
  //     setTstakeData(Number(stakeDta));
  //     let RankReward = await RankTotalReward(address);
  //     setRankWard(Number(RankReward));
  //     let FundWalletReward = await FundingWalletStakingReward(address);
  //     setFundWReward(Number(FundWalletReward));
  //   } catch (error) {
  //     setDashboard(false);
  //     if (address) fetchData(address);
  //     setTstakeData(false);
  //     setRankWard(false);
  //     setFundWReward(false);
  //   }
  // }

  // console.log(FundWReward, "[[[[[[[[[[[[[[[");

  // useEffect(() => {
  //   if (address) fetchData(address);
  // }, [address]);

  // async function fetchRewardWallet(address) {
  //   try {
  //     let data = await RewardWallet(address);
  //     setRewardData(data);
  //   } catch (error) {
  //     setRewardData(false);
  //   }
  // }
  // const handleButtonClick = (value) => {
  //   setPackageValue(value);
  // };

  // const handleInputChange = (event) => {
  //   setPackageValue(event.target.value);
  // };
  // function getButtonClass(value) {
  //   switch (value) {
  //     case "10":
  //       return "primary3-light";
  //     case "50":
  //       return "secondary-light";
  //     case "100":
  //       return "warning-light";
  //     case "200":
  //       return "orange-light";
  //     case "500":
  //       return "primary2-light";
  //     default:
  //       return "default";
  //   }
  // }

  // const Stake = async (amt) => {
  //   try {
  //     setIsLoading(true);
  //     if (!address) {
  //       setIsLoading(false);
  //       return toast.error("Please connect wallet");
  //     }
  //     if (!packageValue) {
  //       setIsLoading(false);
  //       return toast.error("Enter Package Value");
  //     }
  //     const balance = await getBalance(config, {
  //       address: address,
  //       token: TokenAddress,
  //     });

  //     const walletBalance = parseFloat(balance.formatted);

  //     if (walletBalance <= amt) {
  //       setIsLoading(false);
  //       return toast.error("Insufficient Balance");
  //     }

  //     const allowance = await checkAllowance(address, TokenAddress);
  //     let appRes;

  //     if (amt > allowance / Number("1e" + tokenDecimals)) {
  //       appRes = await appToken(amt);
  //     } else {
  //       appRes = true;
  //     }

  //     if (appRes) {
  //       const buy = UpgradeAmount(amt, tokenDecimals);
  //       await toast.promise(buy, {
  //         loading: "Buying...",
  //         success: "Success!",
  //         error: "Error",
  //       });
  //       setIsLoading(false);
  //     } else {
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     if (error.message.includes("User rejected the request.")) {
  //       toast.error("User rejected the request.");
  //     } else {
  //       toast.error("Something Went Wrong!");
  //     }
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (address) fetchRewardWallet(address);
  // }, [address]);

  // useEffect(() => {
  //   // Ensure dashboard data exists
  //   if (dashboard && dashboard[13]?.lastClaimedTime) {
  //     const lastClaimedTime = Number(dashboard[13].lastClaimedTime) * 1000; // Convert to milliseconds
  //     const currentTimeMs = Date.now();
  //     const twentyFourHoursMs = 24 * 60 * 60 * 1000;

  //     // Check if 24 hours have passed
  //     if (currentTimeMs > lastClaimedTime + twentyFourHoursMs) {
  //       setIsDivEnabled(true); // Enable the div
  //     }
  //   }
  // }, [dashboard]);

  // Matrix Income
  
  const [totalAmount, setTotalAmount] = useState(0);
  const [percent,setPercent] = useState(0)
  // console.log("percent",percent)
  const getMatrixIncome = async () => {
    try {
      const response = await axios.get(apiUrl + "/matrixincome", {
        params: {
          userId: address,
          matrix: 1,
        },
      });
      if (response?.status === 200) {
        const incomeData = response?.data?.user_income || [];
        const amounts = incomeData.map((item) => item.amount);
        const total = amounts.reduce((acc, num) => acc + num, 0);

        setTotalAmount(total/1e18);
        setPercent(total > percent ? total/1e18 : percent)
        console.log("percent",percent)
        console.log(totalAmount, "totalAmt");
        // setTotalPages(response?.data?.totalPages);
      } else {
        setDirectUser([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  useEffect(() => {
    if (address) getMatrixIncome();
  }, [address]);

  return (
    <>
      <div className="row mb-2 justify-content-between ">
        <div
          className="row col-sm-12 col-md-12 col-lg-12 left-row-cards"
          style={{ paddingRight: "0px"}}
        >
          <div className="col-sm-6 col-lg-4">
            <div className="">
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-between">
                  <div>
                    <div className="d-flex gap-2">
                      <span className="d-block mb-1">User ID</span>
                      {/* <div
                        className="text-success badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 "
                        style={{
                          width: "fit-content",
                          height: "fit-content",
                          cursor: "pointer",
                        }}
                      >
                        Monthly Activated
                      </div> */}
                    </div>
                    <h6 className="mb-0 fw-semibold">{userDetails?.userId || "No User"}</h6>
                  </div>
                  <div>
                    <span className="text-primary">
                      <img src={id} alt="" style={{ width: "40px" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-between">
                  <div>
                    <span className="d-block mb-1">Upline Id</span>
                    <h6 className="mb-0 fw-semibold">
                      {userDetails?.referrerId || "No Sponsor"}
                    </h6>
                  </div>
                  <div>
                    <span className="text-primary1">
                      <img src={sponsor} alt="" style={{ width: "40px" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-between">
                  <div>
                    <span className="d-block mb-1">Uwn6 Rank</span>
                    <h6 className="mb-0 fw-semibold">
                      {/* {dashboard && Number(dashboard[3])} */}
                      {userDetails?.rank || "N/A"}
                    </h6>
                  </div>
                  <div>
                    <span className="text-primary2">
                      <img src={rankImg} alt="" style={{ width: "40px" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-between">
                  <div>
                    <span className="d-block mb-1">ID Date</span>
                    <h6 className="mb-0 fw-semibold">
                      {new Date(userDetails?.createdAt).toLocaleDateString()}
                    </h6>
                  </div>
                  <div>
                    <span className="text-primary2">
                      <img src={DateID} alt="" style={{ width: "40px" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="col-sm-6 col-lg-4">
                <div className="">
                  <div className="card custom-card school-card">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      <div>
                        <span className="d-block mb-1">Direct Team</span>
                        <h6 className="mb-0 fw-semibold">
                          {directteam || 0}
                        </h6>
                      </div>
                      <div>
                        <span className="text-primary">
                          <img src={Ref} alt="" style={{ width: "40px" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div>
                  <div className="card custom-card school-card">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      <div>
                        <span className="d-block mb-1">All Team</span>
                        <div className="d-flex gap-3">
                          <h6 className="mb-0 fw-semibold">
                            {allteam || 0}
                          </h6>
                          {/* <span
                            className="text-primary badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2"
                            style={{ cursor: "pointer" }}
                            // onClick={ClaimRankReward}
                          >
                            Claim
                          </span> */}
                        </div>
                      </div>
                      <div>
                        <span className="text-primary1">
                          <img src={Login} alt="" style={{ width: "40px" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                      <div className="">
                        <div className="card custom-card school-card">
                          <div className="card-body d-flex gap-2 justify-content-between">
                            <div>
                              <span className="d-block mb-1">Direct Refferal income</span>
                              <h6 className="mb-0 fw-semibold">
                              $ {dashboardData?.sponsor_income}
                              </h6>
                            </div>
                            <div>
                              <span className="text-primary">
                                <img src={Ref} alt="" style={{ width: "40px" }} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-between">
                  <div>
                    <span className="d-block mb-1">Total Income</span>
                    <div className="">
                      <h6 className="mb-0 fw-semibold">
                        {/* {(dashboard &&
                          Number(dashboard[11].fundingWallet) /
                            ("1e" + tokenDecimals)) ||
                          0.0} */}
                          $ {totalincome || 0}
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-primary2">
                      <img src={FundWallet} alt="" style={{ width: "40px" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="">
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-between">
                  <div>
                    <span className="d-block mb-1">Today Income</span>
                    <div className="">
                      {" "}
                      <h6 className="mb-0 fw-semibold">
                        $ {todayBonus || 0}
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-primary">
                      <img src={Reward} alt="" style={{ width: "40px" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
              <div className="col-sm-6 col-lg-4">
                <div>
                  <div className="card custom-card school-card">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      <div>
                        <span className="d-block mb-1">Direct Income (Uwn4)</span>
                        <div className="d-flex gap-3">
                          <h6 className="mb-0 fw-semibold">
                           $ {directincome || 0}
                          </h6>
                          {/* <span
                            className="text-warning badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2"
                            style={{ cursor: "pointer" }}
                            // onClick={UserClaimStakeReward}
                          >
                            Claim
                          </span> */}
                          <div>
                            <span
                              className="text-primary1"
                              style={{
                                position: "absolute",
                                right: "15px",
                                top: "15px",
                              }}
                            >
                              <img
                                src={FundReward}
                                alt=""
                                style={{ width: "40px" }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-primary2">
                          <img src={Stake} alt="" style={{ width: "40px" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="">
                  <div className="card custom-card school-card">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      <div>
                        <span className="d-block mb-1">Level Income (Uwn4)</span>
                        <div className="d-flex gap-1">
                          <h6 className="mb-0 fw-semibold">
                          $ {levelIncome || 0}
                          </h6>
                          {/* {isDivEnabled && (
                            <span
                              className="text-info badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2"
                              style={{ cursor: "pointer" }}
                              // onClick={getReawrd}
                            >
                              Claim
                            </span>
                          )} */}
                        </div>
                      </div>
                      <div>
                        <span className="text-primary">
                          <img src={rankReward} alt="" style={{ width: "40px" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div>
                  <div className="card custom-card school-card">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      <div>
                        <span className="d-block mb-1">Direct Income (Uwn5)</span>
                        <div className="d-flex gap-3">
                          <h6 className="mb-0 fw-semibold">
                          $ {directincomeun5 || 0}
                          </h6>
                          {/* <span
                            className="text-warning badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2"
                            style={{ cursor: "pointer" }}
                            // onClick={UserClaimStakeReward}
                          >
                            Claim
                          </span> */}
                          <div>
                            <span
                              className="text-primary1"
                              style={{
                                position: "absolute",
                                right: "15px",
                                top: "15px",
                              }}
                            >
                              <img
                                src={FundReward}
                                alt=""
                                style={{ width: "40px" }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-primary2">
                          <img src={Stake} alt="" style={{ width: "40px" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div>
                  <div className="card custom-card school-card">
                    <div className="card-body d-flex gap-2 justify-content-between">
                      <div>
                        <span className="d-block mb-1">Level Income (Uwn5)</span>
                        <div className="d-flex gap-3">
                          <h6 className="mb-0 fw-semibold">
                          $ {levelincomeun5 || 0}
                          </h6>
                          {/* <span
                            className="text-warning badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2"
                            style={{ cursor: "pointer" }}
                            // onClick={UserClaimStakeReward}
                          >
                            Claim
                          </span> */}
                          <div>
                            <span
                              className="text-primary1"
                              style={{
                                position: "absolute",
                                right: "15px",
                                top: "15px",
                              }}
                            >
                              <img
                                src={FundReward}
                                alt=""
                                style={{ width: "40px" }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-primary2">
                          <img src={Stake} alt="" style={{ width: "40px" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          {/* <div className="col-sm-6 col-lg-6">
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header d-flex justify-content-between">
                    <div>
                      <h5 className="modal-title" id="exampleModalLabel">
                        Fund Wallet Stake
                      </h5>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                  <div className="modal-body">
                    <div className="col-xl-12">
                      <label
                        for="signup-firstname"
                        className="form-label text-default"
                      >
                        Stake Amount<sup className="fs-12 text-danger">*</sup>
                      </label>
                      <input
                        type="Number"
                        className="form-control"
                        id="signup-firstname"
                        placeholder="Enter Stake Amount"
                      />
                    </div>
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button type="button" className="btn btn-primary w-50">
                      Deposit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-between">
                  <div>
                    <span className="d-block mb-1" style={{ fontSize: "14px" }}>
                      Fund Wallet Reward
                    </span>
                    <div className="d-flex gap-3">
                      <h6 className="mb-0 fw-semibold">
                        ${" "}
                        {FundWReward &&
                          FundWReward / Number("1e" + tokenDecimals)}
                      </h6>
                      <span
                        className="text-info badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 px-2 "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        style={{ cursor: "pointer" }}          <div className="col-sm-6 col-lg-6">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-center">
                <a href="https://app.uniswap.org/swap">
                  <button className="btn-buyCrpto w-100">SELL CRYPTO</button>
                </a>
                </div>
              </div>
            </div>
          </div>
                        // onClick={getReawrd}
                      >
                        Deposit
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-primary1">
                      <img src={FundReward} alt="" style={{ width: "40px" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
         
                 <div className="col-sm-6 col-lg-4">
                            <div className="">
                              <div className="card custom-card school-card">
                                <div className="card-body d-flex gap-2 justify-content-between">
                                  <div>
                                    <div className="d-flex gap-2">
                                      <span className="d-block mb-1">Uw income</span>
                                      {/* <div
                                        className="text-success badge bg-success-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 "
                                        style={{
                                          width: "fit-content",
                                          height: "fit-content",
                                          cursor: "pointer",
                                        }}
                                      >
                                        Monthly Activated
                                      </div> */}
                                    </div>
                                    <h6 className="mb-0 fw-semibold">$ {dashboardData?.uw_total_income}</h6>
                                  </div>
                                  <div>
                                    <span className="text-primary">
                                      <img src={id} alt="" style={{ width: "40px" }} />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div>
                              <div className="card custom-card school-card">
                                <div className="card-body d-flex gap-2 justify-content-between">
                                  <div>
                                    <span className="d-block mb-1">Uwn1  income</span>
                                    <h6 className="mb-0 fw-semibold">
                                    $ {dashboardData?.uwn1_total_income}
                                    </h6>
                                  </div>
                                  <div>
                                    <span className="text-primary1">
                                      <img src={sponsor} alt="" style={{ width: "40px" }} />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
          {/* <div className="col-sm-6 col-lg-6">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-between">
                  <div>
                    <span className="d-block mb-1">Future Wallet</span>
                    <h6 className="mb-0 fw-semibold">
                      0
                    </h6>
                  </div>
                  <div>
                    <span className="text-primary1">
                      <img src={Future} alt="" style={{ width: "40px" }} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-sm-6 col-lg-6">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-center">
                <a href="#stakeID">
                  <button className="btn-buyCrpto w-100">STAKE</button>
                </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-sm-6 col-lg-6">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-center">
                <a href="https://app.uniswap.org/swap">
                  <button className="btn-buyCrpto w-100">BUY CRYPTO</button>
                </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-sm-6 col-lg-6">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-center">
                <Link to="/Withdraw" style={{ cursor: "pointer" }}>
                  <button className="btn-buyCrpto w-100 ">
                    TRANSFER REWARD
                  </button>
                </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-sm-6 col-lg-6">
            <div>
              <div className="card custom-card school-card">
                <div className="card-body d-flex gap-2 justify-content-center">
                <a href="https://app.uniswap.org/swap">
                  <button className="btn-buyCrpto w-100">SELL CRYPTO</button>
                </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>

     

        {/* <div className="col-sm-12 col-md-12 col-lg-4">
          <div
            className="card custom-card overflow-hidden"
            style={{ height: "503px" , marginBottom: "0" }}
          >
            <div className="card-header justify-content-between">
              <div className="card-title">Income Overview</div>
              <div className="dropdown">
                <div
                  className="btn btn-light border btn-full btn-sm "
                  data-bs-toggle="dropdown"
                  style={{ color: "white" }}
                >
                  {dateType}
                  <i className="ti ti-chevron-down ms-1"></i>
                </div>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a
                      className="dropdown-item "
                      onClick={() => setDateType("Yearly")}
                    >
                      Yearly
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-light"
                      onClick={() => setDateType("Weekly")}
                    >
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item "
                      onClick={() => setDateType("Monthly")}
                    >
                      Monthly
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body px-0">
              <div
                id="Leads-overview"
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "369px" }}
              >
                <ApexChart
                  totalCoreIncome={IncomeOverview?.refrealRewardPercentage || 0}
                  totalGlobleIncome={IncomeOverview?.rankBonusPercentage || 0}
                  totalFortuneIncome={
                    IncomeOverview?.dailyStakingPercentage || 0
                  }
                  totalAllIncome={
                    IncomeOverview?.dialyloginRewardPercentage || 0
                  }
                  funWallet={IncomeOverview?.fundWalletPercentage || 0}
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Income Box + Stake */}
        {/* <div className="col-sm-12 col-md-5 col-lg-5">
          <div
            className="card custom-card overflow-hidden"
            style={{ height: "95%" }}
          >
            <div className="card-header justify-content-left">
              <p className="mb-0 card-title">Upgrade Package</p>
            </div>
            <div className="card-body p-0">
              <div className="p-4 m-2 rounded-2 bg-primary text-fixed-white bg-crypto-balance">
                <div className="d-flex align-items-center gap-2 justify-content-between">
                  <div>
                    <div className="mb-1 op-9">Total Wallet Balance</div>
                    <h4 className="text-fixed-white mb-1 fw-medium me-2">
                      ${walletBal ? Number(walletBal)?.toFixed(2) : "0.00"} USDT
                    </h4>
                    <span className="op-7 fs-12">Increased by </span>
                    <span className="badge bg-success mt-2 text-fixed-white p-1 text-end ms-1">
                      <i className="ti ti-trending-up me-2"></i>12.2%
                    </span>
                  </div>
                  <div className=" text-end">
                    <div className="avatar avatar-lg bg-primary1 shadow">
                      <i className="ri-bank-line fs-4 lh-1"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-0">
                <div className="col ">
                  <div className="p-3">
                    <div className="d-flex align-items-center justify-content-start gap-3">
                      <span className="avatar avatar-md bg-primary2">
                        <i className="ri-arrow-left-down-fill fs-20"></i>
                      </span>
                      <div>
                        <div className="fw-medium ">Total Stake</div>
                        <h5 className="mb-0">
                          ${" "}
                          {(dashboard &&
                            Number(dashboard[4]) /
                              Number("1e" + tokenDecimals)) ||
                            0.0}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <div className="d-flex align-items-center justify-content-end gap-3">
                      <span className="avatar avatar-md bg-primary3">
                        <PiHandDepositBold />
                      </span>
                      <div>
                        <div className="fw-medium ">Min.. Stake</div>
                        <h5 className="mb-0">$07 USD</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body p-3 pt-0 d-flex flex-column justify-content-center align-items-center">
              <div className="row gy-3 w-100 px-0">
                <div className="col-xl-12 p-0">
                  <div className="position-relative">
                    <input
                      type="number"
                      className="form-control"
                      id="signup-package"
                      placeholder="Enter Package Amount"
                      value={packageValue}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-xl-12 p-0">
                  <div className="d-flex justify-content-center gap-4 stake-amt-buttons align-items-center">
                    {["10", "50", "100", "200", "500"].map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`btn btn-${getButtonClass(value)} btn-wave`}
                        value={value}
                        onClick={() => handleButtonClick(value)}
                      >
                        $ {value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cc mt-3 d-grid btn btn-outline-primary address-notconnected-btn d-flex justify-content-center align-items-center">
                {isLoading ? (
                  <span className="p-2">
                    <span className="spinner-border text-light" role="status">
                      <span className="sr-only"></span>
                    </span>
                  </span>
                ) : (
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                    }}
                    className="btn btn-primary w-100 text-light stakebtn"
                    onClick={() => Stake(packageValue)}
                    disabled={accessAddress}
                  >
                    Stake
                  </button>
                )}
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="col-md-12 col-lg-6 ">
          <div className="d-flex flex-wrap gap-3">
            <div className="d-flex gap-3">
              <div className="col-lg-6">
                <img
                  src={bg1}
                  alt=""
                  className="h-100 w-100"
                  style={{ borderRadius: "15px" }}
                />
              </div>
              <div className="col-lg-6 ">
                <img
                  src={bg2}
                  alt=""
                  className="w-100 h-100"
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>
            <div
              className="col-lg-12 d-flex justify-content-center align-items-center col-12-img"
              style={{ height: "270px" }}
            >
              <img
                src={bg3}
                alt=""
                className="h-100 w-100"
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className="d-flex gap-3">
              <div className="col-lg-6">
                <img
                  src={bg1}
                  alt=""
                  className="h-100 w-100"
                  style={{ borderRadius: "15px" }}
                />
              </div>
              <div className="col-lg-6">
                <img
                  src={bg2}
                  alt=""
                  className="h-100 w-100"
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default DashboardRow1;
