import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>وراداد - سامانه جامع قوانین حقوقی</h1>
          <p>
            دسترسی آسان و سریع به مجموعه‌ای کامل از قوانین و مقررات حقوقی ایران
            <br />
            با پشتیبانی از جستجوی پیشرفته و دسته‌بندی هوشمند
          </p>
          <div className="hero-buttons">
            <Link to="/laws" className="btn btn-primary">
              مشاهده قوانین
            </Link>
            <Link to="/search" className="btn btn-secondary">
              جستجوی قوانین
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>ویژگی‌های سامانه وراداد</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>بانک جامع قوانین</h3>
            <p>
              دسترسی به مجموعه‌ای کامل از قوانین و مقررات حقوقی ایران در دسته‌بندی‌های مختلف
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>جستجوی پیشرفته</h3>
            <p>
              امکان جستجو در میان قوانین براساس عنوان، موضوع، تاریخ تصویب و محتوا
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>به‌روزرسانی مستمر</h3>
            <p>
              به‌روزرسانی مداوم قوانین و مقررات با آخرین تغییرات و اصلاحات
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>رابط کاربری آسان</h3>
            <p>
              طراحی واکنش‌گرا و کاربرپسند برای استفاده در تمامی دستگاه‌ها
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>به دنبال قانون خاصی هستید؟</h2>
          <p>
            سامانه وراداد به شما امکان می‌دهد به راحتی قوانین مورد نظر خود را پیدا کنید.
          </p>
          <Link to="/search" className="btn btn-primary">
            جستجوی قوانین
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 