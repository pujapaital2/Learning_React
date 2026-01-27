const FeatureCard = ({ title, description }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
