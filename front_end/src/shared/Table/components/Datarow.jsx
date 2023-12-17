import Row from "./Row";

export default function Datarow({ currentItems, type, emptyRows }) {
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
            classes={classes}
            name={name}
            address={address}
            phone={phone}
            online={online}
            type={type}
          />
        );
      })}
      {emptyRows > 0 && (
        <tr style={{ height: 72 * emptyRows }}>
          <td aria-hidden />
        </tr>
      )}
    </>
  )
}
