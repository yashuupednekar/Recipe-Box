import React, { useEffect, useState } from "react";

const CookingTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await fetch("https://recipe-box-1.onrender.com/api/cooking-tips"); // Adjust API URL if needed
        if (!response.ok) {
          throw new Error("Failed to fetch tips");
        }
        const data = await response.json();
        setTips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Cooking Tips</h2>
      <ul>
        {tips.map((tip) => (
          <li key={tip._id}>{tip.tip} - <strong>{tip.createdBy.name}</strong></li>
        ))}
      </ul>
    </div>
  );
};

export default CookingTips;
