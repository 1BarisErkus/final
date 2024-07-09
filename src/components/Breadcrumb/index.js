const Breadcrumb = ({ path }) => {
  return (
    <nav aria-label="breadcrumb" className="mt-4 mb-5">
      <ol className="breadcrumb">
        {path.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <a href="#">{item}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
