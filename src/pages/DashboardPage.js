import React from "react";
import { useParams } from "react-router-dom";
import MenuHorizontal from "../components/MenuHorizontal";
import MenuVertical from "../components/MenuVertical";
import Nutrition from "../components/Nutrition";
import "../styles/pages/dashboard.css";
import BarCharts from "../components/BarCharts";
import LineCharts from "../components/LineCharts";
import RadarCharts from "../components/RadarCharts";
import RadialCharts from "../components/RadialCharts";
import Error from "../components/Error";
import { useFetchUser } from "../services/index";
import "../styles/components/header.css";

const DashboardPage = () => {
  const { id } = useParams();

  const userActivityData = useFetchUser({
    url: `user/${id}/activity`,
    resource: "activities",
  });

  const activityHasError =
    userActivityData?.hasError && userActivityData?.resource === "activities";

  const userAverageData = useFetchUser({
    url: `user/${id}/average-sessions`,
    resource: "averages",
  });

  const averagesHasError =
    userAverageData?.hasError && userAverageData?.resource === "averages";

  const userPerformanceData = useFetchUser({
    url: `user/${id}/performance`,
    resource: "performances",
  });

  const performanceHasError =
    userPerformanceData?.hasError &&
    userPerformanceData?.resource === "performances";

  const userData = useFetchUser({
    url: `user/${id}`,
    resource: "users",
  });

  const userDataHasError = userData?.hasError && userData?.resource === "users";

  // ------------------- Dashboard Page -------------------

  return (
    <main className="dashboard__main">
      <MenuHorizontal />
      <div className="dashboard__content">
        <MenuVertical />
        <div className="dashboard__graphs">
          <div className="header">
            <h1>
              Bonjour{" "}
              <strong>
                {userDataHasError ? (
                  <Error description="Erreur lors de la récupération du prénom de l'utilisateur. Veuillez réessayer plus tard." />
                ) : (
                  userData?.userInfos.firstName
                )}
              </strong>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="dashboard__graphs-container">
            {activityHasError ? (
              <Error description="Impossible de charger les données d'activité. Veuillez vérifier votre connexion ou réessayer ultérieurement." />
            ) : (
              <BarCharts activities={userActivityData} />
            )}
            <div className="dashboard__graphs-content">
              {averagesHasError ? (
                <Error description="Erreur lors du chargement des sessions moyennes. Un problème est survenu avec le serveur." />
              ) : (
                <LineCharts averages={userAverageData} />
              )}
              {performanceHasError ? (
                <Error description="Impossible de récupérer les performances. Veuillez actualiser la page ou contacter le support si le problème persiste." />
              ) : (
                userPerformanceData && (
                  <RadarCharts performances={userPerformanceData} />
                )
              )}
              {userDataHasError ? (
                <Error description="Erreur lors de la récupération des données pour le diagramme en cercle. Veuillez vérifier les informations utilisateur." />
              ) : (
                <RadialCharts score={userData?.score || userData?.todayScore} />
              )}
            </div>
          </div>
        </div>
        {userDataHasError ? (
          <Error description="Impossible de charger les informations de l'utilisateur. Assurez-vous que les données sont disponibles ou contactez le support." />
        ) : (
          userData && <Nutrition information={userData?.keyData} />
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
