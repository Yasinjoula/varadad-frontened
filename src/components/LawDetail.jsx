import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { lawsApi } from '../services/api';
import './LawDetail.css';

const LawDetail = () => {
  const { id } = useParams();
  const [law, setLaw] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const [articlesError, setArticlesError] = useState(null);

  useEffect(() => {
    const fetchLaw = async () => {
      try {
        const response = await lawsApi.getLawById(id);
        setLaw(response.law);
      } catch (err) {
        setError('خطا در دریافت اطلاعات قانون. لطفا دوباره تلاش کنید.');
        console.error('Error fetching law:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLaw();
  }, [id]);

  const handleFetchArticles = async () => {
    try {
      setArticlesLoading(true);
      setArticlesError(null);
      
      const response = await lawsApi.getLawArticles(id);
      setArticles(response.articles);
    } catch (err) {
      setArticlesError('خطا در دریافت مواد قانون. لطفا دوباره تلاش کنید.');
      console.error('Error fetching law articles:', err);
    } finally {
      setArticlesLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">در حال بارگذاری قانون...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!law) {
    return <div className="error">قانون مورد نظر یافت نشد.</div>;
  }

  return (
    <div className="law-detail">
      <Link to="/laws" className="back-link">
        ← بازگشت به فهرست قوانین
      </Link>

      <div className="law-header">
        <h1>{law.title}</h1>
        <div className="law-meta">
          <span>دسته: {law.category}</span>
          {law.date && <span> | تاریخ تصویب: {law.date}</span>}
        </div>
      </div>

      <div className="law-content">
        <div className="description">
          <h3>توضیحات</h3>
          <p>{law.description}</p>
        </div>

        <div className="articles-section">
          <div className="articles-header">
            <h3>مواد قانون</h3>
            {articles.length === 0 && !articlesLoading && (
              <button
                className="fetch-btn"
                onClick={handleFetchArticles}
                disabled={articlesLoading}
              >
                دریافت مواد قانون
              </button>
            )}
          </div>

          {articlesLoading ? (
            <div className="loading">در حال بارگذاری مواد قانون...</div>
          ) : articlesError ? (
            <div className="error">{articlesError}</div>
          ) : articles.length > 0 ? (
            <div className="articles-list">
              {articles.map((article) => (
                <div className="article-item" key={article._id}>
                  <h4>ماده {article.number}</h4>
                  <p>{article.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-articles">
              <p>برای مشاهده مواد قانون، روی دکمه "دریافت مواد قانون" کلیک کنید.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LawDetail; 