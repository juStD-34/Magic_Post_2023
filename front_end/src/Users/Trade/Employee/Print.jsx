import React from "react";
import QRCode from "react-qr-code";

export const Print = React.forwardRef((props, ref) => {
  return (
    <table ref={ref} className="mx-auto border-2 border-gray-300">
      <thead>
        <tr>
          <th className="mx-auto border-2 border-gray-300">Magic Post</th>
          <th className="mx-auto border-2 border-gray-300">
            <QRCode value="hey" size={40} className="mx-auto" />
          </th>
        </tr>
      </thead>
      <tbody className="mx-auto border-2 border-gray-300">
        <tr>
          <td className="mx-auto border-2 border-gray-300">
            <div>
              <p>Họ tên địa chỉ người gửi</p>
              <p>Anthony Fernandez 63/120 Le Duc THo</p>
              <p>So Dien thoai: 0365280358</p>
            </div>
          </td>
          <td className="mx-auto border-2 border-gray-300">
            <div>
              <p>Họ tên địa chỉ người nhận</p>
              <p>Anthony Fernandez 63/120 Le Duc THo</p>
              <p>So Dien thoai: 0365280358</p>
            </div>
          </td>
        </tr>
        <tr>
          <td className="mx-auto border-2 border-gray-300">
            <div>
              <p>Cước:</p>
              <p>25.000 VND</p>
            </div>
          </td>
          <td className="mx-auto border-2 border-gray-300">
            <div>
              <p>Khối lượng tịnh:</p>
              <p>2kg</p>
            </div>
          </td>
        </tr>
        <tr>
          <td className="mx-auto border-2 border-gray-300">
            <p>Cam kết của người gửi:</p>
            <p>.......</p>
            <br />
            <br />
            <p>Chữ ký của người gửi</p>
          </td>
          <td className="mx-auto border-2 border-gray-300">
            <p>Ngày gửi:</p>
            <p>20/10/2023</p>
          </td>
        </tr>
        <tr>
          <td className="mx-auto border-2 border-gray-300">
            <p>Bưu cục chấp nhận</p>
            <p>Chữ ký của giao dịch viên nhận:</p>
            <br />
            <br />
          </td>
          <td className="mx-auto border-2 border-gray-300">
            <p>Ngày nhận:</p>
            <p>..../..../20....</p>
            <p>Chữ ký của người nhận</p>
            <br />
            <br />
            <br />
          </td>
        </tr>
      </tbody>
    </table>
  );
});
