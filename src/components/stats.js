export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to the packing list</em>
      </p>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const percPacked = Math.round((numPacked / items.length) * 100);

  return (
    <footer className="stats ">
      <em>
        😎 You have {items.length} items on your list and you already packed{" "}
        {numPacked} (
        {percPacked === 100
          ? "all done packing, ready to go ✈"
          : `${percPacked} %`}
        )
      </em>
    </footer>
  );
}
