import Row from "./Row";

export default function Datarow({ currentItems, type, emptyRows, isTrade, setChange , change, userId}) {
  const rows = Object.values(currentItems);
  console.log(change, "change?");

  return (
    <>
      {rows.map((row, index) => (
        <Row
          key={index}
          row = {row}
          type={type}
          isTrade={isTrade}
          setChange = {setChange}
          change = {change}
          userId = {userId}
        />
      ))}
      {emptyRows > 0 && (
        <tr style={{ height: 72 * emptyRows }}>
          <td aria-hidden />
        </tr>
      )}
    </>
  )
}
