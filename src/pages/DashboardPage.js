import React from "react";
import MenuHorizontal from "../components/MenuHorizontal";
import MenuVertical from "../components/MenuVertical";
import Header from "../components/Header";
import NutritionList from "../components/NutritionList";
import GraphActivitéQuotidienne from "../components/GraphActivitéQuotidienne";

const DashboardPage = () => {
  return (
    <main className="dashboard-page">
      <MenuHorizontal />
      <MenuVertical />
      <Header name="Thomas" />
      <div className="dashboard-page__content">
        <NutritionList />
        <GraphActivitéQuotidienne />
      </div>
    </main>
  );
};

export default DashboardPage;
