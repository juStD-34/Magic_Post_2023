import Row from "./Row";
import Received from "./components/Received";

export default function Datarow({ currentItems, type }) {
  return type !== null ? (
    <>
      {currentItems.map(({ name, address, online, phone }, index) => {
        const isLast = index === currentItems.length - 1;
        const classes = isLast
          ? "p-4 border-b border-gray-300"
          : "p-4 border-b border-blue-gray-50";
        return (
          <Row
            key={name}
            classes={classes}
            name={name}
            address={address}
            phone={phone}
            online={online}
            type={type}
          />
        );
      })}
    </>
  ) : (
    <>
      {currentItems.map(({ name, address }, index) => {
        const isLast = index === currentItems.length - 1;
        const classes = isLast
          ? "p-4 border-b border-gray-300"
          : "p-4 border-b border-blue-gray-50";
        return <Received name={name} address={address} classes={classes} />;
      })}
    </>
  );
}
