import React, { useEffect, useState } from "react";
import MenuHorizontal from "../components/MenuHorizontal";
import MenuVertical from "../components/MenuVertical";
import Header from "../components/Header";
import NutritionList from "../components/NutritionList";
import "../styles/pages/dashboard.css";
import BarCharts from "../components/BarCharts";
import LineCharts from "../components/LineCharts";
import RadarCharts from "../components/RadarCharts";
import RadialCharts from "../components/RadialCharts";

const DashboardPage = () => {
  // ------------------- User Activity --------------------
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user/18/activity")
      .then((response) => response.json())
      .then((activity) => setUserActivity(activity.data.sessions));
  }, []);

  // ---------------------- User Name ----------------------
  const [userName, setUserName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user/18")
      .then((response) => response.json())
      .then((user) => setUserName(user.data.userInfos.firstName));
  }, []);

  // ---------------------- User Name ----------------------
  const [userAverageSessions, setUserAverageSessions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user/18/average-sessions")
      .then((response) => response.json())
      .then((averageSessions) =>
        setUserAverageSessions(averageSessions.data.sessions)
      );
  }, []);

  // -------------------  Activity type --------------------
  const [userActivityType, setUserActivityType] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user/18/performance")
      .then((response) => response.json())
      .then((activityType) => setUserActivityType(activityType.data));
  }, []);

  // -------------------  Nutrition --------------------
  const [userNutrition, setUserNutrition] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user/18")
      .then((response) => response.json())
      .then((user) => setUserNutrition(user.data.keyData));
  }, []);

  // -------------------  Radial Charts --------------------
  const [userRadial, setUserRadial] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user/18")
      .then((response) => response.json())
      .then((user) => setUserRadial(user.data.score));
  }, []);

  console.log(userRadial);

  // ------------------- Dashboard Page -------------------

  return (
    <main className="dashboard__main">
      <MenuHorizontal />
      <div className="dashboard__content">
        <MenuVertical />
        <div className="dashboard__graphs">
          <Header name={userName} />
          <div className="dashboard__graphs-container">
            <BarCharts data={userActivity} />
            <div className="dashboard__graphs-content">
              <LineCharts data={userAverageSessions} />
              <RadarCharts data={userActivityType} />
              <RadialCharts data={userRadial} />
            </div>
          </div>
        </div>
        <NutritionList data={userNutrition} />
      </div>
    </main>
  );
};

export default DashboardPage;
