import React from "react";

const Name = (data) => {
  const [fullName, setFullName] = React.useState(data.name);
  React.useEffect(() => {
    setFullName(data.name);
  }, [data.name]);
  const handleNameChange = (value) => {
    // Chuẩn hóa họ tên khi giá trị thay đổi
    const normalizedValue = normalizeName(value);
    data.setName(normalizedValue);
  };

  const normalizeName = (name) => {
    // Chuyển đổi tất cả các từ thành chữ cái viết hoa đầu tiên, giữ lại các ký tự khác
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ").replace(/\s+/g, ' ').trim();
  };

  return (
    <div className="sm:col-span-2">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {data.label}
      </label>
      <div className="sm:mt-2">
        <input
          value={fullName}
          type="text"
          autoComplete="text"
          className="block w-full rounded-md p-3 sm:py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          onChange={(e) => setFullName(e.target.value)}
          onBlur={() => {
            handleNameChange(fullName);
          }}
        />
      </div>
    </div>
  );
};

export default Name;
