import Row from "./Row";

export default function Datarow({ currentItems, type, emptyRows, isTrade }) {
  const rows = Object.values(currentItems);
  return (
    <>
      {rows.map((row) => (
        <Row
          row = {row}
          type={type}
          isTrade={isTrade}
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
