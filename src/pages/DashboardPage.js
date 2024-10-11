import React from "react";
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
  return (
    <main className="dashboard-page">
      <MenuHorizontal />
      <MenuVertical />
      <Header name="Thomas" />
      <div className="dashboard-page__content">
        <div className="dashboard-page__graphs-container">
          <BarCharts />
          <div className="dashboard-page__graphs">
            <LineCharts />
            <RadarCharts />
            <RadialCharts />
          </div>
        </div>
        <NutritionList />
      </div>
    </main>
  );
};

export default DashboardPage;
