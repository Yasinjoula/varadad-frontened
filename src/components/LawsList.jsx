import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { lawsApi } from '../services/api';
import './LawsList.css';

const LawsList = () => {
  const [laws, setLaws] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLaws = async () => {
      try {
        const response = await lawsApi.getAllLaws();
        // The backend returns the laws array directly
        setLaws(Array.isArray(response) ? response : []);
      } catch (err) {
        setError('خطا در دریافت قوانین. لطفا دوباره تلاش کنید.');
        console.error('Error fetching laws:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLaws();
  }, []);

  if (loading) {
    return <div className="loading">در حال بارگذاری قوانین...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error">{error}</div>
        <div className="connection-help">
          <h3>راهنمای اتصال</h3>
          <ol>
            <li>اطمینان حاصل کنید که به اینترنت متصل هستید.</li>
            <li>در صورت بروز مشکل، لطفا صفحه را رفرش کنید.</li>
            <li>اگر مشکل همچنان پابرجاست، با پشتیبانی وراداد تماس بگیرید.</li>
          </ol>
          <button className="retry-btn" onClick={() => window.location.reload()}>
            تلاش مجدد
          </button>
        </div>
      </div>
    );
  }

  if (!laws || laws.length === 0) {
    return (
      <div className="empty-state">
        <p>در حال حاضر هیچ قانونی در سامانه وجود ندارد.</p>
        <Link to="/admin" className="btn">
          افزودن قانون جدید
        </Link>
      </div>
    );
  }

  return (
    <div className="laws-list">
      <h2>فهرست قوانین وراداد</h2>
      <div className="laws-grid">
        {laws.map((law) => (
          <div className="law-card" key={law._id}>
            <h3>{law.title}</h3>
            <p className="law-category">دسته: {law.category}</p>
            <p className="law-description">
              {law.description.substring(0, 150)}...
            </p>
            <Link to={`/laws/${law._id}`} className="view-law">
              مشاهده قانون
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawsList; 