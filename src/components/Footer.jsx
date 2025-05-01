import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>وراداد</h3>
          <p>
            سامانه جامع قوانین و مقررات حقوقی ایران با هدف ارائه دسترسی آسان و سریع به قوانین و مقررات طراحی شده است.
            این سامانه به صورت مستمر به‌روزرسانی می‌شود تا آخرین تغییرات و اصلاحات قوانین را در اختیار کاربران قرار دهد.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>دسترسی سریع</h3>
          <ul>
            <li><a href="/">صفحه اصلی</a></li>
            <li><a href="/laws">فهرست قوانین</a></li>
            <li><a href="/search">جستجوی قوانین</a></li>
            <li><a href="/admin">پنل مدیریت</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>تماس با ما</h3>
          <p>
            برای ارتباط با ما و ارسال نظرات و پیشنهادات خود، لطفا از طریق ایمیل زیر با ما در تماس باشید.
          </p>
          <p className="contact-email">info@varadad.ir</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} وراداد. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
};

export default Footer; 