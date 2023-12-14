import Row from "./Row";

export default function Datarow({ currentItems, type }) {
  return (
    <>
      {currentItems.map(({ name, address, online, phone }, index) => {
        const isLast = index === currentItems.length - 1;
        const classes = isLast
          ? "p-4 border-b border-gray-300"
          : "p-4 border-b border-blue-gray-50";
        return (
          <Row
            key={name}
            name={name}
            address={address}
            phone={phone}
            classes={classes}
            online = {online}
            type={type}
          />
        );
      })}
    </>
  );
}
