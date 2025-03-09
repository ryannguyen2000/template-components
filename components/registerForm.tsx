"use client";

import React from "react";

const RegistrationForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng Ký</h2>

        {/* Tên đầy đủ */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 mb-2">
            Tên đầy đủ
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập tên đầy đủ"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập email của bạn"
          />
        </div>

        {/* Mật khẩu */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập mật khẩu"
          />
        </div>

        {/* Xác nhận mật khẩu */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
            Xác nhận mật khẩu
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full border border-gray-300 rounded px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập lại mật khẩu"
          />
        </div>

        {/* Nút Đăng ký */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded 
                     hover:bg-blue-700 transition-colors"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
