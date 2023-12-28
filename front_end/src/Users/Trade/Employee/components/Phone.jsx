import React from "react";

const Phone = (data) => {
  const [isValidPhone, setValidPhone] = React.useState(true);
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    data.setPhone(value);

    // Kiểm tra tính hợp lệ khi giá trị thay đổi
    const isValid = validatePhone(value);
    setValidPhone(isValid);
  };

  const validatePhone = (phone) => {
    // Biểu thức chính quy cho số điện thoại có định dạng +84xxxxxxxxx hoặc 0xxxxxxxxx
    const phoneRegex = /^(?:\+84|0)([0-9]{9})$/;
    return phoneRegex.test(phone);
  };
  return (
    <>
      <div className="sm:col-span-2">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {data.label}
        </label>
        <div className="sm:mt-2">
          <input
            value={data.phone}
            type="tel"
            autoComplete="tel"
            className="block w-full rounded-md p-3 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            onChange={(e) => handlePhoneChange(e)}
          />
        </div>
      </div>
      {!isValidPhone && (
        <p className="text-red-500 sm:col-span-2 sm:mt-9">
          Số điện thoại không hợp lệ
        </p>
      )}
    </>
  );
};

export default Phone;
