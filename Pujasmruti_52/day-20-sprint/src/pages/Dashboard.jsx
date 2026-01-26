import FeatureCard from "../components/FeatureCard";

const Dashboard = () => {
  return (
    <main style={{ padding: "20px" }}>
      <h3>Sprint Deliverables</h3>

      <FeatureCard
        title="UI Components"
        description="Reusable and responsive frontend components created."
      />

      <FeatureCard
        title="API Integration"
        description="Data fetched and displayed using Axios."
      />

      <FeatureCard
        title="Performance & Cleanup"
        description="Removed unused code and optimized rendering."
      />
    </main>
  );
};

export default Dashboard;
