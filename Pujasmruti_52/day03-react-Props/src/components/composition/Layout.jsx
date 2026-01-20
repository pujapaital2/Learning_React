function Layout({ header, content }) {
  return (
    <div>
      <h2>{header}</h2>
      <div>{content}</div>
    </div>
  );
}

export default Layout;
