import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { lawsApi } from '../services/api';
import './SearchLaws.css';

const SearchLaws = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setError('لطفا عبارت جستجو را وارد کنید.');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      setSearched(true);
      
      const response = await lawsApi.searchLaws(searchTerm);
      setSearchResults(response.laws);
    } catch (err) {
      setError('خطا در جستجو. لطفا دوباره تلاش کنید.');
      console.error('Error searching laws:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-laws">
      <h2>جستجوی قوانین در وراداد</h2>
      
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="عنوان، دسته، تاریخ تصویب یا توضیحات قانون را وارد کنید..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            جستجو
          </button>
        </div>
        
        {error && <div className="search-error">{error}</div>}
      </form>
      
      {loading ? (
        <div className="search-loading">در حال جستجو...</div>
      ) : (
        <>
          {searched && (
            <div className="search-results">
              <h3>نتایج جستجو برای "{searchTerm}"</h3>
              
              {searchResults.length > 0 ? (
                <div className="results-grid">
                  {searchResults.map((law) => (
                    <div className="result-card" key={law._id}>
                      <h4>{law.title}</h4>
                      <p className="result-category">دسته: {law.category}</p>
                      <p className="result-description">
                        {law.description.substring(0, 100)}...
                      </p>
                      <Link to={`/laws/${law._id}`} className="view-result">
                        مشاهده جزئیات
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <p>هیچ قانونی با عبارت "{searchTerm}" یافت نشد.</p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchLaws;