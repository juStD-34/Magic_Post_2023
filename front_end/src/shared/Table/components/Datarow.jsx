import Row from "./Row";

export default function Datarow({ currentItems, type, emptyRows, isTrade, setChange , change}) {
  const rows = Object.values(currentItems);
  return (
    <>
      {rows.map((row) => (
        <Row
          row = {row}
          type={type}
          isTrade={isTrade}
          setChange = {setChange}
          change = {change}
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
