import React, { useState } from 'react';
import { lawsApi } from '../services/api';
import './AdminPanel.css';

const AdminPanel = () => {
  const [category, setCategory] = useState('');
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [fetchedLaws, setFetchedLaws] = useState([]);

  const handleFetchLaws = async (e) => {
    e.preventDefault();
    
    if (!category.trim()) {
      setError('لطفا دسته قانون را وارد کنید.');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);
      
      const response = await lawsApi.fetchLaws(category, count);
      setSuccessMessage(`${response.laws.length} قانون جدید با موفقیت دریافت و ذخیره شد.`);
      setFetchedLaws(response.laws);
    } catch (err) {
      setError('خطا در دریافت قوانین. لطفا دوباره تلاش کنید.');
      console.error('Error fetching laws:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-panel">
      <h2>پنل مدیریت وراداد</h2>
      
      <div className="admin-card">
        <h3>افزودن قوانین جدید</h3>
        <p className="admin-description">
          برای افزودن قوانین جدید به سامانه، دسته قانون مورد نظر خود را وارد کنید.
        </p>
        
        <form onSubmit={handleFetchLaws} className="admin-form">
          <div className="form-group">
            <label htmlFor="category">دسته قانون:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="مثال: قانون مدنی، قانون تجارت، قانون کار"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="count">تعداد قوانین:</label>
            <input
              type="number"
              id="count"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              min="1"
              max="10"
            />
          </div>
          
          <button type="submit" className="fetch-laws-btn" disabled={loading}>
            {loading ? 'در حال دریافت...' : 'دریافت قوانین'}
          </button>
        </form>
        
        {error && <div className="admin-error">{error}</div>}
        {successMessage && <div className="admin-success">{successMessage}</div>}
        
        {fetchedLaws.length > 0 && (
          <div className="fetched-laws">
            <h4>قوانین دریافت شده:</h4>
            <ul>
              {fetchedLaws.map((law) => (
                <li key={law._id}>
                  <strong>{law.title}</strong>
                  <p>{law.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 