import React, { useState, useEffect } from "react";
import AreaChart from "../Chart/AreaChart";
import { LevelTeamBusiness, UserData } from "../web3";
import lapsLogo from "../../assets/img/loan.png";
import { useSelector } from "react-redux";
import { cutAfterDecimal } from "../web3";
import axios from "axios";
import { apiUrl } from "../Config";
import ApexChart from "../Chart/Radar";
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

function DashboardRow2() {
  const [TBusiness, setTeamBusiness] = useState();
  const [dashboard, setDashboard] = useState();
  const [directList, setDirectList] = useState([]);
  const [IncomeOverview, setIncomeOverview] = useState({});
  const [dateType, setDateType] = useState("Yearly");
  const { tokenData } = useSelector((state) => state.bitgold);
  const TokenAddress = tokenData?.address;
  const tokenDecimals = tokenData?.decimals;
  const { wallet, dashboardData } = useSelector((state) => state.bitgold);
  console.log(dashboardData,"11")
  // const { directUser, directBusiness, teamBusiness, teamUser } = dashboardData;
  const { walletAddress } = wallet;
  const address = walletAddress;
  const [matrixIncome, setMatrixIncome] = useState([]);
  // const { uw_total_income
  //   ,directteam,allteam,directincome,levelIncome,totalincome,todayBonus } = dashboardData;
  

  // async function fetchData() {
  //   try {
  //     let data = await UserData(address);
  //     setDashboard(data);
  //     let TeamBusiness = await LevelTeamBusiness(address);
  //     setTeamBusiness(TeamBusiness);
  //   } catch (error) {
  //     setDashboard(false);
  //     setTeamBusiness(false);
  //     console.log(error);
  //   }
  // }

  // const getDirectList = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/getDirectist", {
  //       params: {
  //         address: address,
  //       },
  //     });
  //     if (response?.status === 200) {
  //       setDirectList(response?.data?.data);
  //     } else {
  //       setDirectList([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (address) getDirectList();
  // }, [address]);

  // const GetIncomeOverview = async () => {
  //   try {
  //     const response = await axios.get(apiUrl + "/getChatIncomeWithfilter", {
  //       params: {
  //         address: address,
  //         datetype: dateType,
  //       },
  //     });
  //     if (response?.status === 200) {
  //       console.log(response?.data?.data?.percentages, "esponse?.data?.data");
  //       setIncomeOverview(response?.data?.data?.percentages);
  //     } else {
  //       setIncomeOverview({});
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   if (address) GetIncomeOverview();
  // }, [address, dateType]);

  // console.log(, ",,,,,,,,,,,,");
  // useEffect(() => {
  //   if (address) fetchData();
  // }, [address]);

  //  const [currentPage, setCurrentPage] = useState(1); // Current page
  //   const rowsPerPage = 6; // Rows per page

  //   // Calculate the total number of pages
  //   const totalPages = Math.ceil(directList?.length / rowsPerPage);

  //   // Calculate the data to display for the current page
  //   const startIndex = (currentPage - 1) * rowsPerPage;
  //   const endIndex = startIndex + rowsPerPage;
  //   const currentData = directList?.slice(startIndex, endIndex);

  //   // Event handlers for pagination buttons
  //   const handlePrev = () => {
  //     if (currentPage > 1) {
  //       setCurrentPage(currentPage - 1);
  //     }
  //   };

  //   const handleNext = () => {
  //     if (currentPage < totalPages) {
  //       setCurrentPage(currentPage + 1);
  //     }
  //   };

  //   const handlePageClick = (page) => {
  //     setCurrentPage(page);
  //   };

  const itemsPerPage = 6; // Change this to modify items per page
  const [currentPage, setCurrentPage] = useState(1);
  // const [matrixIncome,setMatrixIncome] = useState([]);

  const totalPages = Math.ceil(matrixIncome.length / itemsPerPage);

  const paginatedLevels = matrixIncome.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle previous page
  // const handlePreviousPage = () => {
  //   if (currentPage > 1) setCurrentPage(currentPage - 1);
  // };

  // Handle next page
  // const handleNextPage = () => {
  //   if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  // };

  const getMatrixIncome = async () => {
    try {
      const response = await axios.get(apiUrl + "/recentincome", {
        params: {
          user: address,
        },
      });
      if (response) {
        console.log(response.data, "repp");

        setMatrixIncome(response?.data || []);
        console.log(matrixIncome, "Matrix");
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
    <div className="row d-flex justify-content-between">
      {/* Profit */}
      {/* <div className="col-sm-12 col-md-4 col-xxl-4">
        <div className="card custom-card wrapper">
          <div className="card-body box" style={{ height: "230px" }}>
            <div className="d-flex gap-2 align-items-center justify-content-between h-100">
              <div className="">
                <span className="mb-1 d-block fs-6 fw-bold">
                  Extra Staking Boost
                </span>
                <h4 className="mb-1 fs-1">
                  {dashboard &&
                    cutAfterDecimal(
                      Number(dashboard[7]) / Number("1e" + tokenDecimals),
                      2
                    )}{" "}
                  %
                </h4>
                <div className=" fs-13 d-flex align-items-center">
                  <span
                    className="text-primary badge bg-secondary-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0 d-flex justify-content-center align-items-center px-3"
                    style={{ height: "25px", cursor: "pointer" }}
                  >
                    <span style={{ marginRight: "10px", fontSize: "10px" }}>
                      Lapse Level
                    </span>{" "}
                    <span style={{ fontSize: "17px" }}>{lapseLevel || 0}</span>
                  </span>
                </div>
              </div>
              <div className="avatar avatar-lg  svg-primary2 shadow-sm">
                <img src={lapsLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="card custom-card overflow-hidden earnings-card card-bg-primary shadow-sm">
          <div className="card-body p-0 text-fixed-white">
            <div className="p-3 position-absolute total-earnings-content w-100">
              <div className="d-flex gap-2 align-items-center justify-content-between">
                <div>
                  <span className="mb-1 d-block">Total Profit</span>
                  <h4 className="mb-1 text-fixed-white">
                    $
                    {(dashboard &&
                      cutAfterDecimal(
                        Number(dashboard[12].rankReward) /
                          Number("1e" + tokenDecimals) +
                          Number(dashboard[12].referralReward) /
                            Number("1e" + tokenDecimals) +
                          Number(dashboard[12].stakingReward) /
                            Number("1e" + tokenDecimals),
                        2
                      )) ||
                      0.0}0
                  </h4>
                  <div className="text-fixed-white fs-13">
                    <span className="op-7"> Increased By </span>
                    <span className="badge bg-primary1 align-middle op-9">
                      7.66%<i className="ti ti-arrow-narrow-up"></i>
                    </span>
                  </div>
                </div>
                <div className="avatar avatar-lg bg-white-transparent svg-white shadow-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM164,96a36,36,0,0,0,5.9-.48,36,36,0,1,0,28.22-47A36,36,0,1,0,164,96Zm60-12a20,20,0,1,1-20-20A20,20,0,0,1,224,84ZM164,40a20,20,0,0,1,19.25,14.61,36,36,0,0,0-15,24.93A20.42,20.42,0,0,1,164,80a20,20,0,0,1,0-40Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div id="profit-report"></div>
            <div id="revenue-report">
              <div
                id="apexchartsbvas17zm"
                className="apexcharts-canvas apexchartsbvas17zm apexcharts-theme-light"
                style={{ width: "368px", height: "130px" }}
              >
                <svg
                  id="SvgjsSvg2936"
                  width="368"
                  height="130"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.dev"
                  className="apexcharts-svg"
                  xmlns:data="ApexChartsNS"
                  transform="translate(0, 0)"
                  style={{ background: "transparent" }}
                >
                  <foreignObject x="0" y="0" width="368" height="130">
                    <div
                      className="apexcharts-legend"
                      xmlns="http://www.w3.org/1999/xhtml"
                      style={{ maxHeight: "65px" }}
                    ></div>
                  </foreignObject>
                  <rect
                    id="SvgjsRect2940"
                    width="0"
                    height="0"
                    x="0"
                    y="0"
                    rx="0"
                    ry="0"
                    opacity="1"
                    strokeWidth="0"
                    stroke="none"
                    strokeDasharray="0"
                    fill="#fefefe"
                  ></rect>
                  <g
                    id="SvgjsG3062"
                    className="apexcharts-yaxis"
                    rel="0"
                    transform="translate(-18, 0)"
                  ></g>
                  <g
                    id="SvgjsG2938"
                    className="apexcharts-inner apexcharts-graphical"
                    transform="translate(0, 0)"
                  >
                    <defs id="SvgjsDefs2937">
                      <clipPath id="gridRectMaskbvas17zm">
                        <rect
                          id="SvgjsRect2942"
                          width="374"
                          height="132"
                          x="-3"
                          y="-1"
                          rx="0"
                          ry="0"
                          opacity="1"
                          strokeWidth="0"
                          stroke="none"
                          strokeDasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                      <clipPath id="forecastMaskbvas17zm"></clipPath>
                      <clipPath id="nonForecastMaskbvas17zm"></clipPath>
                      <clipPath id="gridRectMarkerMaskbvas17zm">
                        <rect
                          id="SvgjsRect2943"
                          width="372"
                          height="134"
                          x="-2"
                          y="-2"
                          rx="0"
                          ry="0"
                          opacity="1"
                          strokeWidth="0"
                          stroke="none"
                          strokeDasharray="0"
                          fill="#fff"
                        ></rect>
                      </clipPath>
                      <linearGradient
                        id="SvgjsLinearGradient2948"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          id="SvgjsStop2949"
                          stopOpacity="0.1"
                          stopColor="rgba(225,255,255,0.2)"
                          offset="0"
                        ></stop>
                        <stop
                          id="SvgjsStop2950"
                          stopOpacity="0.1"
                          stopColor="rgba(225,255,255,0.2)"
                          offset="0.75"
                        ></stop>
                        <stop
                          id="SvgjsStop2951"
                          stopOpacity="0.1"
                          stopColor="rgba(225,255,255,0.15)"
                          offset="1"
                        ></stop>
                      </linearGradient>
                      <filter
                        id="SvgjsFilter2953"
                        filterUnits="userSpaceOnUse"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                      >
                        <feFlood
                          id="SvgjsFeFlood2954"
                          floodColor="#000000"
                          floodOpacity="0.2"
                          result="SvgjsFeFlood2954Out"
                          in="SourceGraphic"
                        ></feFlood>
                        <feComposite
                          id="SvgjsFeComposite2955"
                          in="SvgjsFeFlood2954Out"
                          in2="SourceAlpha"
                          operator="in"
                          result="SvgjsFeComposite2955Out"
                        ></feComposite>
                        <feOffset
                          id="SvgjsFeOffset2956"
                          dx="1"
                          dy="7"
                          result="SvgjsFeOffset2956Out"
                          in="SvgjsFeComposite2955Out"
                        ></feOffset>
                        <feGaussianBlur
                          id="SvgjsFeGaussianBlur2957"
                          stdDeviation="3 "
                          result="SvgjsFeGaussianBlur2957Out"
                          in="SvgjsFeOffset2956Out"
                        ></feGaussianBlur>
                        <feMerge
                          id="SvgjsFeMerge2958"
                          result="SvgjsFeMerge2958Out"
                          in="SourceGraphic"
                        >
                          <feMergeNode
                            id="SvgjsFeMergeNode2959"
                            in="SvgjsFeGaussianBlur2957Out"
                          ></feMergeNode>
                          <feMergeNode
                            id="SvgjsFeMergeNode2960"
                            in="[object Arguments]"
                          ></feMergeNode>
                        </feMerge>
                        <feBlend
                          id="SvgjsFeBlend2961"
                          in="SourceGraphic"
                          in2="SvgjsFeMerge2958Out"
                          mode="normal"
                          result="SvgjsFeBlend2961Out"
                        ></feBlend>
                      </filter>
                      <filter
                        id="SvgjsFilter2963"
                        filterUnits="userSpaceOnUse"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                      >
                        <feFlood
                          id="SvgjsFeFlood2964"
                          floodColor="#000000"
                          floodOpacity="0.2"
                          result="SvgjsFeFlood2964Out"
                          in="SourceGraphic"
                        ></feFlood>
                        <feComposite
                          id="SvgjsFeComposite2965"
                          in="SvgjsFeFlood2964Out"
                          in2="SourceAlpha"
                          operator="in"
                          result="SvgjsFeComposite2965Out"
                        ></feComposite>
                        <feOffset
                          id="SvgjsFeOffset2966"
                          dx="1"
                          dy="7"
                          result="SvgjsFeOffset2966Out"
                          in="SvgjsFeComposite2965Out"
                        ></feOffset>
                        <feGaussianBlur
                          id="SvgjsFeGaussianBlur2967"
                          stdDeviation="3 "
                          result="SvgjsFeGaussianBlur2967Out"
                          in="SvgjsFeOffset2966Out"
                        ></feGaussianBlur>
                        <feMerge
                          id="SvgjsFeMerge2968"
                          result="SvgjsFeMerge2968Out"
                          in="SourceGraphic"
                        >
                          <feMergeNode
                            id="SvgjsFeMergeNode2969"
                            in="SvgjsFeGaussianBlur2967Out"
                          ></feMergeNode>
                          <feMergeNode
                            id="SvgjsFeMergeNode2970"
                            in="[object Arguments]"
                          ></feMergeNode>
                        </feMerge>
                        <feBlend
                          id="SvgjsFeBlend2971"
                          in="SourceGraphic"
                          in2="SvgjsFeMerge2968Out"
                          mode="normal"
                          result="SvgjsFeBlend2971Out"
                        ></feBlend>
                      </filter>
                    </defs>
                    <line
                      id="SvgjsLine2941"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="130"
                      stroke="#b6b6b6"
                      strokeDasharray="3"
                      strokeLinecap="butt"
                      className="apexcharts-xcrosshairs"
                      x="0"
                      y="0"
                      width="1"
                      height="130"
                      fill="#b1b9c4"
                      filter="none"
                      fillOpacity="0.9"
                      strokeWidth="1"
                    ></line>
                    <line
                      id="SvgjsLine2976"
                      x1="0"
                      y1="131"
                      x2="0"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2977"
                      x1="10.514285714285714"
                      y1="131"
                      x2="10.514285714285714"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2978"
                      x1="21.02857142857143"
                      y1="131"
                      x2="21.02857142857143"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2979"
                      x1="31.542857142857144"
                      y1="131"
                      x2="31.542857142857144"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2980"
                      x1="42.05714285714286"
                      y1="131"
                      x2="42.05714285714286"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2981"
                      x1="52.57142857142857"
                      y1="131"
                      x2="52.57142857142857"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2982"
                      x1="63.08571428571428"
                      y1="131"
                      x2="63.08571428571428"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2983"
                      x1="73.6"
                      y1="131"
                      x2="73.6"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2984"
                      x1="84.11428571428571"
                      y1="131"
                      x2="84.11428571428571"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2985"
                      x1="94.62857142857143"
                      y1="131"
                      x2="94.62857142857143"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2986"
                      x1="105.14285714285715"
                      y1="131"
                      x2="105.14285714285715"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2987"
                      x1="115.65714285714287"
                      y1="131"
                      x2="115.65714285714287"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2988"
                      x1="126.17142857142859"
                      y1="131"
                      x2="126.17142857142859"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2989"
                      x1="136.6857142857143"
                      y1="131"
                      x2="136.6857142857143"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2990"
                      x1="147.20000000000002"
                      y1="131"
                      x2="147.20000000000002"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2991"
                      x1="157.71428571428572"
                      y1="131"
                      x2="157.71428571428572"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2992"
                      x1="168.22857142857143"
                      y1="131"
                      x2="168.22857142857143"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2993"
                      x1="178.74285714285713"
                      y1="131"
                      x2="178.74285714285713"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2994"
                      x1="189.25714285714284"
                      y1="131"
                      x2="189.25714285714284"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2995"
                      x1="199.77142857142854"
                      y1="131"
                      x2="199.77142857142854"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2996"
                      x1="210.28571428571425"
                      y1="131"
                      x2="210.28571428571425"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2997"
                      x1="220.79999999999995"
                      y1="131"
                      x2="220.79999999999995"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2998"
                      x1="231.31428571428566"
                      y1="131"
                      x2="231.31428571428566"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine2999"
                      x1="241.82857142857137"
                      y1="131"
                      x2="241.82857142857137"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3000"
                      x1="252.34285714285707"
                      y1="131"
                      x2="252.34285714285707"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3001"
                      x1="262.8571428571428"
                      y1="131"
                      x2="262.8571428571428"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3002"
                      x1="273.3714285714285"
                      y1="131"
                      x2="273.3714285714285"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3003"
                      x1="283.88571428571424"
                      y1="131"
                      x2="283.88571428571424"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3004"
                      x1="294.4"
                      y1="131"
                      x2="294.4"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3005"
                      x1="304.9142857142857"
                      y1="131"
                      x2="304.9142857142857"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3006"
                      x1="315.42857142857144"
                      y1="131"
                      x2="315.42857142857144"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3007"
                      x1="325.9428571428572"
                      y1="131"
                      x2="325.9428571428572"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3008"
                      x1="336.4571428571429"
                      y1="131"
                      x2="336.4571428571429"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3009"
                      x1="346.97142857142865"
                      y1="131"
                      x2="346.97142857142865"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3010"
                      x1="357.4857142857144"
                      y1="131"
                      x2="357.4857142857144"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <line
                      id="SvgjsLine3011"
                      x1="368.0000000000001"
                      y1="131"
                      x2="368.0000000000001"
                      y2="137"
                      stroke="rgba(119, 119, 142, 0.05)"
                      strokeDasharray="0"
                      strokeLinecap="butt"
                      className="apexcharts-xaxis-tick"
                    ></line>
                    <g id="SvgjsG2972" className="apexcharts-grid">
                      <g
                        id="SvgjsG2973"
                        className="apexcharts-gridlines-horizontal"
                        style={{ display: "none" }}
                      >
                        <line
                          id="SvgjsLine3012"
                          x1="0"
                          y1="0"
                          x2="368"
                          y2="0"
                          stroke="#f2f6f7"
                          strokeDasharray="0"
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine3013"
                          x1="0"
                          y1="21.666666666666668"
                          x2="368"
                          y2="21.666666666666668"
                          stroke="#f2f6f7"
                          strokeDasharray="0"
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine3014"
                          x1="0"
                          y1="43.333333333333336"
                          x2="368"
                          y2="43.333333333333336"
                          stroke="#f2f6f7"
                          strokeDasharray="0"
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine3015"
                          x1="0"
                          y1="65"
                          x2="368"
                          y2="65"
                          stroke="#f2f6f7"
                          strokeDasharray="0"
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine3016"
                          x1="0"
                          y1="86.66666666666667"
                          x2="368"
                          y2="86.66666666666667"
                          stroke="#f2f6f7"
                          strokeDasharray="0"
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine3017"
                          x1="0"
                          y1="108.33333333333334"
                          x2="368"
                          y2="108.33333333333334"
                          stroke="#f2f6f7"
                          strokeDasharray="0"
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                        <line
                          id="SvgjsLine3018"
                          x1="0"
                          y1="130"
                          x2="368"
                          y2="130"
                          stroke="#f2f6f7"
                          strokeDasharray="0"
                          strokeLinecap="butt"
                          className="apexcharts-gridline"
                        ></line>
                      </g>
                      <g
                        id="SvgjsG2974"
                        className="apexcharts-gridlines-vertical"
                        style={{ display: "none" }}
                      ></g>
                      <line
                        id="SvgjsLine3020"
                        x1="0"
                        y1="130"
                        x2="368"
                        y2="130"
                        stroke="transparent"
                        strokeDasharray="0"
                        strokeLinecap="butt"
                      ></line>
                      <line
                        id="SvgjsLine3019"
                        x1="0"
                        y1="1"
                        x2="0"
                        y2="130"
                        stroke="transparent"
                        strokeDasharray="0"
                        strokeLinecap="butt"
                      ></line>
                    </g>
                    <g
                      id="SvgjsG2975"
                      className="apexcharts-grid-borders"
                      style={{ display: "none" }}
                    ></g>
                    <g
                      id="SvgjsG2944"
                      className="apexcharts-area-series apexcharts-plot-series"
                    >
                      <g
                        id="SvgjsG2945"
                        className="apexcharts-series"
                        seriesname="Profit"
                        data:longestseries="true"
                        rel="1"
                        data:realindex="0"
                      >
                        <path
                          id="SvgjsPath2952"
                          d="M 0 130 L 0 54.16666666666667C 3.6799999999999997 54.16666666666667 6.8342857142857145 52 10.514285714285714 52C 14.194285714285714 52 17.34857142857143 82.33333333333334 21.02857142857143 82.33333333333334C 24.708571428571428 82.33333333333334 27.86285714285714 34.66666666666667 31.54285714285714 34.66666666666667C 35.222857142857144 34.66666666666667 38.37714285714286 26 42.05714285714286 26C 45.73714285714286 26 48.89142857142857 49.83333333333334 52.57142857142857 49.83333333333334C 56.25142857142857 49.83333333333334 59.40571428571428 52 63.08571428571428 52C 66.76571428571428 52 69.92 73.66666666666667 73.6 73.66666666666667C 77.28 73.66666666666667 80.4342857142857 71.5 84.11428571428571 71.5C 87.7942857142857 71.5 90.94857142857143 58.5 94.62857142857142 58.5C 98.30857142857143 58.5 101.46285714285713 60.66666666666667 105.14285714285714 60.66666666666667C 108.82285714285713 60.66666666666667 111.97714285714285 52 115.65714285714284 52C 119.33714285714285 52 122.49142857142856 10.833333333333343 126.17142857142856 10.833333333333343C 129.85142857142856 10.833333333333343 133.00571428571428 15.166666666666671 136.68571428571428 15.166666666666671C 140.3657142857143 15.166666666666671 143.51999999999998 30.333333333333343 147.2 30.333333333333343C 150.88 30.333333333333343 154.0342857142857 43.33333333333334 157.7142857142857 43.33333333333334C 161.3942857142857 43.33333333333334 164.54857142857142 32.5 168.22857142857143 32.5C 171.90857142857143 32.5 175.06285714285713 47.66666666666667 178.74285714285713 47.66666666666667C 182.42285714285714 47.66666666666667 185.57714285714283 30.333333333333343 189.25714285714284 30.333333333333343C 192.93714285714285 30.333333333333343 196.09142857142857 49.83333333333334 199.77142857142857 49.83333333333334C 203.45142857142858 49.83333333333334 206.60571428571427 82.33333333333334 210.28571428571428 82.33333333333334C 213.96571428571428 82.33333333333334 217.11999999999998 56.33333333333334 220.79999999999998 56.33333333333334C 224.48 56.33333333333334 227.63428571428568 43.33333333333334 231.3142857142857 43.33333333333334C 234.9942857142857 43.33333333333334 238.14857142857142 34.66666666666667 241.82857142857142 34.66666666666667C 245.50857142857143 34.66666666666667 248.66285714285712 69.33333333333334 252.34285714285713 69.33333333333334C 256.0228571428571 69.33333333333334 259.1771428571428 58.5 262.85714285714283 58.5C 266.53714285714284 58.5 269.69142857142856 56.33333333333334 273.37142857142857 56.33333333333334C 277.0514285714286 56.33333333333334 280.20571428571424 52 283.88571428571424 52C 287.56571428571425 52 290.71999999999997 4.333333333333343 294.4 4.333333333333343C 298.08 4.333333333333343 301.2342857142857 8.666666666666671 304.9142857142857 8.666666666666671C 308.5942857142857 8.666666666666671 311.7485714285714 32.5 315.4285714285714 32.5C 319.1085714285714 32.5 322.2628571428571 56.33333333333334 325.9428571428571 56.33333333333334C 329.62285714285713 56.33333333333334 332.77714285714285 58.5 336.45714285714286 58.5C 340.13714285714286 58.5 343.2914285714285 82.33333333333334 346.97142857142853 82.33333333333334C 350.65142857142854 82.33333333333334 353.80571428571426 32.5 357.48571428571427 32.5C 361.1657142857143 32.5 364.32 21.66666666666667 368 21.66666666666667C 368 21.66666666666667 368 21.66666666666667 368 130M 368 21.66666666666667z"
                          fill="url(#SvgjsLinearGradient2948)"
                          fillOpacity="1"
                          strokeOpacity="1"
                          strokeLinecap="butt"
                          strokeWidth="0"
                          strokeDasharray="0"
                          className="apexcharts-area"
                          index="0"
                          clipPath="url(#gridRectMaskbvas17zm)"
                          filter="url(#SvgjsFilter2953)"
                          pathto="M 0 130 L 0 54.16666666666667C 3.6799999999999997 54.16666666666667 6.8342857142857145 52 10.514285714285714 52C 14.194285714285714 52 17.34857142857143 82.33333333333334 21.02857142857143 82.33333333333334C 24.708571428571428 82.33333333333334 27.86285714285714 34.66666666666667 31.54285714285714 34.66666666666667C 35.222857142857144 34.66666666666667 38.37714285714286 26 42.05714285714286 26C 45.73714285714286 26 48.89142857142857 49.83333333333334 52.57142857142857 49.83333333333334C 56.25142857142857 49.83333333333334 59.40571428571428 52 63.08571428571428 52C 66.76571428571428 52 69.92 73.66666666666667 73.6 73.66666666666667C 77.28 73.66666666666667 80.4342857142857 71.5 84.11428571428571 71.5C 87.7942857142857 71.5 90.94857142857143 58.5 94.62857142857142 58.5C 98.30857142857143 58.5 101.46285714285713 60.66666666666667 105.14285714285714 60.66666666666667C 108.82285714285713 60.66666666666667 111.97714285714285 52 115.65714285714284 52C 119.33714285714285 52 122.49142857142856 10.833333333333343 126.17142857142856 10.833333333333343C 129.85142857142856 10.833333333333343 133.00571428571428 15.166666666666671 136.68571428571428 15.166666666666671C 140.3657142857143 15.166666666666671 143.51999999999998 30.333333333333343 147.2 30.333333333333343C 150.88 30.333333333333343 154.0342857142857 43.33333333333334 157.7142857142857 43.33333333333334C 161.3942857142857 43.33333333333334 164.54857142857142 32.5 168.22857142857143 32.5C 171.90857142857143 32.5 175.06285714285713 47.66666666666667 178.74285714285713 47.66666666666667C 182.42285714285714 47.66666666666667 185.57714285714283 30.333333333333343 189.25714285714284 30.333333333333343C 192.93714285714285 30.333333333333343 196.09142857142857 49.83333333333334 199.77142857142857 49.83333333333334C 203.45142857142858 49.83333333333334 206.60571428571427 82.33333333333334 210.28571428571428 82.33333333333334C 213.96571428571428 82.33333333333334 217.11999999999998 56.33333333333334 220.79999999999998 56.33333333333334C 224.48 56.33333333333334 227.63428571428568 43.33333333333334 231.3142857142857 43.33333333333334C 234.9942857142857 43.33333333333334 238.14857142857142 34.66666666666667 241.82857142857142 34.66666666666667C 245.50857142857143 34.66666666666667 248.66285714285712 69.33333333333334 252.34285714285713 69.33333333333334C 256.0228571428571 69.33333333333334 259.1771428571428 58.5 262.85714285714283 58.5C 266.53714285714284 58.5 269.69142857142856 56.33333333333334 273.37142857142857 56.33333333333334C 277.0514285714286 56.33333333333334 280.20571428571424 52 283.88571428571424 52C 287.56571428571425 52 290.71999999999997 4.333333333333343 294.4 4.333333333333343C 298.08 4.333333333333343 301.2342857142857 8.666666666666671 304.9142857142857 8.666666666666671C 308.5942857142857 8.666666666666671 311.7485714285714 32.5 315.4285714285714 32.5C 319.1085714285714 32.5 322.2628571428571 56.33333333333334 325.9428571428571 56.33333333333334C 329.62285714285713 56.33333333333334 332.77714285714285 58.5 336.45714285714286 58.5C 340.13714285714286 58.5 343.2914285714285 82.33333333333334 346.97142857142853 82.33333333333334C 350.65142857142854 82.33333333333334 353.80571428571426 32.5 357.48571428571427 32.5C 361.1657142857143 32.5 364.32 21.66666666666667 368 21.66666666666667C 368 21.66666666666667 368 21.66666666666667 368 130M 368 21.66666666666667z"
                          pathfrom="M -1 130 L -1 130 L 10.514285714285714 130 L 21.02857142857143 130 L 31.54285714285714 130 L 42.05714285714286 130 L 52.57142857142857 130 L 63.08571428571428 130 L 73.6 130 L 84.11428571428571 130 L 94.62857142857142 130 L 105.14285714285714 130 L 115.65714285714284 130 L 126.17142857142856 130 L 136.68571428571428 130 L 147.2 130 L 157.7142857142857 130 L 168.22857142857143 130 L 178.74285714285713 130 L 189.25714285714284 130 L 199.77142857142857 130 L 210.28571428571428 130 L 220.79999999999998 130 L 231.3142857142857 130 L 241.82857142857142 130 L 252.34285714285713 130 L 262.85714285714283 130 L 273.37142857142857 130 L 283.88571428571424 130 L 294.4 130 L 304.9142857142857 130 L 315.4285714285714 130 L 325.9428571428571 130 L 336.45714285714286 130 L 346.97142857142853 130 L 357.48571428571427 130 L 368 130"
                        ></path>
                        <path
                          id="SvgjsPath2962"
                          d="M 0 54.16666666666667C 3.6799999999999997 54.16666666666667 6.8342857142857145 52 10.514285714285714 52C 14.194285714285714 52 17.34857142857143 82.33333333333334 21.02857142857143 82.33333333333334C 24.708571428571428 82.33333333333334 27.86285714285714 34.66666666666667 31.54285714285714 34.66666666666667C 35.222857142857144 34.66666666666667 38.37714285714286 26 42.05714285714286 26C 45.73714285714286 26 48.89142857142857 49.83333333333334 52.57142857142857 49.83333333333334C 56.25142857142857 49.83333333333334 59.40571428571428 52 63.08571428571428 52C 66.76571428571428 52 69.92 73.66666666666667 73.6 73.66666666666667C 77.28 73.66666666666667 80.4342857142857 71.5 84.11428571428571 71.5C 87.7942857142857 71.5 90.94857142857143 58.5 94.62857142857142 58.5C 98.30857142857143 58.5 101.46285714285713 60.66666666666667 105.14285714285714 60.66666666666667C 108.82285714285713 60.66666666666667 111.97714285714285 52 115.65714285714284 52C 119.33714285714285 52 122.49142857142856 10.833333333333343 126.17142857142856 10.833333333333343C 129.85142857142856 10.833333333333343 133.00571428571428 15.166666666666671 136.68571428571428 15.166666666666671C 140.3657142857143 15.166666666666671 143.51999999999998 30.333333333333343 147.2 30.333333333333343C 150.88 30.333333333333343 154.0342857142857 43.33333333333334 157.7142857142857 43.33333333333334C 161.3942857142857 43.33333333333334 164.54857142857142 32.5 168.22857142857143 32.5C 171.90857142857143 32.5 175.06285714285713 47.66666666666667 178.74285714285713 47.66666666666667C 182.42285714285714 47.66666666666667 185.57714285714283 30.333333333333343 189.25714285714284 30.333333333333343C 192.93714285714285 30.333333333333343 196.09142857142857 49.83333333333334 199.77142857142857 49.83333333333334C 203.45142857142858 49.83333333333334 206.60571428571427 82.33333333333334 210.28571428571428 82.33333333333334C 213.96571428571428 82.33333333333334 217.11999999999998 56.33333333333334 220.79999999999998 56.33333333333334C 224.48 56.33333333333334 227.63428571428568 43.33333333333334 231.3142857142857 43.33333333333334C 234.9942857142857 43.33333333333334 238.14857142857142 34.66666666666667 241.82857142857142 34.66666666666667C 245.50857142857143 34.66666666666667 248.66285714285712 69.33333333333334 252.34285714285713 69.33333333333334C 256.0228571428571 69.33333333333334 259.1771428571428 58.5 262.85714285714283 58.5C 266.53714285714284 58.5 269.69142857142856 56.33333333333334 273.37142857142857 56.33333333333334C 277.0514285714286 56.33333333333334 280.20571428571424 52 283.88571428571424 52C 287.56571428571425 52 290.71999999999997 4.333333333333343 294.4 4.333333333333343C 298.08 4.333333333333343 301.2342857142857 8.666666666666671 304.9142857142857 8.666666666666671C 308.5942857142857 8.666666666666671 311.7485714285714 32.5 315.4285714285714 32.5C 319.1085714285714 32.5 322.2628571428571 56.33333333333334 325.9428571428571 56.33333333333334C 329.62285714285713 56.33333333333334 332.77714285714285 58.5 336.45714285714286 58.5C 340.13714285714286 58.5 343.2914285714285 82.33333333333334 346.97142857142853 82.33333333333334C 350.65142857142854 82.33333333333334 353.80571428571426 32.5 357.48571428571427 32.5C 361.1657142857143 32.5 364.32 21.66666666666667 368 21.66666666666667"
                          fill="none"
                          fillOpacity="1"
                          stroke="rgba(33, 206, 158, .55)"
                          strokeOpacity="1"
                          strokeLinecap="butt"
                          strokeWidth="2"
                          strokeDasharray="0"
                          className="apexcharts-area"
                          index="0"
                          clipPath="url(#gridRectMaskbvas17zm)"
                          filter="url(#SvgjsFilter2963)"
                          pathto="M 0 54.16666666666667C 3.6799999999999997 54.16666666666667 6.8342857142857145 52 10.514285714285714 52C 14.194285714285714 52 17.34857142857143 82.33333333333334 21.02857142857143 82.33333333333334C 24.708571428571428 82.33333333333334 27.86285714285714 34.66666666666667 31.54285714285714 34.66666666666667C 35.222857142857144 34.66666666666667 38.37714285714286 26 42.05714285714286 26C 45.73714285714286 26 48.89142857142857 49.83333333333334 52.57142857142857 49.83333333333334C 56.25142857142857 49.83333333333334 59.40571428571428 52 63.08571428571428 52C 66.76571428571428 52 69.92 73.66666666666667 73.6 73.66666666666667C 77.28 73.66666666666667 80.4342857142857 71.5 84.11428571428571 71.5C 87.7942857142857 71.5 90.94857142857143 58.5 94.62857142857142 58.5C 98.30857142857143 58.5 101.46285714285713 60.66666666666667 105.14285714285714 60.66666666666667C 108.82285714285713 60.66666666666667 111.97714285714285 52 115.65714285714284 52C 119.33714285714285 52 122.49142857142856 10.833333333333343 126.17142857142856 10.833333333333343C 129.85142857142856 10.833333333333343 133.00571428571428 15.166666666666671 136.68571428571428 15.166666666666671C 140.3657142857143 15.166666666666671 143.51999999999998 30.333333333333343 147.2 30.333333333333343C 150.88 30.333333333333343 154.0342857142857 43.33333333333334 157.7142857142857 43.33333333333334C 161.3942857142857 43.33333333333334 164.54857142857142 32.5 168.22857142857143 32.5C 171.90857142857143 32.5 175.06285714285713 47.66666666666667 178.74285714285713 47.66666666666667C 182.42285714285714 47.66666666666667 185.57714285714283 30.333333333333343 189.25714285714284 30.333333333333343C 192.93714285714285 30.333333333333343 196.09142857142857 49.83333333333334 199.77142857142857 49.83333333333334C 203.45142857142858 49.83333333333334 206.60571428571427 82.33333333333334 210.28571428571428 82.33333333333334C 213.96571428571428 82.33333333333334 217.11999999999998 56.33333333333334 220.79999999999998 56.33333333333334C 224.48 56.33333333333334 227.63428571428568 43.33333333333334 231.3142857142857 43.33333333333334C 234.9942857142857 43.33333333333334 238.14857142857142 34.66666666666667 241.82857142857142 34.66666666666667C 245.50857142857143 34.66666666666667 248.66285714285712 69.33333333333334 252.34285714285713 69.33333333333334C 256.0228571428571 69.33333333333334 259.1771428571428 58.5 262.85714285714283 58.5C 266.53714285714284 58.5 269.69142857142856 56.33333333333334 273.37142857142857 56.33333333333334C 277.0514285714286 56.33333333333334 280.20571428571424 52 283.88571428571424 52C 287.56571428571425 52 290.71999999999997 4.333333333333343 294.4 4.333333333333343C 298.08 4.333333333333343 301.2342857142857 8.666666666666671 304.9142857142857 8.666666666666671C 308.5942857142857 8.666666666666671 311.7485714285714 32.5 315.4285714285714 32.5C 319.1085714285714 32.5 322.2628571428571 56.33333333333334 325.9428571428571 56.33333333333334C 329.62285714285713 56.33333333333334 332.77714285714285 58.5 336.45714285714286 58.5C 340.13714285714286 58.5 343.2914285714285 82.33333333333334 346.97142857142853 82.33333333333334C 350.65142857142854 82.33333333333334 353.80571428571426 32.5 357.48571428571427 32.5C 361.1657142857143 32.5 364.32 21.66666666666667 368 21.66666666666667"
                          pathfrom="M -1 130 L -1 130 L 10.514285714285714 130 L 21.02857142857143 130 L 31.54285714285714 130 L 42.05714285714286 130 L 52.57142857142857 130 L 63.08571428571428 130 L 73.6 130 L 84.11428571428571 130 L 94.62857142857142 130 L 105.14285714285714 130 L 115.65714285714284 130 L 126.17142857142856 130 L 136.68571428571428 130 L 147.2 130 L 157.7142857142857 130 L 168.22857142857143 130 L 178.74285714285713 130 L 189.25714285714284 130 L 199.77142857142857 130 L 210.28571428571428 130 L 220.79999999999998 130 L 231.3142857142857 130 L 241.82857142857142 130 L 252.34285714285713 130 L 262.85714285714283 130 L 273.37142857142857 130 L 283.88571428571424 130 L 294.4 130 L 304.9142857142857 130 L 315.4285714285714 130 L 325.9428571428571 130 L 336.45714285714286 130 L 346.97142857142853 130 L 357.48571428571427 130 L 368 130"
                          fillRule="evenodd"
                        ></path>
                        <g
                          id="SvgjsG2946"
                          className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                          data:realindex="0"
                        ></g>
                      </g>
                      <g
                        id="SvgjsG2947"
                        className="apexcharts-datalabels"
                        data:realindex="0"
                      ></g>
                    </g>
                    <line
                      id="SvgjsLine3021"
                      x1="0"
                      y1="0"
                      x2="368"
                      y2="0"
                      strokeDasharray="0"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      className="apexcharts-ycrosshairs"
                    ></line>
                    <line
                      id="SvgjsLine3022"
                      x1="0"
                      y1="0"
                      x2="368"
                      y2="0"
                      strokeDasharray="0"
                      strokeWidth="0"
                      strokeLinecap="butt"
                      className="apexcharts-ycrosshairs-hidden"
                    ></line>
                    <g
                      id="SvgjsG3023"
                      className="apexcharts-xaxis"
                      transform="translate(0, 0)"
                    >
                      <g
                        id="SvgjsG3024"
                        className="apexcharts-xaxis-texts-g"
                        transform="translate(0, -4)"
                      ></g>
                      <line
                        id="SvgjsLine3061"
                        x1="0"
                        y1="131"
                        x2="368"
                        y2="131"
                        stroke="rgba(119, 119, 142, 0.05)"
                        strokeDasharray="0"
                        strokeWidth="1"
                        strokeLinecap="butt"
                      ></line>
                    </g>
                    <g
                      id="SvgjsG3063"
                      className="apexcharts-yaxis-annotations"
                    ></g>
                    <g
                      id="SvgjsG3064"
                      className="apexcharts-xaxis-annotations"
                    ></g>
                    <g
                      id="SvgjsG3065"
                      className="apexcharts-point-annotations"
                    ></g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="col-sm-12 col-md-4 col-xxl-4">
        <div
          className="card custom-card overflow-hidden"
          style={{ height: "483px"}}
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
                    className="dropdown-item"
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
                totalFortuneIncome={IncomeOverview?.dailyStakingPercentage || 0}
                totalAllIncome={IncomeOverview?.dialyloginRewardPercentage || 0}
                funWallet={IncomeOverview?.fundWalletPercentage || 0}
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="col-sm-12  col-md-6 col-xxl-6">
        <div className="card custom-card">
          <div className="card-header justify-content-between position-absolute">
            <div className="card-title">Daily Income</div>
          </div>
          <div className="card-body saleChart-body">
            <div id="sales-overview-crm">
              <AreaChart />
            </div>
          </div>
        </div>
      </div> */}
        <div
                className="row col-sm-12 col-md-12 col-lg-12 left-row-cards"
                style={{ paddingRight: "0px"}}
              >
                <div className="col-sm-6 col-lg-4">
                  <div>
                    <div className="card custom-card school-card">
                      <div className="card-body d-flex gap-2 justify-content-between">
                        <div>
                          <span className="d-block mb-1">Uwn2  income</span>
                          <h6 className="mb-0 fw-semibold">
                            {/* {dashboard && Number(dashboard[3])} */}
                            $ {dashboardData?.uwn2_total_income}
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
                          <span className="d-block mb-1">Uwn3  income</span>
                          <h6 className="mb-0 fw-semibold">
                          $ {dashboardData?.uwn3_total_income}
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
                              <span className="d-block mb-1">Uwn4  income</span>
                              <h6 className="mb-0 fw-semibold">
                              $ {dashboardData?.uwn4_total_income}
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
                              <span className="d-block mb-1">Uwn5  income</span>
                              <div className="d-flex gap-3">
                                <h6 className="mb-0 fw-semibold">
                                $ {dashboardData?.uwn5_total_income}
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
                      <div>
                        <div className="card custom-card school-card">
                          <div className="card-body d-flex gap-2 justify-content-between">
                            <div>
                              <span className="d-block mb-1">Uwn6  income</span>
                              <div className="d-flex gap-3">
                                <h6 className="mb-0 fw-semibold">
                                $ {dashboardData?.uwn6_total_income}
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

      {/* <div className="col-sm-12 col-md-4 col-xxl-4">
        <div
          className="card custom-card overflow-hidden"
          style={{ height: "483px" }}
        >
          <div className="card-header justify-content-between">
            <div className="card-title">Recent Income</div>
          </div>
          <div className="card-body p-0" style={{ height: "406px" }}>
            <div className="table-responsive">
              <table className="table text-nowrap text-center direct-data-table">
                <thead>
                  <tr>
                    <th scope="col">User</th>
                    <th scope="col">Matrix</th>
                    <th scope="col">Level</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedLevels?.map((rep, index) => (
                    <tr key={index}>
                      <td>{rep.senderUserId}</td>
                      <td style={{ color: "rgb(0, 119, 181)" }}>
                        {rep.matrixId}
                      </td>
                      <td>{rep.level
                      }</td>
                      <td>$ {rep.amount / 1e18}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {matrixIncome?.length === 0 && (
                <div className=" w-100">
                  <div className="w-100 text-center p-3 level-dash">No Data Found.</div>
                </div>
              )}
            </div>
          </div>
          <div className="mb-2 d-flex justify-content-center pb-2">
            <nav aria-label="Page navigation" className="pagination-style-2">
              <ul className="pagination mb-0 flex-wrap">
                <li
                  className={`page-item ${matrixIncome?.length === 0? "disabled":""}`}
                >
                  <Link className="page-link text-primary bg-transparent" to="/GlobalIncome">
                    Navigate to Recent Income for full info <i className="fa-solid fa-arrow-trend-up"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div> */}

      {/* PieChart*/}
      {/* <div className="col-sm-12 col-md-3 col-xxl-3">
              <div
                className="card custom-card overflow-hidden"
                style={{ height: "483px" }}
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
                      totalFortuneIncome={IncomeOverview?.dailyStakingPercentage || 0}
                      totalAllIncome={IncomeOverview?.dialyloginRewardPercentage || 0}
                      funWallet={IncomeOverview?.fundWalletPercentage || 0}
                    />
                  </div>
                </div>
              </div>
            </div> */}
    </div>
  );
}

export default DashboardRow2;
